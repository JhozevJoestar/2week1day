let arr = ['Python', 'JS', 'php', 'Basic', 'Paskal', 'C#', 'C++', 'Ruby', 'C', 'Objective-C'];
let arr1 = []
for (let i = 0; i<arr.length; i++) {
      if (arr[i].length>3){
          arr1.push(arr[i])
    }
}
console.log(arr1)