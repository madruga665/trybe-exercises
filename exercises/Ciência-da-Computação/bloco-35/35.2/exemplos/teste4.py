def sun(number):
    if number == 0:
        return number
    else:
        return sun(number - 1) + number


print(sun(4))
