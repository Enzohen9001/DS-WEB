<?php

class Artista {
    public $nome;
    public $genero;

    public function __construct($novonome, $novogenero){
        $this->nome = $novonome;
        $this->genero = $novogenero;
    }

    public function exibirDados() {
        return $this->nome . " | o genero músical é " . $this->genero;
    }

    public function alterarDados($novonome, $novogenero){
        $this->nome = $novonome;
        $this->genero = $novogenero;
    }
}

class Musica {
    public $titulo;
    public $duracao;
    public Artista $artista;

    public function __construct($titulo, $duracao, Artista $artista){
        $this->titulo = $titulo;
        $this->duracao = $duracao;
        $this->artista = $artista;
    }

    public function exibirDados() {
        return $this->titulo ." | " . $this->duracao ." | ". $this->artista->nome . "<br> | e o genero músical é " . $this->artista->genero;
    }
}

$Artista = new Artista("Enzo", "Sertanejo");
$Musica = new Musica("One direction", "3:30", $Artista);

echo $Musica->exibirDados();

echo "<hr/>";

$Artista = new Artista("Mateus", "Pop");
$Musica = new Musica("Shape of You", "2:34", $Artista);

echo $Musica->exibirDados();

?>