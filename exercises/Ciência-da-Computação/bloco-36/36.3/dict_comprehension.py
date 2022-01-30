numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nomes = ["Luciano", "Vanessa", "Julia", "Heitor", "Dante"]

dobro = {number: number * 2 for number in numbers}
familia = {nome: nome.upper() for nome in nomes}

print(dobro)
print(familia)

print("===== Exercicio 6 =====")

str = "bbbbaaaacccaaaaaaddddddddccccccc"

contagem_de_letras = {letra: str.count(letra) for letra in set(str)}

print(contagem_de_letras)


print("===== Exercicio 7 =====")

for key in dobro.keys():
    if key % 2 != 0:
        dobro[key] = key * 3

print(dobro)
