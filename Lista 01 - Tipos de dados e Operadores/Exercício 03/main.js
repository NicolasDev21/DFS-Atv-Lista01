
alert('Meu Website!');

let login = prompt('Insira seu nome de usuário:','Digite aqui!');
window.confirm(`Este nome de usuário está correto? \t ${login}`);

if(login === 'Nicolas'){

    console.log(
        `Olá, ${login}! Seja bem vindo(a) novamente. Notamos que você ja estava acessando nosso site anteriormente!`
        );

    document.write(
        `Olá, ${login}! Seja bem vindo(a) novamente.<br> Notamos que você ja estava acessando nosso site anteriormente!`
        );
}
else if(login !== 'Nicolas'){

    console.warn(
        `Usuário: ${login}, não identificado(a)!`
        );

    console.log(
        `Olá, ${login}! Não conseguimos identificar seu usuário em nosso sistema. Gostaria de realizar o cadastro?`
        );

    document.write(
        `Olá, ${login}! Não conseguimos identificar seu usuário em nosso sistema.<br> Gostaria de realizar o cadastro?`
        );
}
