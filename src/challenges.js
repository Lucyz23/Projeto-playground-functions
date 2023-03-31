// Desafio 1
function compareTrue(parametro1, parametro2) {
  return parametro1 && parametro2;
}

// Desafio 2 CORRETO
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3 EM PROCESSO
function splitSentence(name) {
  return name.split(' ');
}
// Desafio 4
function concatName(nomes) {
  const lastName = nomes.pop();
  nomes.unshift(lastName);
  return nomes.slice(0, 2).join(', ');
}

// Desafio 5
function footballPoints(wins, draws) {
  const WIN = 3;
  const DRAW = 1;
  return (wins * WIN) + (draws * DRAW);
}

// Desafio 6
function highestCount(numeros) {
  let maior;
  let numeroVezesDoMaior = 0;

  for (numero of numeros) {
    if (!maior) maior = numero;

    if (numero === maior) {
      numeroVezesDoMaior++
    } else if (numero > maior) {
      maior = numero;
      numeroVezesDoMaior = 1;
    }
  }
  return numeroVezesDoMaior;
}

// Desafio 7
function catAndMouse(rato, gato1, gato2) {
  const distGato1 = Math.abs(gato1 - rato);
  const distGato2 = Math.abs(gato2 - rato);

  if (distGato2 > distGato1) return 'cat1';
  if (distGato2 < distGato1) return 'cat2';

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros) {
  const resultados = [];
  for (numero of numeros) {
    if (numero % 3 === 0 && numero % 5 === 0) resultados.push('fizzBuzz');
    else if (numero % 3 === 0) resultados.push('fizz');
    else if (numero % 5 === 0) resultados.push('buzz');
    else resultados.push('bug!');

  }return resultados;
}

// Desafio 9
function encode(sentence) {
  const encondeChars = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5
  };
  let result = '';
  for (letter of sentence) {
    if (encondeChars[letter]) result += encondeChars[letter];
    else result += letter;

  }return result;
}
function decode(sentence) {
  const decodeChars = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u'
  };

  let result = '';
  for (letter of sentence) {
    if (decodeChars[letter]) result += decodeChars[letter];
    else result += letter;

  }return result;

}

// Desafio 10
function techList(items, nome) {
  if (items.length <= 0) return 'Vazio!';

  return items.sort().map(item => ({ tech: item, name: nome }));
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
