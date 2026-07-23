from __future__ import annotations

import argparse
import functools
import http.server
import os
import signal
import socketserver
import sys
import threading
import urllib.parse
import webbrowser
from pathlib import Path


PROJECT_DIR = Path(__file__).resolve().parent
SITE_DIR = PROJECT_DIR / "stakeaccounts.gg"
PTERODACTYL_MARKERS = (
    "P_SERVER_UUID",
    "P_SERVER_LOCATION",
    "P_SERVER_ALLOCATION_LIMIT",
)


class SiteRequestHandler(http.server.SimpleHTTPRequestHandler):

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def _should_use_index(self) -> bool:
        request_path = urllib.parse.unquote(urllib.parse.urlsplit(self.path).path)
        relative_path = request_path.lstrip("/")
        requested_file = SITE_DIR / relative_path

        if requested_file.exists():
            return False

        return Path(relative_path).suffix == ""

    def _serve_request(self, *, head_only: bool) -> None:
        original_path = self.path
        if self._should_use_index():
            self.path = "/index.html"

        try:
            if head_only:
                super().do_HEAD()
            else:
                super().do_GET()
        finally:
            self.path = original_path

    def do_GET(self) -> None:  # noqa: N802
        self._serve_request(head_only=False)

    def do_HEAD(self) -> None:  # noqa: N802
        self._serve_request(head_only=True)

    def log_message(self, message_format: str, *args: object) -> None:
        print(f"[{self.command}] {self.path} - {message_format % args}", flush=True)


class ThreadingSiteServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True


def is_hosted_environment() -> bool:

    return any(os.environ.get(name) for name in PTERODACTYL_MARKERS) or bool(
        os.environ.get("SERVER_PORT") or os.environ.get("PORT")
    )


def environment_port() -> int:

    variable_name = "SERVER_PORT" if os.environ.get("SERVER_PORT") else "PORT"
    raw_port = os.environ.get(variable_name)
    if raw_port is None:
        return 8000

    try:
        port = int(raw_port.strip())
    except ValueError as error:
        raise ValueError(f"{variable_name} must be a number, not {raw_port!r}") from error

    if not 0 <= port <= 65535:
        raise ValueError(f"{variable_name} must be between 0 and 65535")
    return port


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Runs the site."
    )

    try:
        default_port = environment_port()
    except ValueError as error:
        parser.error(str(error))

    default_host = "0.0.0.0" if is_hosted_environment() else "127.0.0.1"
    parser.add_argument(
        "--host",
        default=default_host,
        help="",
    )
    parser.add_argument(
        "--port",
        type=int,
        default=default_port,
        help="",
    )
    browser_group = parser.add_mutually_exclusive_group()
    browser_group.add_argument(
        "--browser",
        action="store_true",
        help="",
    )
    browser_group.add_argument(
        "--no-browser",
        action="store_true",
        help="",
    )
    args = parser.parse_args()

    if not 0 <= args.port <= 65535:
        parser.error("--port must be between 0 and 65535")

    return args


def validate_site() -> None:
    required_paths = {
        SITE_DIR: SITE_DIR.is_dir(),
        SITE_DIR / "index.html": (SITE_DIR / "index.html").is_file(),
        SITE_DIR / "assets": (SITE_DIR / "assets").is_dir(),
    }
    missing_paths = [path for path, exists in required_paths.items() if not exists]
    if missing_paths:
        missing_list = "\n".join(f"  - {path}" for path in missing_paths)
        raise FileNotFoundError(f"The site is incomplete. Missing:\n{missing_list}")


def browser_url(host: str, port: int) -> str:
    display_host = host
    if host in {"0.0.0.0", "::", ""}:
        display_host = "127.0.0.1"
    elif ":" in host and not host.startswith("["):
        display_host = f"[{host}]"
    return f"http://{display_host}:{port}/"


def handle_stop_signal(_signum: int, _frame: object) -> None:

    raise KeyboardInterrupt


def main() -> int:
    args = parse_args()
    hosted = is_hosted_environment()

    try:
        validate_site()
        handler = functools.partial(SiteRequestHandler, directory=str(SITE_DIR))
        server = ThreadingSiteServer((args.host, args.port), handler)
    except (FileNotFoundError, OSError) as error:
        print(f"Could not start the site: {error}", file=sys.stderr)
        if isinstance(error, OSError) and args.port != 0:
            if hosted:
                print(
                    "Check that SERVER_PORT matches the server's primary allocation.",
                    file=sys.stderr,
                )
            else:
                print(
                    f"Try a different port, for example: python run.py --port {args.port + 1}",
                    file=sys.stderr,
                )
        return 1

    actual_port = server.server_address[1]
    url = browser_url(args.host, actual_port)

    print(f"Serving:   {SITE_DIR}", flush=True)
    print(f"Listening: {args.host}:{actual_port}", flush=True)
    if not hosted:
        print(f"Open:      {url}", flush=True)

    should_open_browser = args.browser or (not args.no_browser and not hosted)
    if should_open_browser:
        browser_timer = threading.Timer(0.4, webbrowser.open, args=(url,))
        browser_timer.daemon = True
        browser_timer.start()

    old_sigterm_handler = signal.getsignal(signal.SIGTERM)
    signal.signal(signal.SIGTERM, handle_stop_signal)
    try:
        server.serve_forever(poll_interval=0.25)
    except KeyboardInterrupt:
        print("\nStopping the site...", flush=True)
    finally:
        server.server_close()
        signal.signal(signal.SIGTERM, old_sigterm_handler)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
