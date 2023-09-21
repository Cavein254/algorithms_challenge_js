

function rorate (arr, times) {
  let a = arr.length - 1;
  let nArr = []
  let temp;
  for(let j = 0; j < times; j++) {
    for(let i = a; i > 0; i--) {
      nArr.push(arr[i]);
    }
    console.log(nArr);
  }
  console.log(nArr);
}

rorate([2,1,3,4,9], 1)
rorate([2,1,3,4,9], 2)
rorate([2,1,3,4,9], 3)
//rorate([2,1,3,4,9], 4)
