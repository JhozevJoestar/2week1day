let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// через for
for (let i = 0; i < arr.length; i++) {
    if((arr[i] % 2)===0) 
      console.log(arr[i])
}
// через while
let i = 0
while (i<arr.length){
    if(arr[i] % 2){
  console.log(arr[i])
    }
  i++
}