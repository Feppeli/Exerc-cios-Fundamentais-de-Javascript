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



//8---------------------------------------------------------------------------------------------------------------------
// criando uma função, passando dois parâmetros
function multiplicar(numeroA, numeroB) {

    //criando um sistema de condicional
    if (numeroA === 0 || numeroB === 0) return 0

    //Declarando constante que descriminam o maior e o menor numero
    const maiorNumero = Math.max(numeroA, numeroB)
    const menorNumero = Math.min(numeroA, numeroB)

    // Criando uma função para ser chamada dentro da função com o calculo sem operador
    function multiplicarRecursivamente(numero, multiplicador) {
    return (
    multiplicador === 1 ?
    numero :
    numero + multiplicarRecursivamente(numero, multiplicador-1)
    )
    }
    // nessa versão, garantimos que o multiplicador será será o menor número, portanto haverá o mínimo de chamadas recursivas
    return multiplicarRecursivamente(maiorNumero, menorNumero )
    }
    
console.log(multiplicar(3,5))
console.log(multiplicar(0,4))



//9---------------------------------------------------------------------------------------------------------------
//criando uma função passando doisprâmentros
function repetir(item, quantidade) {
    var resultado = []  // variável contendo uma array

    // criando um loop com for
    for (let i = 0; i < quantidade; i++)
        resultado.push(item)

    return resultado
}

//simulando
console.log(repetir("D", 14))



//10-------------------------------------------------------------------------------------------------------------------
//criando uma função com 1 parâmentro
function repetidor(quantidade) {

    //criando uma variável com valor String vazio
    let resultado = ""

    //criando um sistema de loop
    for(let i = 0; i < quantidade; i++) // enquanto o valor não foi igual aquantidade continuaráimprimindo
        resultado += '+' // passando um valor para a variável para que seja repetido

    return resultado // retornando o valor repetido
        
}

//Simulando
console.log(repetidor(20))
console.log(repetidor(12))
console.log(repetidor(8))



//11---------------------------------------------------------------------------------------------------------------------
// criamos uma variável contendo uma Array
var numeros = [1, 2, 3, 4, 5, 7, 8, 9]

//criando uma função 
function firstLast() {

    // craindo duas variáveis que vão pegar o primeiro e o ultimo item da array criada
    var first = numeros[0]
    var last = numeros[numeros.length-1]
    
    //retornando essas duas variáveis
    return [first, last]
}

//simulando
console.log(firstLast())

//OBS: o valor só será alterado caso a array seja alterada, pode ser colocado String, boolean

//12-------------------------------------------------------------------------------------------------

// criando uma função com dois parâmetros
function copia(objeto, nomeDaPropriedade) {

    //criando uma constante que recebe os dados do objeto
    const copia = Object.assign({},objeto)
    // deletando o dado selecionado no segundo parâmetro
    delete copia[nomeDaPropriedade]

    return copia //retornado a copia já com a propriedade removida
}

//13------------------------------------------------------------------------------------------------------
// criando a função
function filtrarArray(array){
    const resultado = []        //declarando uma constante

    // utilizando um sistema de loop
    for (let item of array) {
        if (typeof item === "number")   // indicando para só usar os tipo number
            resultado.push(item) // puxando as informações da array
    
    return resultado // retornando o resultado
    }
}



//14--------------------------------------------------------------------------------------------------------
// criando um objeto 
var carro = {   // Declarando as propriedades do objeto
    fabricante: "Mitsubish",
    modelo: "Pajero TR4",
    ano: 2016
}

//criando a função 
function objetoParaArray(objeto){
    return Object.entries(objeto)// retornando o objeto em arrays
}
//simulando
console.log(objetoParaArray(carro))



//15------------------------------------------------------------------------------------------------------------
//criando uma array
const lista = [1,3,4,6,8,12,34,56,76]

//função que recebe um parâmentro
function receberSomenteNumeroPares(numeros) {

    // variável que contem uma array
    let resultado = []

    //criando sistema de loop
    for(let i = 0; i < numeros.length; i += 2) {
        const numeroPar = numeros[i] % 2 === 0

        //condicional
        if (numeroPar)
            resultado.push(numeros[i])
    }

    return resultado // retornando a váriável com os intens pares dentro da array
}



//16---------------------------------------------------------------------------------------------------------

