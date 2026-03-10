<?php
    class fabricante {
        public $nome;
        public $paisorigem;

        public function __construct($novonome, $novopaisorigem){
            $this->nome = $novonome;
            $this->paisorigem = $novopaisorigem;
        }

        public function exibirDados() {
            return "O nome do fabricante é " . $this->nome . " e o país de origem é " . $this->paisorigem;
       
        }

    }


    class motor {
        public $potencia;
        public $combustivel;

        public function __construct($novapotencia, $novocombustivel){
            $this->potencia = $novapotencia;
            $this->combustivel = $novocombustivel;
        }

        public function exibirDados() {
            return "A potência do motor é " . $this->potencia . " e o combustível é " . $this->combustivel;
       
        }
    }

    class Carro {
        public $modelo;
        public $ano;
        public fabricante $fabricante;
        public motor $motor;

        public function __construct($novomodelo, $novoano, fabricante $novofabricante, motor $novomotor){
            $this->modelo = $novomodelo;
            $this->ano = $novoano;
            $this->fabricante = $novofabricante;
            $this->motor = $novomotor;
        }

         public function exibirFicha() {
        return $this->modelo . " | " . $this->ano . "<br>" .$this->fabricante->exibirDados() . "<br>" .$this->motor->exibirDados();
        }
    }

    $fabricante = new fabricante("Honda", "Japão");
    $motor = new motor("150cv", "Flex");

    $carro = new Carro("Civic", 2024, $fabricante, $motor);

    echo $carro->exibirFicha();

?>