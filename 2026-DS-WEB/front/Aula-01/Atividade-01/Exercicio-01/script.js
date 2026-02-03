let nome = prompt ("Qual é seu nome?")

let sobrenome = prompt ("Qual é seu sobre nome?")

if (nome == null) {
    alert("Você cancelou, caso queira colocar seu nome recarregue a pagina se não apenas aperte ok e continue.")
} else {
    alert("Olá, " + nome + " " + sobrenome + "!")
}