// função que recebe o parâmetro ano
function anoBisexto(ano) {
    let resultado = true

    //constantes que os itens divisíveis
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano %  100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0

    // craindo condicional para retornar se o parâmetro é um ano bisexto ou não
    if(divisivelPorQuatro) {
        return `${resultado}`
    }else if(divisivelPorCem) {
        return `${resultado}`
    }else if(divisivelPorQuatrocentos) {
        return `${resultado}`
    }else {
        return `${!resultado}`
    }
}

//simulando
console.log(anoBisexto(2002))
console.log(anoBisexto(1988))

//17------------------------------------------------------------------------------------------------------------

// criando uma array
const arrayParaSoma = [1, 2, 3]


// função passando um parâmetro
function somaDeArrays(array) {
    //retornando a soma dos itens da array
    return array.reduce((total, currentElement) => total + currentElement)
}

//simulando
console.log(somaDeArrays(arrayParaSoma))

//18---------------------------------------------------------------------------------------------------------------
//criando uma array com 2 produtos
const compras = [{nome: 'Notebook gamer', descrição: 'Eletrônico', preco: 2399}, {
    nome: 'Playstation 5', descrição: 'Eletrônico', preco: 4890}]


// função que rebe um parâmetro
function despesasTotais(itens) {

    return itens // retornando o parâmetro que recebeu
    .map(item => item.preco) // mapeando o lugar onde se encontra o preço
    .reduce((acumulador, valorAtual) => acumulador + valorAtual)  // reduzindo as duas array para uma só retornando a soma
}
    
//simulando
console.log(despesasTotais(compras))



//19--------------------------------------------------------------------------------------------------------------
// criando uma array
const valores = [1,4,5,6,7,10,13,24,53]

//função que recebe um parâmetro
function calcularMedia(media) {

    //criando uma variável para encontrar o números de elementos no array
    var dividir = media.length
    // craindo uma variável para juntar os elementos da array em um só (somar)
    var somar = media.reduce((somar, currentElement) => somar + currentElement)

    // variável para fazero calculo de média
    var resultado = somar / dividir

    return resultado.toFixed(2)// retornando o resultado com a casa décimal fixada em 2
    
}
//simulando
console.log(calcularMedia(valores))



//20----------------------------------------------------------------------------------------------------------------------

// criando uma função, como a questão pedia pra receber a base e a altura de um triângulo não precisa  criar objeto
function areaDoTriangulo(base, altura) {

    // variável com o calculo de área
    var area = (base * altura) / 2

    return area.toFixed(2) // retorno da função com a casa décimal fixada em 2
}


//simulando
console.log(areaDoTriangulo(12,8))
console.log(areaDoTriangulo(177,1))
console.log(areaDoTriangulo(20,2))



//21-------------------------------------------------------------------------------------------------------------------------

// criando uma array
const menorDaArray = [1, 3, 5, 6, 8]

// função que recebe um parâmetro
function encontrarMenorElementoArray(array) {
    // variável que encontra o menor item da array 
    var menorElemento = Math.min.apply(Math, array);

    return menorElemento // retorno da função
}

// simulando
console.log(encontrarMenorElementoArray(menorDaArray))



//22---------------------------------------------------------------------------------------------------------------------------

//a variável que criava um número 
var numeroSecreto = parseInt(Math.random() * 11)

//função que recebe um parâmetro 
function mentalista(chute) {
    
    //sistema de condicionais
    if(chute == numeroSecreto) {
        return `Você acertou!! o número secreto é: ${numeroSecreto}`

    }else if(chute > 10 || chute < 0) {
        return`você deve digitar um valor válido de 0 a 10`

    }else {
        return `você errou o número secreto era: ${numeroSecreto}`
    }

}

// simulando
console.log(mentalista(0))
console.log(mentalista(1))
console.log(mentalista(2))
console.log(mentalista(3))
console.log(mentalista(4))
console.log(mentalista(5))
console.log(mentalista(6))
console.log(mentalista(7))
console.log(mentalista(8))
console.log(mentalista(9))
console.log(mentalista(10))
console.log(mentalista(101))

//23--------------------------------------------------------------------------------------------------------------------------------------
//criando uma variável que contem um paragrafo tirado da web
var frase = "programas Java pode criar matrizes de seqüência direta ou através da leitura de texto a partir de uma fonte externa, como um arquivo ou banco de dados. A sintaxe a seguir exemplo demonstra a criação de uma matriz com algumas variáveis ​​de cadeia nele"

