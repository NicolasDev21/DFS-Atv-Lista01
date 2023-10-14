alert('Identificador de idade');

let idade = Number.parseInt(prompt('Informe a sua idade:','Digite aqui!'));
console.log(`A idade digitada é: ${idade}`);

if(idade >= 18 && idade < 60){
    
    console.log(`Você é maior de idade!`);
    document.write('Você é maior de idade!');
}
else if(idade > 60){
    console.log('Você é idoso(a)!');
    document.write('Você é idoso(a)');
}
else if(idade < 18){

    console.warn('Ops: Você não possui permissão!');
    console.log('Você é menor de idade!');
    document.write('Você é menor de idade!');
}