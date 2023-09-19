

function amstrong(num) {
  while(num > 0) {
    console.log(num % 10);
    num = parseInt(num /10);
  }
  console.log("");
}

amstrong(2123);
