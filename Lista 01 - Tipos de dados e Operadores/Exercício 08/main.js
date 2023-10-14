/* 8. Escreva um programa que defina uma variável do tipo null para representar um valor ausente em um campo de um formulário e exiba uma mensagem de alerta no console caso o usuário deixe o campo em branco.

   O programa deve definir uma variável do tipo null para representar um valor ausente em um campo de um formulário. Caso o usuário deixe o campo em branco, uma mensagem de alerta deve ser exibida no console. */

let rg = String(prompt('Informe o número do seu RG'));
const vazio = null;

if (rg == vazio || rg == ""){

    console.warn('Este campo é obrigatório! Favor preencher.');
    document.write(`Este campo é obrigatório! Favor preencher com até 11 digitos!`);
}
else {
    document.write(`Muito obrigado por preencher!`);
}


