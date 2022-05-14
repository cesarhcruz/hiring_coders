let meuNome = 'Cesar';
let meuSobrenome = 'Cruz';
let minhaProfissao = 'Tecnico Automação';

// Sem template String

console.log(
    'Olá, eu sou ' + 
    meuNome + 
    ' ' +
    meuSobrenome +
    ' minha profissão é ' +
    minhaProfissao
);

//Com Template String
console.log(`Olá, meu nome é ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProfissao}`);

console.log(`O Resultado da soma de 1 + 1 = ${1+1}`);
console.log(`O Objeto json ${{chave: 'valor'}}`);

let meuObjeto = {
    chave: 'novoValor'
}