function insertSorted(stack, element) {
  if (stack.length === 0 || stack[stack.length - 1] <= element) {
    stack.push(element);
    return;
  }

  const top = stack.pop();
  insertSorted(stack, element);
  stack.push(top);
}

function sortStack(stack) {
  if (stack.length === 0) return;


  const top = stack.pop();

  sortStack(stack);

  insertSorted(stack, top);
}


let stack1 = [3, 1, 4, 2];
sortStack(stack1);
console.log(stack1); 
