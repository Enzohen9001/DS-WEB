//Funçoes java script
function somarNumeros(num1, num2) {
    return num1 + num2;
}

let resultado = somarNumeros(5, 10)
console.log(resultado)

//Trabalhando com DATA e HORA
let dataAtual = new Date()
console.log(dataAtual.toISOString())

let ano = dataAtual.getFullYear()
let mes = dataAtual.getMonth() + 1
let dia = dataAtual.getDate()
let hora = dataAtual.getHours()
let minuto = dataAtual.getMinutes()
let segundo = dataAtual.getSeconds()

console.log(`Data atual; ${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`)

//================================================================================
//outro exemplo de date
let hoje = new Date()
let diasParaAdicionar = 7

//cria uma nova data apartir da data atual
let novaData = new Date(hoje)
novaData.setMonth(novaData.getMonth() + diasParaAdicionar)

// toLocaleDateString Exibe a data no formato local, ou seja dia/mes/ano

console.log(novaData.toLocaleDateString())


let data1 = new Date ('2025-03-19')
let data2 = new Date ('2025-03-25')

let diferencaEmMilissegundos = data2 - data1


//retorna um valor absoluto (positivo)
console.log(Math.abs(-10))

//arredonda para baixo
console.log(Math.floor(4.9))

//arredonda para cima
console.log(Math.ceil(4.1))

//arredondamento padrao
console.log(Math.round(4.5))

//numero aleatorio entre 0 e 1
console.log(Math.random())

//numero aleatorio entre 0 e 10
console.log(Math.floor(Math.random() * 10))

//=================================================
//Manipulando o DOM

document.getElementById("conteudo").innerHTML = "<p> Sapo! </p>"

var valor = document.getElementById("conteudo").innerHTML;
console.log(valor)

//Usando o setArtribute e o getAtribute

document.getElementById("foto").setAttribute("src", "imagem.jpg")

console.log(document.getElementById("foto").getAttribute("src"))

//Alterando propriedades CSS

document.getElementById("conteudo").style.backgroundColor = "lightblue"
document.getElementById("foto").style.fontSize = "400px"
document.getElementById("conteudo").style.fontSize = "100px"

//Criando uma função a um botão

function aumentatamanho() {
    document.getElementById("foto").style.width = "600px"
}
function diminuitamanho() {
    document.getElementById("foto").style.width = "100px"
}

