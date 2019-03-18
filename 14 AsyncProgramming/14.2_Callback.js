/*
    콜백은 간단히 말해 나중에 호출할 함수입니다.
    콜백 함수도 일반적인 js 함수일 뿐입니다.
    콜백 함수는 일반적으로 다른 함수에 넘기거나 객체의 프로퍼티로 사용합니다.
    드물게는 배열에 넣어서 쓸 때도 있습니다.
    항상 그런 건 아니지만, 콜백은 보통 익명 함수로 사용합니다.
*/

console.log("Befor timeout: " + new Date())
function f() {
    console.log("After timeout: " + new Date())
}
setTimeout(f, 60*1000) // 1분
console.log("I happen after setTimeout!")
console.log("Me too!")