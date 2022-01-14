import requests


class RequestGet:
    def __init__(self, url):
        self.url = url

    def get_status_code(self):
        response = requests.get(self.url)
        print(response.status_code)

    def get_headers(self):
        response = requests.get(self.url)
        print(response.headers["Content-Type"])

    def get_exeption(self):
        response = requests.get(self.url)
        print(response.raise_for_status())


my_request = RequestGet("https://betrybe.com")
my_request.get_status_code()
my_request.get_headers()

my_request_exeption = RequestGet("https://httpbin.org/status/404")
my_request_exeption.get_exeption()
