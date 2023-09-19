

function amstrong(num) {
  let init = num;
  let sum = 0;
  let power = num.toString().length;
  let sPow;
  num.toString().split('').forEach(c => {
    sPow = Math.pow(parseInt(c), power);
    sum += sPow
  })
  if(sum != init) {
    console.log(false);
    return false;
  }
  console.log(true);
  return true;
}
amstrong(407);
amstrong(2123);
amstrong(8204);
