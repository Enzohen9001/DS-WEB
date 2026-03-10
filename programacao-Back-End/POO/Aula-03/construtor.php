<?php

    class Pessoa {
        public $nome;
        public $idade;

        public function __construct($novonome, $novaidade){
            $this->nome = $novonome;
            $this->idade = $novaidade;
        }

        public function exibirDados() {
            return "o nome da pessoa é " . $this->nome . " e a idade é " . $this->idade;
       
        }

        public function alterarDados($novonome, $novaidade){
            $this->nome = $novonome;
            $this->idade = $novaidade;
        }
    }

    $pessoa = new Pessoa("Enzo", 16);

    echo $pessoa -> exibirDados();

    $pessoa -> alterarDados("Mateus", 17);

    echo "<br/>";
    echo $pessoa -> exibirDados();

    ?>