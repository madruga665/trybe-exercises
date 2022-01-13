class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password


class Mailer:
    def __init__(self, from_email, from_password, to_email):
        self.from_email = from_email
        self.from_password = from_password
        self.to_email = to_email

    def reset_password(self):
        print(f"A senha do email {self.to_email} foi resetada")


luciano = User("Luciano Amâncio", "madruga665@gmail.com", "123456")
luciano_mailer = Mailer(
    "email_reset@xablau.com", "XablauEhVida", luciano.email
)
luciano_mailer.reset_password()

print(luciano.name)
print(luciano.email)
print(luciano.password)
