// var, let e const
var nome = 'jair';
var nome = 'Maria';

function saudacao() {
    var mensagem = "olá";
    console.log(mensagem);
}

if(true) {
  var nome = 'João';
}

console.log(nome);
//console.log(mensagem);//erro
saudacao();
console.log(texto);
var texto = 'teste';

//let

let telefone = '9999999';


console.log(telefone);

if(true) {
    let telefone2 = '9999999';
    let telefone = '5555555';
    console.log(telefone2);
    console.log(telefone);
}


//console.log(text);
//let text = 'meu texto';

//const

const mensagem = 'Olá';
//mensagem = 'Bom dia';// não pode reatribuir, vai dar erro
console.log(mensagem);

const contato = {
    nome: 'Jair',
    telefone: '5555555'
}

contato.nome = 'Maria';

console.log(contato);
