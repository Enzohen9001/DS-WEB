<?php

    class Dono {
        public $nome;
        public $Telefone;
    
        public function __construct($novonome, $novotelefone){
            $this->nome = $novonome;
            $this->Telefone = $novotelefone;
        }

        public function exibirDados() {
            return "O nome do dono é " . $this->nome . " e o telefone é " . $this->Telefone;
       
        }

        public function alterarDados($novonome, $novotelefone){
            $this->nome = $novonome;
            $this->Telefone = $novotelefone;
        }
    }

    class Animal extends Dono {
        public $nome;
        public $especie;
        public Dono $dono;

        public function __construct($novonome, $novaespecie, Dono $novodono){
            $this->nome = $novonome;
            $this->especie = $novaespecie;
            $this->dono = $novodono;
        }

        public function exibirDados() {
            return $this->nome . "|" . $this->especie;
       
        }

        public function alterarDados($novonome, $novaespecie){
            $this->nome = $novonome;
            $this->especie = $novaespecie;
        }
    }

    $pessoa = new Dono("Enzo", "123456789");
    $animal = new Animal("Mulekatio", "Viralata", $pessoa);

    echo $pessoa -> exibirDados();
    echo "<br/>";
    echo $animal -> exibirDados();



?>