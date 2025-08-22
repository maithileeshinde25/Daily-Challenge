function reverseWords(s) {
  
 console.log(s.trim().split(/\s+/).reverse().join(" "));
}

reverseWords("the sky is blue");