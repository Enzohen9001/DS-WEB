//document.getElementById("conteudo").
function imagem1() {
    document.getElementById("sapo").setAttribute("src", "imagem.jpg")
    document.getElementById("sapo").style.width = "400px"
}
function imagem2() {
    document.getElementById("sapo").setAttribute("src", "sapo.jpg")
    document.getElementById("sapo").style.width = "400px"
}
function src(){
    var src = document.getElementById("sapo").getAttribute("src")
    console.log(src)
}