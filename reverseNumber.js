

function reverseNumber(num) {
  let nNum = 0;
  if (num > 0){
    nNum = num.toString().split('').reverse().join('');
    console.log(nNum);
    return +nNum;
  }
  let temp = num * -1;
  nNum = temp.toString().split('').reverse().join('');
  console.log(nNum * -1);
  return nNum * -1;
}

reverseNumber(211);
reverseNumber(-22)
