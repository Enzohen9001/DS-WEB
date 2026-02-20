//Criando o contador de itens
var contadorItem = 0

function adicionar() {

    contadorItem++

    // Pegando os valores dos inputs
    let nome = document.getElementById("nome").value
    let email = document.getElementById("Email").value
    let rm = document.getElementById("RM").value
    let telefone = document.getElementById("Telefone").value
    let turma = document.getElementById("Turma").value

    // Criando um novo elemento div
    let novoAluno = document.createElement("div")

    //colocando um id um ID
    novoAluno.setAttribute("id", contadorItem);

    // Inserindo os dados dentro da div
    novoAluno.innerHTML = 
    ` Nome: ${nome} <br>
    Email: ${email} <br>
    RM: ${rm} <br>
    Telefone: ${telefone} <br>
    Turma: ${turma} <br>`

    //adiciono o item à lista
    document.getElementById("listaAlunos").appendChild(novoAluno);

    //cria o botão de remover
    let botaoRemover = document.createElement("button")
    botaoRemover.textContent = "Remover" //adiciona texto ao botao
    botaoRemover.setAttribute("onclick",'remover('+contadorItem+')') // Adiciona uma função ao botao

    novoAluno.appendChild(botaoRemover)  //adiciona o botão ao novo aluno
    document.getElementById("listaAlunos").appendChild(novoAluno)
}

function remover(itemLista){
    var item1 = document.getElementById(itemLista)
    document.getElementById("listaAlunos").removeChild(item1)
}