// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';
  if (numbers.some(n => n > 9) || numbers.some(n => n < 0))
    return 'não é possível gerar um número de telefone com esses valores';
  if (numbers.some(number => numbers.filter((v) => (v === number)).length >= 3))
    return 'não é possível gerar um número de telefone com esses valores';
  return `(${numbers.slice(0, 2).join('')}) ${numbers.slice(2, 7).join('')}-${numbers.slice(7, 11).join('')}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  } else if (lineA > lineB + lineC) {
    return false;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(texto) {
  let fun = /\d+/g;
  let array = texto.match(fun);
  let soma = 0;
  for (let a = 0; a < array.length; a++) {
    soma += parseInt(array[a], 10);
  }
  if (soma > 1) {
    return soma + ' copos de água';
  } else {
    return soma + ' copo de água';
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
