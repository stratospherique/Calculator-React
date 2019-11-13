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
      if (operation && !total) {
        total = next;
        next = '0';
      }
      if (!next.includes('.')) {
        next += '.';
      }
    } else if (operation) {
      next = '0.'
    } else {
      next = '0.'
    }
  } else if (buttonName === '=') {
    if (next && operation) {
      total = operate(total || '0', next, operation).toString();
      next = null;
      operation = null;
    }
  } else if (['+', '-', 'x', '÷', '%'].includes(buttonName)) {
    if (next && operation) {
      if (operation !== buttonName) {
        total = operate(total || '0', next, operation).toString();
        next = null;
        operation = buttonName;
      } else {
        total = operate(total || '0', next, operation).toString();
        next = null;
        operation = null;
      }
    } else {
      operation = buttonName;
    }

  } else if (buttonName === 'AC') {
    [total, next, operation] = [null, null, null];
  } else {
    if (!operation) {
      next = next === null ? buttonName : next + buttonName;
      next = next === '0' ? null : next;
      total = null;
    } else {
      if (total) {
        next = next === null ? buttonName : next === '0' ? null : next + buttonName;
      } else {
        total = next ? next : null;
        next = buttonName === '0' ? null : buttonName;
      }
    }
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