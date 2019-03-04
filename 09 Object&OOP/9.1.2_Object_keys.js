/*
    Object.keys는 객체에서 나열 가능한 문자열 프로퍼티를 배열로 반환합니다.
*/

const SYM = Symbol()
const o = { a: 1, b: 2, c: 3, [SYM]: 4 }
Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`))