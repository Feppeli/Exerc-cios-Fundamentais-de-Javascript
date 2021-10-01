//1
var usuario = {     // criando um objeto colocando o nome dentro dele em string
    nome: "Douglas",        // nome escolhido
}

function saudacao() { // cria-se uma função saudação
    var nome = usuario.nome // cria-se uma variável para puxa as informações do objeto
    return `Olá ${nome}!` // Em seguida retornamos contatenando texto + Item do objeto
}

console.log(saudacao())     // aqui nó imprimimos no console o resultado


//2
 var pessoa = {     // criando um objeto
     nome:"Douglas",        // nome não precisa ser adicionado, foi capricho de minha parte
     idade: 18,     // indica o item --idade-- e prenche com valor inteiro
 }

 function conversaoDeIdade() {      // crie um afunção
     var conversao = pessoa.idade * 365     // Adicione uma variável para puxar a informação do obj e converter em dias
     return `Você tem ${conversao} dias de vida` // retorn o valor da conversão contatenada com o texto
 }

 console.log(conversaoDeIdade())  // Em seguida pode imprimir e ver o resultado


 //3

function calcularSalario(qntdHoras, slrHora) {      // função com os dois parâmetros passados
    return `Seu salário é igual á: ${(qntdHoras * slrHora) }` // o retorno da função
}

console.log(calcularSalario(200, 12))

//4

var meses = {
    1: 'Jan', 2: 'fev',
}

function mesSelecionado() {
    var imprimirMes = meses[1],
    return imprimirMes
}
console.log(mesSelecionado())