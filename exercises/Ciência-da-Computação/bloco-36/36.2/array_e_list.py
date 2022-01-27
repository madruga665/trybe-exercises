import numpy as np

matriz = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
lista = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print("===== Matriz =====")
print(matriz)

print("===== Lista =====")
print(lista)

print("===== For na Matriz =====")
for item in matriz:
    print(item)

print("===== For na Lista =====")
for item in lista:
    print(item)

print("===== Pega o indice 1 da matriz =====")
print(matriz[:, 1])

# não da pra fatiar a lista igual na matriz
print("===== Pega o indice 1 da lista =====")
print(lista[1])
