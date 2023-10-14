alert('Minha venda com desconto!');

const produto = String('Carro - Golf GTI');
const precoOriginal = Number.parseFloat(143790.0);
const desconto = Number((precoOriginal * 15)/100);
const valorDesconto = Number(precoOriginal - desconto);

console.log(`O produto escolhido é: ${produto}`);
console.log(`Valor original do produto: ${precoOriginal.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);
console.log(`Valor com desconto de "15%": ${valorDesconto.toLocaleString('pr-BR',{style: 'currency', currency: 'BRL'})}`);

document.write(`O preço original é: ${precoOriginal.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}<br><br>`);
document.write(`Valor do produto com desconto de *15%*: ${valorDesconto.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}<br><br>`);


