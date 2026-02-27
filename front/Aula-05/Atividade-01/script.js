var Hulk = document.getElementById("Hulk")
var contador = 0
var contadorTexto = document.getElementById("contador")
var finalGif = document.getElementById("finalGif")

var x = 100
var y = 100

document.addEventListener("keydown", function(event){

    if(event.key === "w"){
        y -= 15
    }

    if(event.key === "s"){
        y += 15
    }

    if(event.key === "a"){
        x -= 15
    }

    if(event.key === "d"){
        x += 15
    }

    Hulk.style.left = x + "px"
    Hulk.style.top = y + "px"

    verificarColisao()

})

var pessoa = document.getElementById("pessoa")

function gerarPessoa(){


    var posX = Math.floor(Math.random() * 1300)
    var posY = Math.floor(Math.random() * 500)

    pessoa.style.left = posX + "px"
    pessoa.style.top = posY + "px"
}

gerarPessoa()


        //getBoundingClientRect pega as coordenadas da caixa do elemento para permitir detectar colisão entre objetos.
function verificarColisao(){
    var hulkRect = Hulk.getBoundingClientRect()
    var pessoaRect = pessoa.getBoundingClientRect()

    if(
        hulkRect.left < pessoaRect.right &&
        hulkRect.right > pessoaRect.left &&
        hulkRect.top < pessoaRect.bottom &&
        hulkRect.bottom > pessoaRect.top
    ){
        contador++  

        contadorTexto.innerHTML = "Vítimas: " + contador

        gerarPessoa()

        if(contador >= 5  ){
            finalGif.src = "https://i.pinimg.com/originals/39/93/9d/39939d64e15d6602d50f2116f39c26fa.gif"
            finalGif.style.display = "block"
            
        }
    }
}