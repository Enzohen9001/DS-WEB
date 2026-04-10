let categoriasMap = {};

var divResposta = document.getElementById("resposta")
var inputNome = document.getElementById("nome")
var selectCategoria = document.getElementById("categoria_id")

document.addEventListener('DOMContentLoaded', async () => {
    await getCategoriasParaSelect();
    getItens();
})
document.getElementById('botaoEnviar').addEventListener('click', postItem)

async function getItens() {
    const requisicao = await fetch("http://localhost/meus-planos-api/itens")
    const resposta = await requisicao.json()

    const dados = Array.isArray(resposta.data) ? resposta.data : [resposta.data];

    const linhas = dados.map(item => `
        <tr>
            <td><input type="checkbox" onchange="toggleFeito(${item.id}, this.checked)" ${item.feito == 1 ? 'checked' : ''}></td>
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${categoriasMap[item.categoria_id] || item.categoria || 'Sem categoria'}</td>
            <td><button onclick="deleteItem(${item.id})">Deletar</button></td>
        </tr>
    `).join("")

    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr><th colspan="5">Itens Cadastrados</th></tr>
                <tr>
                    <th>Feito</th>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>${linhas}</tbody>
        </table>
    `
}

//aqui é para adicionar na tabela

async function postItem() {
    const dados = {
        nome: inputNome.value,
        categoria_id: selectCategoria.value,
        feito: 0
    };

    const requisicao = await fetch("http://localhost/meus-planos-api/itens", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })

    const resposta = await requisicao.json()

    if (resposta.status === 'success') {
        inputNome.value = ""
        selectCategoria.value = ""
        getItens()
    } else {
        alert(resposta.message)
    }
}

//aqui é para deletar

async function deleteItem(id) {
    if (!confirm("Deseja realmente excluir este item?")) return;

    const requisicao = await fetch("http://localhost/meus-planos-api/itens/" + id, {
        method: "DELETE"
    })

    const resposta = await requisicao.json()
    getItens()
}

//aqui é para marcar se ta feito ou nao

async function toggleFeito(id, isChecked) {
    const dados = {
        feito: isChecked ? 1 : 0
    };

    const requisicao = await fetch("http://localhost/meus-planos-api/itens/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    });


}

//aqui é para criar a caixa de itens com as categorias do banco
async function getCategoriasParaSelect() {
    var requisicao = await fetch("http://localhost/meus-planos-api/categorias")
    var resposta = await requisicao.json()

//cat é a variavel de categorias

    resposta.data.forEach(cat => {
        categoriasMap[cat.id] = cat.nome;
    });
    const linhas = resposta.data.map(item => `
        <option value="${item.id}">${item.nome}</option>
    `).join("");

    selectCategoria.innerHTML = `
        <option value="">Selecione uma categoria </option>
        ${linhas}
    `;
}