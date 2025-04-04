document.getElementById("formInscricao").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    
    if (nome === "" || telefone === "") {
        document.getElementById("mensagem").innerHTML = "Por favor, preencha todos os campos obrigatórios.";
        document.getElementById("mensagem").style.color = "red";
        return;
    }

    document.getElementById("mensagem").innerHTML = "Inscrição enviada com sucesso!";
    document.getElementById("mensagem").style.color = "green";

    document.getElementById("formInscricao").reset();
});
