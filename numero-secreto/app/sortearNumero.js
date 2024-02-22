const menorValor = 1
const maiorValor = 100
const elementoMenorValor = document.querySelector('[data-menor]')
const elementoMaiorValormaior = document.querySelector('[data-maior]')

let numeroSecreto = parseInt(Math.random() * maiorValor+1)

const numeroSorteado = () => {
  elementoMenorValor.textContent = menorValor
  elementoMaiorValormaior.textContent = maiorValor
  console.log(numeroSecreto);
}

numeroSorteado()
