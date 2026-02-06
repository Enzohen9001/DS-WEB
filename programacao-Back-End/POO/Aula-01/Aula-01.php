<?php

class pessoa {

    public $nome; //Atributo

    public function falar () { //Metodo

        return "O meu nome é". $this->nome;
    }
}

$Enzo = new Pessoa();
$Enzo->nome = "Enzo Henrique";
echo $Enzo();

?>