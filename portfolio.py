from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class PortfolioHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        pass


def main():
    server = ThreadingHTTPServer(("127.0.0.1", PORT), PortfolioHandler)
    print(f"Portfolio running at http://127.0.0.1:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down portfolio server...")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
