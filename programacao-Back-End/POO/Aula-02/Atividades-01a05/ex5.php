<?php
class Documento {
    private $numero;
}

function validarCPF($cpf) {
    $cpf = preg_replace('/[^0-9]/', '', $cpf);

    
    if (strlen($cpf) != 11 || preg_match('/(\d)\1{10}/', $cpf)) {
        return false;
    }

    
    for ($t = 9; $t < 11; $t++) {
        for ($d = 0, $c = 0; $c < $t; $c++) {
            $d += $cpf[$c] * (($t + 1) - $c);
        }
        $d = ((10 * $d) % 11) % 10;
        if ($cpf[$t] != $d) { 
            return false;
        }
    }

    return true;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validador CPF</title>
</head>
<body>
    <h2>Digite seu CPF</h2>
    <form method="POST">
        <input type="text" name="cpf" placeholder="Digite seu CPF">
        <button type="submit">Validar</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $cpf_teste = $_POST["cpf"]; 
        $resultado = validarCPF($cpf_teste);

        echo "<h3>CPF digitado: " . ($resultado ? "Válido" : "Inválido") . "</h3>"; 
    }
    ?>
</body>
</html>