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
    var salario = qntdHoras * slrHora
    var valorComDesconto = 70 / 100 *salario
    return `Seu salário é de R$${valorComDesconto} já descontado o imposto`
}

console.log(calcularSalario(200, 12))

//4

function receberNomeDoMes(numero) {     // Criando uma função
    const mapeamento = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', // criando uma Array 
     'Setembro', 'Outubro', 'Agosto', 'Novembro', 'Dezembro']
    return mapeamento[--numero] // devolvendo o valor da Array pelo numero começandopelo número 1
}

//OBS: Uma array começa na posição [0], então o [--numero] está fazendo iniciar na posição [1]

console.log(receberNomeDoMes(11)) // imprimindo o mês Novembro

5//

function  maiorOuIgual(PrimeiroNumero, segundoNumero) {
    if (PrimeiroNumero > segundoNumero) {
        return `O primeiro valor é maior, sendo assim: ${PrimeiroNumero}>${segundoNumero}`
    } else if(PrimeiroNumero === segundoNumero) {
        return `O primeiro valor é igual ${PrimeiroNumero} = ${segundoNumero}`
    }else{
        return 'O primeiro valor é menor'
    }
}

console.log(maiorOuIgual(12 ,3))
console.log(maiorOuIgual(12, 12))
console.log(maiorOuIgual(2,3))

//6
