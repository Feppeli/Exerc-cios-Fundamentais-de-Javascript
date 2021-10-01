//1-----------------------------------------------------------------------------------------------------------------
var usuario = {     // criando um objeto colocando o nome dentro dele em string
    nome: "Douglas",        // nome escolhido
}

function saudacao() { // cria-se uma função saudação
    var nome = usuario.nome // cria-se uma variável para puxa as informações do objeto
    return `Olá ${nome}!` // Em seguida retornamos contatenando texto + Item do objeto
}

console.log(saudacao())     // aqui nó imprimimos no console o resultado




//2-----------------------------------------------------------------------------------------------------------------
 var pessoa = {     // criando um objeto
     nome:"Douglas",        // nome não precisa ser adicionado, foi capricho de minha parte
     idade: 18,     // indica o item --idade-- e prenche com valor inteiro
 }

 function conversaoDeIdade() {      // crie um afunção
     var conversao = pessoa.idade * 365     // Adicione uma variável para puxar a informação do obj e converter em dias
     return `Você tem ${conversao} dias de vida` // retorn o valor da conversão contatenada com o texto
 }

 console.log(conversaoDeIdade())  // Em seguida pode imprimir e ver o resultado




 //3-----------------------------------------------------------------------------------------------------------------
function calcularSalario(qntdHoras, slrHora) {      // função com os dois parâmetros passados
    var salario = qntdHoras * slrHora
    var valorComDesconto = 70 / 100 *salario
    return `Seu salário é de R$${valorComDesconto} já descontado o imposto`
}

console.log(calcularSalario(200, 12))



//4-----------------------------------------------------------------------------------------------------------------
function receberNomeDoMes(numero) {     // Criando uma função
    const mapeamento = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', // criando uma Array 
     'Setembro', 'Outubro', 'Agosto', 'Novembro', 'Dezembro']
    return mapeamento[--numero] // devolvendo o valor da Array pelo numero começandopelo número 1
}

//OBS: Uma array começa na posição [0], então o [--numero] está fazendo iniciar na posição [1]

console.log(receberNomeDoMes(11)) // imprimindo o mês Novembro



5//-----------------------------------------------------------------------------------------------------------------
function  maiorOuIgual(PrimeiroNumero, segundoNumero) { // criando uma função passando dois paramentros
    
    // Sistema de Condicional
    if (PrimeiroNumero > segundoNumero) {       // Sendo o primeiro valor maior que o segundo
        return `O primeiro valor é maior, sendo assim: ${PrimeiroNumero}>${segundoNumero}`
    } else if(PrimeiroNumero === segundoNumero) {   // sendo os valores iguais
        return `O primeiro valor é igual ${PrimeiroNumero} = ${segundoNumero}`
    }else{      // se nenhum dos casos acontecerem 
        return 'O primeiro valor é menor'
    }
}


console.log(maiorOuIgual(12 ,3))    //Simulando
console.log(maiorOuIgual(12, 12))   //simulando
console.log(maiorOuIgual(2,3))      //simulando

//6-----------------------------------------------------------------------------------------------------------------

//Criando a função
function inverso(valor) { // passo um parâmetro dentro dela
    const tipo = typeof valor   // aqui crio uma constante que pega o tipo do valor digitado no parâmetro


    //Criando um sistema de condicionais
    if (tipo == "boolean") {
        return !valor // com a exclamação no início de um tipo booleano nós invertemos/negamos no caso !true = false

    }else if (tipo == "number") {
        return -valor // já no caso number nós utilizamos o sinal de menos para inverter o valor

    }else { //fechando a condicional
        return 'booleano ou números separados, mas o parâmetro é tipo ' + tipo 
    }
}

//simulando
console.log(inverso(-15))
console.log(inverso(true))
console.log(inverso("String"))

//7-----------------------------------------------------------------------------------------------------------------

//criando uma função com 4 parametro dando um valor padrão (false) ao inclusivo
function estaEntre(numero, min, max, inclusivo = false) {
    
    //criando um sistema de condicionais
    if (numero > min && numero < max){
        return !inclusivo // retornará true

    }else if (numero < min || numero > max) {
        return inclusivo // retornará false
    
    }else if ( inclusivo == Boolean) {
        return !inclusivo// retornará false

    }else { //retornará uma menságem pendido valores válidos
        return 'Digite valores válidos da seguinte maneira: Ex.: console.log(estaEntre(nummber,number,number))'
    }
}

//Simulando
console.log(estaEntre(10,5,14))         // true
console.log(estaEntre(3,5,14))          // false
console.log(estaEntre(15,5,14))         //false
console.log(estaEntre(15,5,14,))        //false
console.log(estaEntre(15,5,14,true))    //true
console.log(estaEntre("douglas"))       //reclamando por não ter valores válidos
