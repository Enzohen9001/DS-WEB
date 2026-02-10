 
<?php

    class Ventilador {

        public $material; //Atributo
        public $helices; //Atributo
        public $marca; //Atributo
        public $modelo; //Atributo
        public $cor; //Atributo

        public function gira () { //Metodo

            return "O ventilador de " . $this->modelo . " esta gira.";        
            }

        public function liga () { //Metodo

            return "O ventilador de " . $this->material . " liga." ;
        }

        public function ventila () { //Metodo

            return "O ventilador da cor ". $this->cor . " ventila muito e é muito bom.";
        }
    }
        $ventiladordeteto = new Ventilador();
        $ventiladordeteto->modelo = "Deteto";
        echo $ventiladordeteto->gira();

        echo "<br>";

        $ventiladordechao = new Ventilador();
        $ventiladordechao->material = "Plástico";
        echo $ventiladordechao->liga();

        echo "<br>";

        $ventiladorportatil = new Ventilador();
        $ventiladorportatil->cor = "branco";
        echo $ventiladorportatil->ventila();

//-----------------------------------------------------------------------------------

    class impressora {

        public $marca; //Atributo
        public $modelo; //Atributo
        public $cor; //Atributo
        public $tamanho; //Atributo
        public $material; //Atributo

        public function marca () { //Metodo

            return "A impressora da marca ". $this->marca ." é muito boa.";
        }

        public function liga () { //Metodo

            return "A impressora ". $this->cor . " liga";
        }

        public function imprime () { //Metodo

            return "A impressora de tamanho ". $this->tamanho ." imprime os melhores desenhos";
        }
    }
    
    echo "<br>";

    $impressoracinza = new impressora(); //Instanciação
    $impressoracinza->marca = "Cannon"; //Atribuição de valor
    echo $impressoracinza->marca(); //Chamada do método marca

    echo "<br>";

    $impressorabranca = new impressora();
    $impressorabranca->cor = "Branca"; 
    echo $impressorabranca->liga(); 

    echo "<br>";

    $impressorapreta = new impressora();
    $impressorapreta->tamanho = "Pequeno";
    echo $impressorapreta->imprime();



    class Fogao {
        public $marca;
        public $cor;
        public $modelo;
        public $bocas;
        public $material;

        public function marca () {

            return "O fogão da marca ". $this->marca . " é muito bom.";
        }

        public function liga () {

            return "O fogão ". $this->cor . " liga.";
        }

        public function cozinha () {

            return "O fogão de modelo ". $this->modelo . " cozinha muito bem.";
        }
    }

    echo "<br>";

    $fogaode4bocas = new Fogao();
    $fogaode4bocas->marca = "Brastemp";
    echo $fogaode4bocas->marca();

    echo "<br>";

    $fogaode6bocas = new Fogao();
    $fogaode6bocas->cor = "Preto";
    echo $fogaode6bocas->liga();

    echo "<br>";

    $fogaode2bocas = new Fogao();
    $fogaode2bocas->modelo = "Portátil";
    echo $fogaode2bocas->cozinha();

 //-----------------------------------------------------------------------------------
    class motorhome {
        public $material;
        public $rodas;
        public $moradia;
        public $comodos;
        public $cor;

        public function material () {

            return "O motorhome de material ". $this->material . " é muito resistente.";
        }
        public function rodas () {

            return "O motorhome de ". $this->rodas . " rodas é muito confortável.";
        }
        public function moradia () {

            return "O motorhome de comodos ". $this->comodos . " é muito espaçoso.";
        }
    }

    echo "<br>";

    $motorhome1 = new motorhome();
    $motorhome1->material = "Aço";
    echo $motorhome1->material();

    echo "<br>";

    $motorhome2 = new motorhome();
    $motorhome2->rodas = "6";
    echo $motorhome2->rodas();
    
    echo "<br>";

    $motorhome3 = new motorhome();
    $motorhome3->comodos = "2";
    echo $motorhome3->moradia();
    

    class Celular {
        public $marca;
        public $modelo;
        public $cor;
        public $tamanho;
        public $material;

        public function marca () {

            return "O celular da marca ". $this->marca . " é muito bom.";
        }
        public function modelo () {

            return "O celular de modelo ". $this->modelo . " é muito moderno.";
        }
        public function cor () {

            return "O celular da cor ". $this->cor ." é muito bonito.";
        }
    }

    echo "<br>";

    $celular1 = new Celular();
    $celular1->marca = "Samsung";
    echo $celular1->marca();

    echo "<br>";

    $celular2 = new Celular();
    $celular2->modelo = "Galaxy S21";
    echo $celular2->modelo();

    echo "<br>";

    $celular3 = new Celular();
    $celular3->cor = "Preto";
    echo $celular3->cor();
?>