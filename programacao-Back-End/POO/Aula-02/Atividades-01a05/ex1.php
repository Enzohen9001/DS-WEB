<?php
    class Pessoa {
    public $nome ;
    protected $idade;
    }

    class Funcionario Extends Pessoa {
        private $salario;
        public function calcularBonus(){}
    }

    class Gerente extends Funcionario {
        public function CalcularBonus(){
            return ($this->salario * 0.20);
        }
    }

    class Desenvolvedor extends Funcionario {
        public function CalcularBonus(){
            return ($this->salario * 0.10);
        }
    }
    $mateus =  new Gerente;
    $mateus -> nome = "Mateus";
    $mateus -> salario = 5000;
    $mateus -> CalcularBonus();
    echo "<br/> O Bonus Salarial de Mateus é de: " .$mateus -> CalcularBonus() . " R$<br/>";


    echo $mateus ->nome;

    echo "<br/>-----------------------------<br/>";

    $Enzo = new Desenvolvedor;
    $Enzo -> nome = "Enzo";
    $Enzo -> salario = 2000;
    $Enzo -> CalcularBonus();
    echo "<br/> O Bonus Salarial de Enzo é de: " .$Enzo -> CalcularBonus() . " R$<br/>";

    echo $Enzo-> nome;
?>