function Reverse(arr) {

  return arr.split('').reverse().join('');
}

let arr = "This is a simple in the end";

console.log("This is a sample", Reverse(arr));

function ReverseTwo(arr) {
  return arr.split().reduce((str, char) => str = str + char,'' )
}

console.log("Reverse Two", ReverseTwo(arr))
