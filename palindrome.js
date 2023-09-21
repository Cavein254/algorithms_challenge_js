
function palindrome(str) {
  let nStr = str.split('');
  let revStr = str.split('').reverse();
  for(let i=0; i < str.length; i++) {
    if (revStr[i] !== nStr[i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("abba"));
console.log(palindrome("hannah"));
console.log(palindrome("tasabba"));
