import requests


class RequestPost:
    def __init__(self, url, data, headers):
        self.url = url
        self.data = data
        self.headers = headers

    def post_data(self):
        response = requests.post(self.url, data=self.data)
        print(f'response.text => {response.text}')

    def post_headers(self):
        response = requests.post(self.url, headers=self.headers)
        print(f'response.text => {response.text}')


my_request = RequestPost(
    "https://httpbin.org/post",
    "Uma string qualquer",
    {"Accept": "application/json"},
)

my_request.post_data()
my_request.post_headers()
