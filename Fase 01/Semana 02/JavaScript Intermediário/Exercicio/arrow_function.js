function soma(x, y){
    return x + y;
};

const multiplicacao = function (x, y){
    return x * y;
};

console.log(multiplicacao(5, 5));

//Arrow Function

const dividir = (x, y) =>{ 
    return x / y;
};

const objeto = () => ({nome: 'Cesar', sobrenome: 'Cruz'});