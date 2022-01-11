// FUNCIONES DECLARATIVAS
function sum(a, b) {
  if(!a && !b) {
    return 0;
  } else if(b === undefined) {
    b = 0;
  }
  const total = a + b
  return total;
}

function subtract(a, b) {
  if(!a && !b) {
    return 0;
  } else if( b === undefined) {
    b = 0;
  }
  const total = a - b;
  return total;
}

function divide(a, b) {
  if(!b) {
    return error('No se puede dividir entre cero');
  }
  const total = a / b;
  return total;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
