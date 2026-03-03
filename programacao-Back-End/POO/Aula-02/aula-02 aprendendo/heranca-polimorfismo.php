
<a href="/POO/Aula-02/polimorfismo.php" class="btn">polimorfismo</a>
<br>
<a href="/POO/Aula-02/abstracao.php" class="btn">abstração</a><br>
<?php
class Pessoa {
public $nome = "Enzo";
protected $idade = 16;
private $senha = "12345";

public function verDados(){
echo $this->nome . "<br/>";
echo $this->idade . "<br/>";
echo $this->senha . "<br/>";
}
}
class Programador extends Pessoa {
public function verDados(){

//Exibe a Classe atual
echo get_class($this) . "<br/>";
echo $this->nome . "<br/>";
echo $this->idade . "<br/>";
echo $this->senha . "<br/>";
}
}
$mateus = new Programador();
//echo $mateus->nome . "<br/>"
$mateus->verDados();


$Enzo = new Pessoa();
//echo $Enzo->nome . "<br/>"
$Enzo->verDados();
?>