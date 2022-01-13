def calculate(wall_size):
    preço_lata_de_tinta = 80
    litros = wall_size / 3
    quantidade_de_latas = litros / 18
    valor = quantidade_de_latas * preço_lata_de_tinta
    result = (f'Total de latas: {quantidade_de_latas}', f'R$ {valor}')
    return print(result)


calculate(108)
