function isValid(s) {
    if (s.length % 2 !== 0) return false;

    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (map[char]) {
            const top = stack.pop(); 
            if (top !== map[char]) return false; 
        } else {
          
            stack.push(char);
        }
    }

    return stack.length === 0;
}
console.log(isValid("()}"));  