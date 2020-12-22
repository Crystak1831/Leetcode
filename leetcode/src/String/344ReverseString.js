/*
Write a function that reverses a string. The input string is given as an array of characters char[].

    Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

    You may assume all the characters consist of printable ascii characters.



    Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/




//解法一：用reverse()
// var reverseString = function (s) {
//         let reverseArray = s.reverse()
//         return reverseArray
//     }



//解法二：新的ES6解法
// var reverseString = function (s) {
//    for(let i = 0; i < s.length;i++){
//        [s[i], s[s.length - 1]] = [s[s.length - 1], s[i]]
//    }
//        return s
// }


// let s = ["h","e","l","l","o"]
// console.log(reverseString(s))

//如果给出的是string hello 转换成 olleh
var reverseString = function (s) {
    let arrString = s.split("")

    let arrReverse = arrString.reverse()
    let res = arrReverse.join('')
    return res

}
let s = "hello"
console.log(reverseString(s))
