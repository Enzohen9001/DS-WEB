<?php
abstract class  Animal {
public function falar(){
    return "Som";
}
public function mover(){
return "Anda";
}
}
class Sapo extends Animal {
public function falar(){
return "urebet";
}
}
class Tartaruga extends Animal {
public function falar(){
return "AAAAAHHHHHH";
}
}
class Cavalo extends Animal {
public function falar(){
return "potoc";
}
public function mover(){
return "Galopa " . parent::mover();
}
}
$pluto = new Sapo();
echo $pluto->falar() . "<br/>";
echo $pluto->mover() . "<br/>";
echo "-------------------------<br/>";
$garfield = new Tartaruga();
echo $garfield->falar() . "<br/>";
echo $garfield->mover() . "<br/>";
echo "-------------------------<br/>";
$ave = new Cavalo();
echo $ave->falar() . "<br/>";
echo $ave->mover() . "<br/>";
