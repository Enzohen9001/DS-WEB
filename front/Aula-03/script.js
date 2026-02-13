//Criando o contador de itens
var contadorItem = 0

function adicionar(){
    //incrementando o contador
    contadorItem++

let novoItem = document.createElement("li")
//adiciono o texto ao item criado
novoItem.textContent = contadorItem + " - " + prompt ("digite o nome da tarefa")

//itribuo um ID
novoItem.setAttribute("id",contadorItem)

//cria o botão de remover
let botaoRemover = document.createElement("button")
botaoRemover.textContent = "Remover" //adiciona texto ao botao
botaoRemover.setAttribute("onclick",'remover('+contadorItem+')') // Adiciona uma função ao botao

novoItem.appendChild(botaoRemover)  //adiciona o botão ao novo item
document.getElementById("lista").appendChild(novoItem)
}

function remover(itemLista){
    var item1 = document.getElementById(itemLista)
    document.getElementById("lista").removeChild(item1)
}
