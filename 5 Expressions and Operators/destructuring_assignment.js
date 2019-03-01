/*
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

    ES6에서 새로 도입된 기능.
    한국어로 구조 분해 할당(in MDN), 해체 할당 (in LearningJS 3rd Edition)
    객체나 배열을 변수로 '해체'할 수 있습니다.
*/

function objDst1() {
    // 객체 선언
    const obj = { b: 2, c: 3, d: 4 }

    // 객체 해체 할당
    const {a, b, c} = obj
    console.log(a) // undefined : obj에는 "a" 프로퍼티가 없음
    console.log(b) // 2
    console.log(c) // 3
    //console.log(d) // ReferenceError : "d"는 정의되지 않음
}
objDst1()
/*
    위처럼 선언과 동시에 할당을 하지 않고, 아래와 같이 할당만 할 시에는 반드시 괄호 안에서 해줘야 한다.
    괄호를 쓰지 않으면 js는 표현식 좌변을 블록으로 해석
*/

function objDst2() {
    const obj = { b: 2, c: 3, d: 4 }
    let a, b, c
    //{a, b, c} = obj 에러
    ({a, b, c} = obj) // 동작
}
objDst2()

// 배열 선언
const arr = [1, 2, 3, 4, 5]

// 배열 해체 할당
let [x, y, ...rest] = arr
console.log(x) // 1
console.log(y) // 2
console.log(rest) // [3, 4, 5]
