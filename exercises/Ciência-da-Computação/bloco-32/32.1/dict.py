luciano = dict(nome="Luciano", idade=34, email="madruga665@gmail.com")


def greeting(user):
    return print(f'Olá {user["nome"]} seu email é {user["email"]}')


greeting(luciano)
