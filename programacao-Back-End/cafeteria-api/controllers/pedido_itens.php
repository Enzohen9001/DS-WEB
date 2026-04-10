<?php
require_once __DIR__ . '/../database.php';
$pdo = new Database();

// Define o cabeçalho para JSON (importante para o JS entender a resposta)
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Pega o ID tanto de 'id_pedido' quanto de 'pedido_id' para não ter erro
        $pedido_id = $_GET['id_pedido'] ?? $_GET['pedido_id'] ?? null;

        if ($pedido_id) {
            $stmt = $pdo->prepare("SELECT pi.*, p.nome AS produto_nome, p.preco FROM pedido_itens pi JOIN produtos p ON pi.produto_id = p.id WHERE pi.pedido_id = ?");
            $stmt->execute([$pedido_id]);
        } else {
            $stmt = $pdo->query("SELECT pi.*, p.nome AS produto_nome, p.preco FROM pedido_itens pi JOIN produtos p ON pi.produto_id = p.id");
        }

        $itens = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['status' => 'success', 'data' => $itens]);
        break;

    case 'POST':
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        $pedido_id  = $data['pedido_id']  ?? null;
        $produto_id = $data['produto_id'] ?? null;
        $quantidade = $data['quantidade'] ?? null;

        if (!$pedido_id || !$produto_id || !$quantidade) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Dados incompletos', 'debug' => $data]);
            break;
        }

        // Busca o preço atual do produto
        $stmt = $pdo->prepare("SELECT preco FROM produtos WHERE id = ?");
        $stmt->execute([$produto_id]);
        $produto = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$produto) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Produto não encontrado']);
            break;
        }

        $subtotal = $produto['preco'] * $quantidade;

        // Insere o item
        $stmt = $pdo->prepare("INSERT INTO pedido_itens (pedido_id, produto_id, quantidade, subtotal) VALUES (?, ?, ?, ?)");
        $stmt->execute([$pedido_id, $produto_id, $quantidade, $subtotal]);

        // Atualiza o total do pedido principal
        $stmt = $pdo->prepare("UPDATE pedidos SET total = (SELECT SUM(subtotal) FROM pedido_itens WHERE pedido_id = ?) WHERE id = ?");
        $stmt->execute([$pedido_id, $pedido_id]);

        echo json_encode(['status' => 'success']);
        break;

    case 'DELETE':
        $id = $_GET['id'] ?? null;
        if (!$id) {
            echo json_encode(['status' => 'error', 'message' => 'ID não informado']);
            break;
        }

        // Pega o pedido_id antes de deletar para atualizar o total depois
        $stmt = $pdo->prepare("SELECT pedido_id FROM pedido_itens WHERE id = ?");
        $stmt->execute([$id]);
        $item = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($item) {
            $p_id = $item['pedido_id'];
            $stmt = $pdo->prepare("DELETE FROM pedido_itens WHERE id = ?");
            $stmt->execute([$id]);

            $stmt = $pdo->prepare("UPDATE pedidos SET total = COALESCE((SELECT SUM(subtotal) FROM pedido_itens WHERE pedido_id = ?), 0) WHERE id = ?");
            $stmt->execute([$p_id, $p_id]);
        }

        echo json_encode(['status' => 'success']);
        break;
}