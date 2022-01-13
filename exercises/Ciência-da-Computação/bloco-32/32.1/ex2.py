numbers = [10, 15, 96, 55]


def average(list_numbers):
    soma = 0
    for number in list_numbers:
        soma += number
    result = soma / len(list_numbers)
    return print(result)


average(numbers)
