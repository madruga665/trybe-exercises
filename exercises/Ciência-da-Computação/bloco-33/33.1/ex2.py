class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcularArea(self):
        return self.base * self.altura


meu_retangulo = Retangulo(8, 5)

print(meu_retangulo.calcularArea())
