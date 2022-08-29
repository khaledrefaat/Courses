///////////////////// Coding Exercise 15: Reverse
// Write a recursive function called reverse  which accepts a string and returns a new string in reverse.

// function reverse(arr) {
//     let rev = '';
//     function reversed(array) {
//         if (array.length === 0) return;
//         rev += array[array.length - 1];
//         reversed(array.substring(array.length - 1, 0));
//     }
//     reversed(arr);
//     return rev
// }

// colt solution (wonderful wonderful) 
function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')) // 'emosewa'


// expected output =>
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
