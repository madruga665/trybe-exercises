names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def biggest_name(names):
    result = ""
    for name in names:
        if len(result) < len(name):
            result = name
    return print(result)


biggest_name(names)
