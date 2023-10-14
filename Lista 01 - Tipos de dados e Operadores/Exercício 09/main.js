alert(`Identificando usuário`);

let nome = String(prompt(`Informe seu nome:`));
let idade = Number(prompt(`Informe sua idade:`));

console.log(`Olá, ${nome}! Sua idade é: ${idade}`);
document.write(`Olá, <strong>${nome}</strong>!<br><br> Sua idade é: ${idade}`);