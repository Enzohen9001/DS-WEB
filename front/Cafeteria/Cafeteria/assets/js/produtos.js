var divResposta = document.getElementById("resposta")
var inputNome = document.getElementById("nome")
var inputPreco = document.getElementById("preco")
var inputDisponivel = document.getElementById("disponivel")
var selectCategoria = document.getElementById("categoria_id") // Adicionado

document.addEventListener('DOMContentLoaded', getProdutos)
document.getElementById('botaoEnviar').addEventListener('click', postProduto)

async function getProdutos() {
    const requisicao = await fetch("http://localhost/cafeteria-api/produtos")
    const resposta = await requisicao.json()

    // Caso retorne apenas um objeto (no caso de busca por ID), transformamos em array para o map
    const dados = Array.isArray(resposta.data) ? resposta.data : [resposta.data];

    const linhas = dados.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>R$ ${Number(item.preco).toFixed(2)}</td>
            <td>${item.categoria || 'Sem categoria'}</td>
            <td>${item.disponivel ?? item.quantidade ?? '0'}</td>
            <td><button onclick="deleteProduto(${item.id})">Deletar</button></td>
        </tr>
    `).join("")

    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr><th colspan="6">Produtos Cadastrados</th></tr>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Quantidade</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>${linhas}</tbody>
        </table>
    `
}

async function postProduto() {
    const dados = {
        nome: inputNome.value,
        preco: inputPreco.value,
        disponivel: Number(inputDisponivel.value) || 0,
        categoria_id: selectCategoria.value // Agora envia a categoria
    };

    const requisicao = await fetch("http://localhost/cafeteria-api/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // OBRIGATÓRIO para o PHP ler o JSON
        },
        body: JSON.stringify(dados)
    })

    const resposta = await requisicao.json()
    
    if(resposta.status === 'success') {
        inputNome.value = ""
        inputPreco.value = ""
        inputDisponivel.value = 0
        getProdutos()
    } else {
        alert(resposta.message)
    }
}

async function deleteProduto(id) {
    if(!confirm("Deseja realmente excluir este produto?")) return;

    const requisicao = await fetch("http://localhost/cafeteria-api/produtos/" + id, {
        method: "DELETE"
    })

    const resposta = await requisicao.json()
    getProdutos()
}
