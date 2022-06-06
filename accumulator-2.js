let arr = [1, -1, 2, -2, 3, -3, 4, 5, 6, 7, 8];
let i = 0
let sum = 0
while (i<arr.length){
    if (arr[i]>0){
        sum = arr[i] + sum
    }
    i++
  }
    console.log(sum)