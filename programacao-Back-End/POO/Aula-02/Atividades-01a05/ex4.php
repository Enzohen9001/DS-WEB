<?php 

abstract class Produto {
    public $nome;
    public $Preco;
    public $Estoque;

    abstract public function calculardesconto();

    public function descontoFinal(){
        $desconto = $this->calculardesconto();

        if ($this->Estoque < 5){
            $desconto += $this->Preco * 0.20;
        }

        return $desconto;
    }
}


class Eletronico extends Produto {
    public function calculardesconto(){
        return $this -> Preco * 0.10;
    }
}

class Roupa extends Produto {
    public function calculardesconto(){
        return $this -> Preco * 0.20;
    }
}

$jaqueta = new Roupa();
$jaqueta -> nome = "Jaqueta de Couro";
$jaqueta -> Preco = 500;
$jaqueta -> Estoque = 3;

echo "O desconto para a jaqueta é de: " . $jaqueta -> descontoFinal() . " R$<br/>";
echo "O preço final da jaqueta é de: " . $jaqueta -> Preco - $jaqueta -> descontoFinal() . " R$<br/>";

echo "------------------------------------------------<br/>";

$ipad = new Eletronico();
$ipad -> nome = "iPad Pro";
$ipad -> Preco = 5000;
$ipad -> Estoque = 10;

echo "O desconto para o iPad é de: " . $ipad -> descontoFinal() . " R$<br/>";
echo "O preço final do iPad é de: " . $ipad -> Preco - $ipad -> descontoFinal() . " R$<br/>";