function formulario() {

    var nome = document.getElementById("nome").value
    var erro_nome = document.getElementById("erro_nome")
    var email = document.getElementById("email").value
    var erro_email = document.getElementById("erro_email")
    var senha = document.getElementById("senha").value
    var erro_senha = document.getElementById("erro_senha")
    var confirma_senha = document.getElementById("confirma_senha").value
    var erro_confirma_senha = document.getElementById("erro_confirma_senha")
    var cpf = document.getElementById("cpf").value
    var erro_cpf = document.getElementById("erro_cpf")
    var telefone = document.getElementById("telefone").value
    var erro_telefone = document.getElementById("erro_telefone")
    var cep = document.getElementById("cep").value
    var erro_cep = document.getElementById("erro_cep")
    var data_nascimento = document.getElementById("data_nascimento").value
    var erro_data_nascimento = document.getElementById("erro_data_nascimento")
    var valor = document.getElementById("valor").value
    var erro_valor = document.getElementById("erro_valor")
    var url = document.getElementById("url").value
    var erro_url = document.getElementById("erro_url")
    var cartao = document.getElementById("cartao").value
    var erro_cartao = document.getElementById("erro_cartao")


    //-------------------------------------------------------------------------------------------------

    if(nome == ""){
        erro_nome.innerHTML = "O campo nome está vazio."
        return false
    }
    if(nome.length < 3){
        erro_nome.innerHTML = "O nome precisa ter pelo menos 3 letras"
        return false
    }
    var regex = /^[A-Za-z\s]+$/
    if(!regex.test(nome)){
        erro_nome.innerHTML = "O nome deve conter apenas letras"
        return false
    }
    else{
        erro_nome.innerHTML = ""
    }

    //-------------------------------------------------------------------------------------------------

    if(email == ""){
        erro_email.innerHTML = "O campo E-mail está vazio."
        return false
    }

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!regexEmail.test(email)){
        erro_email.innerHTML = "O E-mail deve conter um formato válido."
        return false
    }
    else{
        erro_email.innerHTML = ""
    }
    
    //--------------------------------------------------------------------------------------------------
    
    if(senha == ""){
        erro_senha.innerHTML = "O campo senha está vazio."
        return false
    }
    if(senha.length < 8){
        erro_senha.innerHTML = "A senha deve ter pelo menos 8 caracteres."
        return false
    }
    const regexSenha = /^(?=.*[A-Z])(?=.*[!@#$%&*]).+$/

    if(!regexSenha.test(senha)){
        erro_senha.innerHTML = "A senha deve conter pelo menos uma letra maiúscula e um caractere especial. Ex: (!@#$%&*)."
        return false
    }

    if(confirma_senha == ""){
        erro_confirma_senha.innerHTML = "O campo confirmar senha está vazio."
        return false
    }
    if(confirma_senha != senha){
        erro_confirma_senha.innerHTML = "As senhas não coincidem."
        return false
    }
    else{
        erro_confirma_senha.innerHTML = ""
    }

    //--------------------------------------------------------------------------------------------------

    cpf =  cpf.replace(/[.,-]/g, "")

    if(cpf == ""){
        erro_cpf.innerHTML = "O campo CPF está vazio."
        return false
    }

    if(cpf.length != 11){
        erro_cpf.innerHTML = "O CPF deve conter 11 dígitos."
        return false
    }

    var regexCpfformato = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    if(regexCpfformato.test(cpf)){
        erro_cpf.innerHTML = "O CPF deve conter traços e pontos, apenas números, sem espaços."
    }

    var regexCpf = /^[0-9]{11}$/

    if(!regexCpf.test(cpf)){
        erro_cpf.innerHTML = "O CPF deve conter apenas números."
        return false
    }
    else{
        erro_cpf.innerHTML = ""
    }

    //--------------------------------------------------------------------------------------------------

    telefone = telefone.replace(/[-()\s]/g, "")

    if(telefone == ""){
        erro_telefone.innerHTML = "O campo telefone está vazio."
        return false
    }

    var regexTel = /^[0-9]+$/

    if(!regexTel.test(telefone)){
        erro_telefone.innerHTML = "Numero de telefone deve conter apenas numeros."
        return false
    }
   
    if(telefone.length < 8){
        erro_telefone.innerHTML = "Numero de telefone deve conter no minimo 8 numeros."
        return false
    }
    if(telefone.length > 9){
        erro_telefone.innerHTML = "Numero de telefone deve conter no maximo 10 numeros."
        return false
    } else{
        erro_telefone.innerHTML = ""
    }

    //--------------------------------------------------------------------------------------------------

    cep = cep.replace(/[-\s]/g, "")

    if (cep == "") {
        erro_cep.innerHTML = "O campo CEP está vazio."
        return false
    }
    if (cep.length != 8) {
        erro_cep.innerHTML = "O CEP deve conter 8 dígitos."
        return false
    }
    var regexCep = /^[0-9]+$/

    if (!regexCep.test(cep)) {
        erro_cep.innerHTML = "O CEP deve conter apenas números."
        return false
    }
    else{
        erro_cep.innerHTML = ""
    }

    //--------------------------------------------------------------------------------------------------

    data_nascimento = data_nascimento.replace(/[-/]/g, "")

    if (data_nascimento == "") {
        erro_data_nascimento.innerHTML = "O campo data de nascimento está vazio."
        return false
    }
    if (data_nascimento  >= 31121940) {
        erro_data_nascimento.innerHTML = "A data de nascimento deve ser depois de 31/12/1920."
        return false
    }
    if (data_nascimento < 10032026) {
        erro_data_nascimento.innerHTML = "A data de nascimento deve ser anterior a 06/03/2026."
        return false
    }
    if (data_nascimento.length != 8) {
        erro_data_nascimento.innerHTML = "A data de nascimento deve conter 8 dígitos."
        return false
    }
    var regexData = /^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])[0-9]{4}$/

    if (!regexData.test(data_nascimento)) {
        erro_data_nascimento.innerHTML = "A data de nascimento deve conter apenas números."
        return false
    }

    //--------------------------------------------------------------------------------------------------

    if (valor == "") {
        erro_valor.innerHTML = "O campo valor está vazio."
        return false
    }
    var regexValor = /^\d{1,3}(\.\d{3})*,\d{2}$/
    if (!regexValor.test(valor)) {
        erro_valor.innerHTML = "O valor deve conter um formato válido. Ex: 1.299,90"
        return false
    }
    else{
        erro_valor.innerHTML = ""
    }

    //--------------------------------------------------------------------------------------------------

    if (url == "") {
        erro_url.innerHTML = "O campo URL está vazio."
        return false
    }
    var regexUrl = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/

    if (!regexUrl.test(url)) {
        erro_url.innerHTML = "A URL deve conter um formato válido com https://. Ex: https://www.brunoattina.com"
        return false
    }
    else{
        erro_url.innerHTML = ""
    }

    //--------------------------------------------------------------------------------------------------

    if (cartao == "") {
        erro_cartao.innerHTML = "O campo cartão de crédito está vazio."
        return false
    }
        var regexCartao = /^\d{4} \d{4} \d{4}$/
    if (!regexCartao.test(cartao)) {
        erro_cartao.innerHTML = "O cartão de crédito deve conter um formato válido. Ex: 1234 5678 9012 "
        return false
    }
    else{
        erro_cartao.innerHTML = ""
    }





var resultadoDiv = document.getElementById("resultado");
    
    resultadoDiv.innerHTML = `
        <div style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; background: #f9f9f9;">
            <h3>Dados Enviados com Sucesso:</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>CPF:</strong> ${cpf}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>CEP:</strong> ${cep}</p>
            <p><strong>Data de Nascimento:</strong> ${data_nascimento}</p>
            <p><strong>Valor:</strong> R$ ${valor}</p>
            <p><strong>URL:</strong> ${url}</p>
            <p><strong>Cartão de Crédito:</strong> ${cartao}</p>
        </div>
    `;

    return false; 

}