number = [1, 2, 3, 4, 5]


def reverse_list(array_list):
    new_list = list(reversed(array_list))
    return new_list


print(reverse_list(number))


def reverse(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]


print("função com recursão")
print(reverse(number))


def countdown(n):
    if n == 0:
        return
    else:
        print(n)
        countdown(n - 1)


countdown(10)
