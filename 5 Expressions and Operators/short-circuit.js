/*
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Obsolete_Pages/Core_JavaScript_1.5_Guide/Operators/Logical_Operators
*/

const skipIt = true
let x = 0
const result1 = skipIt || x++
console.log(`result1: ${result1}, x: ${x}`) // true, 0

const doIt = true
let y = 0
const result2 = doIt && y++
console.log(`result2: ${result2}, x: ${y}`) // 0, 1