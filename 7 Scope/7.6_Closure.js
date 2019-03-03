/*
    Closure(클로저) : 함수가 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에서 정의하는 경우
    클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다. (https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)
    
*/
let globalFunc;
{
    let blockVar = 'a'
    globalFunc = function() {
        console.log(blockVar)
    }
}
globalFunc() // 'a', blockVar 변수가 있는 스코프를 빠져나왔음에도 불구하고, blockVar에 접근할 수 있다.

/*
    클로저를 이용하여 일반적으로 접근할 수 없는 것에 접근하기
*/

let f;
{
    let o = { note: 'Safe' }
    f = function() {
        return o
    }
}
let oRef = f()
oRef.note = "Not so safe after all!"
console.log(oRef.note)