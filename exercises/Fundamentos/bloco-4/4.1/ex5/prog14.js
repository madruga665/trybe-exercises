let custoProduto = 10;
let valorVenda = 20;

if (custoProduto <= 0 || valorVenda <= 0) {
  console.log(`Erro valor de entrada não pode ser menor 0`);
} else {
  let imposto = (custoProduto / 100) * 20;

  let custoTotal = custoProduto + imposto;

  let lucro = valorVenda - custoTotal;

  console.log(lucro);
}
