def get_address(id):
    return id % 10


users = [
    {"id": 1, "name": "Juan", "age": 20},
    {"id": 2, "name": "Pedro", "age": 30},
    {"id": 3, "name": "Maria", "age": 40},
    {"id": 5, "name": "Pablo", "age": 60},
    {"id": 14, "name": "Jose", "age": 50},
    {"id": 15, "name": "Xablau", "age": 20},
]


def search_user(id, users):
    return users[get_address(id)]


print(search_user(14, users))
