import Big from 'big.js';

Big.DP = 10;
Big.RM = 1;

const operate = (numberOne, numberTwo, operation) => {
  const one = new Big(numberOne)
  const two = new Big(numberTwo)
  switch (operation) {
    case '+':
      return one.plus(two);
    case '-':
      return one.minus(two);
    case '*':
      return one.times(two);
    case '÷':
      return one.div(two);
    case '%':
      return one.mod(two);

    default:
      throw Error('Unknown operation: ' + operation)
  }
}

export default operate;