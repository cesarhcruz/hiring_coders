let isValid = true;

//Sem ternário
function verify(isValid){
    if(!isValid){
        return true;
    } else {
        return false;
    }
}

//Com ternario

const result = isValid ? true : false; //const uma vez determinado o valor não pode ser mais alterado

let zero = 0;

const numeroResultado = zero == 0 ? 0 : -1;

