document.getElementById("conteudo").innerHTML = ""

document.getElementById("conteudo").style.backgroundColor = "lightpurple"

var valor = document.getElementById("conteudo").innerHTML;
console.log(valor)

function receba() {
    document.getElementById("conteudo").style.width = "300px"
    document.getElementById("conteudo").style.backgroundColor = "lightgreen"
    
     document.getElementById("conteudo").innerHTML = "O sucesso é a soma de pequenos esforços repetidos dia após dia."
}
function cor() {
    document.getElementById("conteudo").style.backgroundColor = "yellow"
    
}