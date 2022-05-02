var elemento =[];
var topo = -1;
const MAX = 10;

function push(num){
    if (topo < MAX){
        topo = topo + 1;
        elementos[topo] = num;
    }
    else{
        console.log("Pilha esta Cheia");
    }
}

function pop(){
    if (topo != -1){
        let num = elementos[topo];
        topo = topo -1;
        return num;
    }
    else {
        console.log("Pilha esta vazia!")
    }
}

push(10);
push(20);
push(30);

console.log("elementos");