import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  if (buttonName === "+/-") {
    if (next) {
      next = (parseFloat(next) * -1).toString();
    } else if (total) {
      total = (parseFloat(total) * -1).toString();
    }
  } else if (buttonName === '.') {
    if (next) {
      if (!next.includes('.')) {
        next += '.';
      }
    } else if (operation) {
      next = '0.'
    } else if (total) {
      if (!total.includes('.')) {
        total += '.'
      } else {
        total = '0.'
      }
    }
  } else if (buttonName === '=') {
    if (next && operation) {
      total = operate(parseFloat(total), parseFloat(next), operation).toString();
      next = null;
      operation = null;
    }
  } else if (['+', '-', 'x', '÷', '%'].includes(buttonName)) {
    total = operate(parseFloat(total), parseFloat(next), operation).toString();
    next = null;
  } else if (buttonName === 'AC') {
    [total, next, operation] = [null, null, null];
  } else {
    if (!operation) {
      next = total === null ? buttonName : total + buttonName;
      total = null;
    } else next = next ? next + buttonName : buttonName;
  }
  return (
    {
      total,
      next,
      operation
    }
  )
}

export default calculate;