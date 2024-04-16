
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("O que   o Vestibular causa?");

    
    if (respostaTime.toLowerCase() === "ansiedade") {
      alert("Isso mesmo a doença mental mais abangente hoje em dia");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
