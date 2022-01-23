def count_even_numbers(numbers: list) -> int:
    counter = 0
    for index in numbers:
        if index % 2 == 0:
            counter += 1
    return counter


numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
]


print(count_even_numbers(numbers))


def count_even_numbers_recursive(numbers: list) -> int:
    if len(numbers) == 0:
        return 0
    else:
        if numbers[0] % 2 == 0:
            return 1 + count_even_numbers_recursive(numbers[1:])
        else:
            return count_even_numbers_recursive(numbers[1:])


print("função com recursão")
print(count_even_numbers_recursive(numbers))
