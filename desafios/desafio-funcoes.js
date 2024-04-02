function calcularIMC(altura, peso) {
  let imc = peso / (altura * altura)
  let classificacao = ''

  if (imc <= 16.9) {
    classificacao = 'Muito abaixo do peso'
  } else if (imc >= 17 && imc <= 18.4) {
    classificacao = 'Abaixo do peso'
  } else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = 'Peso normal'
  } else if (imc >= 25 && imc <= 29.9) {
    classificacao = 'Acima do peso'
  } else if (imc >= 30 && imc <= 34.9) {
    classificacao = 'Obesidade grau I'
  } else if (imc >= 35 && imc <= 40) {
    classificacao = 'Obesidade grau II'
  } else {
    classificacao = 'Obesidade grau III'
  }
  return classificacao
}

function calcularFatorial(numero) {
  let resultadoFatorial = 1

  for (let index = 1; index <= numero; index++) {
    resultadoFatorial = resultadoFatorial * index
  }
  return resultadoFatorial
}

function converterDolarEmReal(valorEmDolar) {
  let cotacaoDolar = 4.8
  let valorEmReal = cotacaoDolar * valorEmDolar

  return `R$ ${valorEmReal}`
}

function areaRentagulo(altura, largura) {
  return altura * largura
}

function areaCirular(raio) {
  let pi = 3.14
  let area = Math.pi * raio ** 2

  return area
}

function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(numero * i)
  }
}
