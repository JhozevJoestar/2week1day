/**
 * Напиши функцию initials, которая принимает три параметра: имя, фамилию и отчество. 
 * Функция должна вернуть строку, в которой фамилия будет полностью, 
 * а вместо имени и отчества будут инициалы.
 */

function initials(firstname, lastname, surname) {
  return `${lastname} ${firstname[0]}.${surname[0]}.`
}

console.log(initials('Интукод', 'Джаваскриптов', 'Объектович')) 
// должен вывести "Джаваскриптов И.О."

/*****************************************************************
 * Напиши функцию sum, которая принимает массив из чисел. 
 * Функция должна вернуть сумму всех нечетных чисел массива.
 */

function sum(numbers) {
  let sum = 0
      for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2){
      sum = sum + numbers[i]
    }
  }
  return sum
}

console.log(sum([1, 3, 6, 11, 98, 7, 1]))
// должен вернуть 23, т.к. 1 + 3 + 11 + 7 + 1 = 23

/*******************************************************************
 * Напиши функцию, которая принимает на вход два массива из чисел. 
 * Функция должна вернуть true, если сумма чисел из обеих массивов одинаковая, 
 * иначе функция должна вернуть false.
 */

 function hasEqualSums(first, second) {
  let firstSum = 0
  let secondSum = 0
  for(let i = 0; i < first.length; i++){
      firstSum = first[i] + firstSum
  }
  for(let i = 0; i < second.length; i++){
      secondSum = second[i] + secondSum
  }
   if(firstSum === secondSum){
       return true
   }
  return false
}

console.log(hasEqualSums([11, 22], [1, 20, 10, 1, 1]));
// должен вернуть true, т.к. 11+22=33 и 1+20+10+1+1=33

console.log(hasEqualSums([4, 4], [3, 6]));
// должен вернуть false, т.к. 4+4=8, а 3+6=9

/*******************************************************************
 * Напиши функцию, которая принимает на вход три параметра. 
 * В первом параметре передается массив из чисел, во втором параметре передается 
 * искомое число, а в третьем количество повторений этого числа. 
 * Функция должна вернуть true, если в массиве указанное во втором параметре 
 * число повторяется указанное в третьем параметре количество раз.
 */

function repeatsXTimes(numbers, needle, count) {
  let numbersValue =0
  for (let i = 0; i < numbers.length; i++){
    if(numbers[i]===needle){
      numbersValue++
    }

}
    if(numbersValue=== count){
      return true
    } else{
      return false
    }
}
console.log(repeatsXTimes([1, 5, 1, 3, 1], 1, 3));
// должен вернуть true, потому что число 1 встречается в массиве 3 раза

console.log(repeatsXTimes([4, 1, 3, 3, 8], 3, 4));
// должен вернуть false, потому что число 3 НЕ встречается в массиве 4 раза

console.log(repeatsXTimes([1, 2, 1, 2, 4], 2, 2));
// должен вернуть true, потому что число 2 встречается в массиве 2 раза

/*****************************************************************
 * Напиши функцию, которая принимает два параметра: массив имен и число. 
 * Функция должна вернуть массив, в котором остались только те имена, длина которых соответствует указанному во втором параметре числу.
 */

function filterNames(names) {
  let arr = []
  for(let i = 0; i < names.length; i++){
    if (names[i].length === 4){
      arr.push(names[i])
    }
  }
  return arr
}

console.log(filterNames(['into', 'code', 'js', 'html', 'git'], 4));
// должен вернуть массив ['into', 'code', 'html']

/*****************************************************************
 * Напиши функцию, которая принимает два параметра: массив из слов и текст. 
 * Функция должна вернуть `true`, если в тексте встречается хотя бы одно из указанных в массиве слов.
 * Подсказка: при решении можно использовать метод `indexOf()` или `includes()`.
 */

function searchWord(words, text) {
  for(let i = 0; i < words.length; i++){
    if(text.includes(words[i])){
      return true
    }
  }
  return false
}

console.log(searchWord(['js', 'css', 'php'], 'я изучаю css')); // true
console.log(searchWord(['js', 'css', 'php'], 'intocode изменил мою жизнь')); // false
console.log(searchWord(['js', 'css', 'php'], 'я изучаю css и js')); // true

/*****************************************************************
 * Напиши функцию, которая принимает массив из чисел и возвращает новый массив, 
 * из двух чисел: самого большого и самого маленького.
 */

 function opposition(numbers) {
  let min = Infinity
  let max = -Infinity
  let arr = []
  for(let i = 0; i<numbers.length; i++){
    if (numbers[i]>max)
    max = numbers[i]
  
  
 else if (numbers[i]<min){
      min = numbers [i]
  }
}
  arr.push(min, max)
  return arr
}

console.log(opposition([1, -4, 6, -144, 5])); // [-144, 6]

/*****************************************************************
 * Напиши функцию, которая принимает два параметра: текст и число. 
 * Если количество слов в данном тексте не превышает указанное число, 
 * то функция должна вернуть текст без изменений. 
 * Иначе функция должна вернуть только указанное количество слов, а на конце добавить троеточие. 
 * Подсказка: при решении можно использовать метод `split()`.
 */

function cutText(text, limit) {
  const arr = text.split(" ")
    if (arr.length < limit){
      return text
    } else {
      let result = ""
      for(let i = 0; i < limit; i++){
        result = result + arr[i] + " " 
      }
      return result.trim() + "..."
    }
}

console.log(cutText('Всё в мире подорожало', 5))
// должен вернуть "Всё в мире подорожало", т.к. количество слов в тексте не больше 5

console.log(cutText('Программа работает не так, как надо', 2))
// должен вернуть "Программа работает..."
