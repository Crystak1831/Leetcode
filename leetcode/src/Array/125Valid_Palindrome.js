/*
* Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
* */
var isPalindrome = function (s) {
    if(s !== null || s.length === 0 ){
        return true;
    }
    var i = 0;
    var j = s.length - 1;

    while(i < j){
       var st = s.charCodeAt(i)
        var en = s.charCodeAt(j)

        if(!isLetter(st)){
            i++
            continue
        }
    if(!isLetter(en)){
        j--
        continue
    }
        if (toLowerCase(st) !== toLowerCase(en)) {
            return false
        }
        i++
        j--
    }
    return true
};

var isLetter = function (code) {
    if (((code >= 48) && (code <= 57))  // numbers
        || ((code >= 65) && (code <= 90))  // uppercase
        || ((code >= 97) && (code <= 122))) {  // lowercase
        return true
    }
    else {
        return false
    }
}

var toLowerCase = function (code) {
    if (code >= 65 && code <= 90) {
        return code + 32
    }
    else {
        return code
    }
}

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s))
