alert('Convertendo grau de temperatura!')

let celsius = Number(prompt(`Informe o valor em grau Celsius:`));
const Fahrenheit = (celsius * 1.8) + 32;

console.log(`O número inserido é: ${celsius}ºC.<br><br> Convertido para Fahrenheit ficará: ${Fahrenheit}ºF !`);
document.write(`O número inserido é: ${celsius}ºC.<br><br> Convertido para Fahrenheit ficará: ${Fahrenheit}ºF !`);