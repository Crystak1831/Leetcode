function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => (a - b));
    console.log(A)
    return Math.max(A[A.length - 1] * A[A.length - 2] * A[A.length - 3], A[A.length - 1] * A[0] * A[1]) ;
}

const arr =[9,5,-1,2,-3]
console.log(solution(arr))