//função que recebe um parâmetro
function contarPalavras(palavras) {

    // criando uma variável quee vai dividir a string em partes dentro de uma array sendo cada elemento separado pelo espaço entre as palavras
    const contagem = palavras.split(" ")

    return contagem.length // retornando a contagem
}

// simulando
console.log(contarPalavras(frase)) // resultado = 44



//24-----------------------------------------------------------------------------------------------------------------------------------------
var texto = "lepra é uma infecção crônica causada pela bactéria Mycobacterium leprae ou Mycobacterium lepromatosis. Ela resulta em danos principalmente nos nervos periféricos (nervos localizados no exterior do cérebro e da medula espinhal), na pele, nos testículos, nos olhos e nas membranas mucosas do nariz e da garganta."


function contarLetra(letra, frase) {
    var quantidade = 0

    for (var i = 0; i < frase.length; i++) {
    if(frase[i] == letra) {
        quantidade++
    }
    }
    return quantidade
}
// simulando
console.log(contarLetra('a', texto))    //resultado = 32




//25---------------------------------------------------------------------------------------------------------------------------------------
//funçãoq ue recebe dois parâmetros
function buscarPalavrasSemelhantes(inicio, palavras) {
    //criando uma constante que recebe uma array vazia
    const resultado = []

    //criando um sistema de loop com condicionais
    for (let palavra of palavras)
    if(palavra.includes(inicio))
        resultado.push(palavra)
    
    return resultado // retornando a constante com as palavras semelhantes
}

//simulando
console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))



//26-----------------------------------------------------------------------------------------------------------------------------------------

// função que recebe um parâmetro
function removerVogais(frase) {

    //aqui chegamos na fase que se vocês entenderem o que eu coloquei aqui me mandem no ig= @codebytatu kkk
    return frase.replace(/[aeiou]/ig, '')
}
    
//simulando
console.log(removerVogais("Chocolate"))



//27--------------------------------------------------------------------------------------------------------------------------------------------
//objeto que vai ser utilizado na função
const obj1 = {
    a:1,
    b:2,
    c:3,
    d:4
}

//função que recebe um parâmetro
function inverter(objeto) {

    // criando uma constante que separa os elementos do objeto em um array
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    // mapeando as posições do array e passando aprâmetros para inverter
    .map( parChaveValor => parChaveValor.reverse() )
    //retornando o objeto com os elementos invertidos
    return Object.fromEntries(paresDeChaveValorInvertidos)
}
// simulando
console.log(inverter(obj1)) // vai devolver 1:a 2:b 3:c 4:d



//28-------------------------------------------------------------------------------------------------------------------------------------------
//constante que contem uma array
const arrayPraFiltrar = [1,2,3,4,10,20,30,40,110,120,130,140,1000,1200,1340]

//função que recebe dois parâmetro
function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    //retornando um numero filtrando as funções a abaixo
    return numeros.filter(numero => {
    // constante que transforma os elementos em string e contam quantos digitos contem
    const quantidadeDeDigitos = String(numero).length
    //retornando os número que contem a quantidade pré escolhida
    return quantidadeDeDigitos === quantidadeDesejada
    })
}
//simulando
console.log(filtrarPorQuantidadeDeDigitos(arrayPraFiltrar,1))
console.log(filtrarPorQuantidadeDeDigitos(arrayPraFiltrar,2))
console.log(filtrarPorQuantidadeDeDigitos(arrayPraFiltrar,3))
console.log(filtrarPorQuantidadeDeDigitos(arrayPraFiltrar,4))



//29------------------------------------------------------------------------------------------------------------------------------------------
//array com a lista de números
const listaDeNumero = [1,4,5,67,8,]

//função que recebe um parâmetro
function segundoMaior(numeros) {

    //criando uma constante que vai receber o maior número do parâmetro
    const maiorNumero = Math.max(...numeros)
    //redirecionando o selecionado da array
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)
    return segundoMaior // retornando o segundo maior valor da lista
}
    
//simulando
console.log(segundoMaior(listaDeNumero))



//30----------------------------------------------------------------------------------------------------------------------------------------



const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length

function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
        const chave = 0,
        valor = 1

        return { nome: estudante[chave], media: media(estudante[valor]) }
    })
    const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
    const melhorEstudante = estudantesOrdenados[0]

    return melhorEstudante
}
