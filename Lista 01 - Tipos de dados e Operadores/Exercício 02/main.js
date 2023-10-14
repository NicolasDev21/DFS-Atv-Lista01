alert('Meu produto à venda!');

const product = 'YAMAHA - Lander 250 ABS'
const price = 24390.0

console.log(`Produto escolhido:${product.toUpperCase()} \nPreço do produto: ${price.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);

document.write(`<h1><span>*</span>Produto escolhido:<strong>${product.toUpperCase()}</strong></h1><br><h2><span>*</span>Preço do produto: ${price.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}</h2>`);
