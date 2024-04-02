function olaMundo() {
  console.log(`Olá, mundo`)
}

function ola(nome) {
  console.log(`Olá, ${nome}`)
}

function dobroNumero(numero) {
  return numero * 2
}

function calcularMedia(num1, num2, num3) {
  let media = (num1 + num2 + num3) / 3
  return media
}

function maiorNumero(numero1, numero2) {
  return numero1 > numero2
    ? `O maior número é ${numero1}`
    : `O maior número é ${numero2}`
}

function multiplicador(numero) {
  return numero ** 2
}

olaMundo()
ola('Eduardo Matias')
console.log(dobroNumero(15))
console.log(calcularMedia(15, 25, 33))
console.log(maiorNumero(15, 88))
console.log(multiplicador(22))
