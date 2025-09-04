function insertAtBottom(stack, item) {
    if (stack.length === 0) {
        stack.push(item);
        return;
    }

    let top = stack.pop();

    insertAtBottom(stack, item);

    stack.push(top);
}

function reverseStack(stack) {
    if (stack.length === 0) {
        return;
    }

    let top = stack.pop();

   
    reverseStack(stack);

    insertAtBottom(stack, top);
}

let stack1 = [1, 2, 3, 4];
reverseStack(stack1);
console.log(stack1); 