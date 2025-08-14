let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;
let jogoAtivo = true;

function verificarPalpite() {
  if (!jogoAtivo) return;

  const entrada = document.getElementById("palpite").value;
  const palpite = parseInt(entrada);

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    document.getElementById("mensagem").textContent = "Digite um número entre 1 e 100.";
    return;
  }

  tentativasRestantes--;

  if (palpite === numeroSecreto) {
    document.getElementById("mensagem").textContent = "Parabéns! Você acertou o número ${numeroSecreto}!"; 
    jogoAtivo = false;
  } else if (tentativasRestantes === 0) {
    document.getElementById("mensagem").textContent = `Infelizmente  Você perdeu! O número era ${numeroSecreto}.`;
    jogoAtivo = false;
  } else {
    const dica = palpite < numeroSecreto ? "🔼 Maior" : "🔽 Menor";
    document.getElementById("mensagem").textContent = `${dica}! Você tem ${tentativasRestantes} tentativa(s) restante(s).`;
  }

  document.getElementById("palpite").value = "";
}

function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativasRestantes = 10;
  jogoAtivo = true;
  document.getElementById("mensagem").textContent = "";
  document.getElementById("palpite").value = "";
}
