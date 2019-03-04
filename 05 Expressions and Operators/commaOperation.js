/*
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comma_Operator
    
    쉼표 연산자는 표현식을 결합하여 두 표현식을 평가한 후, 두 번째 표현식의 결과를 반환합니다.
*/

let x = 0, y = 10, z
z = (x++, y++) // x = 1, y = 11
console.log(z) // 10