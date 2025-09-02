function evaluatePostfix(expression) {
  const stack = [];
  const tokens = expression.trim().split(/\s+/);

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      let b = stack.pop();
      let a = stack.pop();
      let result;

      switch (token) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = Math.trunc(a / b);
          break;
        default:
          throw new Error("Unsupported operator: " + token);
      }

      stack.push(result);
    }
  }

  return stack.pop();
}


console.log(evaluatePostfix("2 1 + 3 *"));         
