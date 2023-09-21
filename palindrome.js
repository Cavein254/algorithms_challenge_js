
function palindromeOne(str) {
  let nStr = str.split('');
  let revStr = str.split('').reverse();
  for(let i=0; i < str.length; i++) {
    if (revStr[i] !== nStr[i]) {
      return false;
    }
  }
  return true;
}

function palindrome(str) {
  let nStr = str.split('').reverse().join('');
  if(nStr === str) {
    return true;
  }
  return false;
}

console.log(palindrome("abba"));
console.log(palindrome("hannah"));
console.log(palindrome("tasabba"));
