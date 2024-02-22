const verificaChute = (chute) => {
  const numero = +chute;  

  if (chuteInvalido(numero)) {
    if(chute === "game over") {
      document.body.style = "background-color: #FF004D; color: #EBF400"
      document.body.innerHTML = `
        <h2>Game Over!!!</h2>
        <img src="../img/icone-fim-de-jogo.png"/>      
        <h3>Você escolheu sair.</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
    } else {
      elementoChute.innerHTML += `<div style="color: red">Valor inválido.<br> Tente dizer um número.</div>` 
    }
      
  }

  maiorOuMenor(numero);

  numeroCerto(numero);
  
};

function chuteInvalido(numero) {
  
    return Number.isNaN(numero)    
   
}

const maiorOuMenor = (numero) =>
  numero > maiorValor || numero < menorValor
    ? (elementoChute.innerHTML += `<div style="color: red">Valor inválido.<br> O número secreto deve estar entre ${menorValor} e ${maiorValor}</div>`)
    : console.log("Valor válido");

const numeroCerto = (numero) => {
  if(numero === numeroSecreto){
    document.body.style = "background-color: #9CFF2E"
    document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <img src="../img/icone-celebracao.png"/>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
  } else if(numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-hand-point-down"></i></div>`
  } else if(numero < numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-hand-point-up"></i></div>`
  } 
};

recognition.addEventListener("end", () => recognition.start());

document.body.addEventListener('click', e => {
  if (e.target.id == 'jogar-novamente') window.location.reload()
})
