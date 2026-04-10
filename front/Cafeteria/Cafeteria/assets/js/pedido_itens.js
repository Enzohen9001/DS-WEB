const urlParams = new URLSearchParams(window.location.search);
const pedidoId = urlParams.get('pedido_id');
const cliente = urlParams.get('cliente');

const selectProdutos = document.getElementById('produto_id');
const inputQtd = document.getElementById('quantidade');
const tabelaCorpo = document.getElementById('cpTabelaItens');
const spanTotal = document.getElementById('totalGeral');

document.addEventListener('DOMContentLoaded', () => {
    if (!pedidoId) {
        window.location.href = "pedidos.html";
        return;
    }
    document.getElementById('pedidoInfo').textContent = `Pedido do ${cliente} (ID: ${pedidoId})`;
    carregarProdutos();
    carregarItensDoPedido();
    
    const botaoEnviar = document.getElementById('botaoEnviar');
    if (botaoEnviar) {
        botaoEnviar.addEventListener('click', adicionarItem);
    }
});

async function carregarProdutos() {
    try {
        const req = await fetch("http://localhost/cafeteria-api/produtos");
        const res = await req.json();

        if (!req.ok) {
            throw new Error(`HTTP ${req.status}`);
        }

        if (res.status !== 'success' || !Array.isArray(res.data)) {
            console.error("Resposta inesperada ao carregar produtos:", res);
            return;
        }

        selectProdutos.innerHTML = '<option value="">Por favor, selecione um produto</option>';
        res.data.forEach(prod => {
            const option = document.createElement('option');
            option.value = prod.id;
            option.textContent = `${prod.nome} - R$ ${parseFloat(prod.preco).toFixed(2)}`;
            selectProdutos.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

async function adicionarItem() {
    const idProd = selectProdutos.value;
    const qtd = inputQtd.value;
    
    if (!idProd || qtd < 1) {
        alert("Selecione um produto e uma quantidade válida.");
        return;
    }

    try {
        // CORREÇÃO: Os nomes das propriedades devem ser iguais ao que o PHP espera no $data
        const response = await fetch("http://localhost/cafeteria-api/controllers/itens-pedidos.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                pedido_id: pedidoId,   // Antes estava id_pedido
                produto_id: idProd,    // Antes estava id_produto
                quantidade: qtd
            })
        });

        if (response.ok) {
            inputQtd.value = ""; // Limpa o campo de quantidade
            selectProdutos.value = ""; // Reseta o select
            carregarItensDoPedido(); // Recarrega a tabela
        } else {
            const erro = await response.json();
            console.error("Erro ao cadastrar:", erro.message);
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

async function carregarItensDoPedido() {
    try {
        // Certifique-se que este caminho abaixo está correto para o seu arquivo de listagem
        const req = await fetch(`http://localhost/cafeteria-api/controllers/pedido-itens.php?id_pedido=${pedidoId}`);
        const res = await req.json();

        if (res.status === 'success') {
            let total = 0;
            tabelaCorpo.innerHTML = "";
            
            res.data.forEach(item => {
                const preco = parseFloat(item.preco);
                const qtd = parseInt(item.quantidade);
                const subtotal = qtd * preco;
                total += subtotal;

                tabelaCorpo.innerHTML += `
                    <tr>
                        <td>${item.produto_nome}</td> 
                        <td>${qtd}</td>
                        <td>R$ ${preco.toFixed(2).replace('.', ',')}</td>
                        <td>R$ ${subtotal.toFixed(2).replace('.', ',')}</td>
                    </tr>`;
            });
            
            if (spanTotal) {
                spanTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
            }
        }
    } catch (error) {
        console.error("Erro ao carregar itens:", error);
    }
}