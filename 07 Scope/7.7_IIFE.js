/*
    https://developer.mozilla.org/ko/docs/Glossary/IIFE

    즉시 실행 함수 표현(IIFE, Immediately Invoked Function Expression)은 정의되자마자 즉시 실행되는 Javascript Function 를 말한다.
*/

// IIFE의 형태
(function() {
    // IIFE 바디
})()

/*
    함수 표현식으로 익명 함수를 만들고 그 함수를 즉시 호출합니다.
    IIFE의 장점은 내부에 있는 것들이 모두 자신만의 스코프를 가지지만, IIFE 자체는 함수이므로 그 스코프 밖으로 무언가를 내보낼 수 있다는 겁니다.
    
    변수 secret은 IIFE의 스코프 안에서 안전하게 보호되며 외부에서 접근할 수 없습니다.
*/
const message = (function() {
    const secret = "I'm a secret!"
    return `The secret is ${secret.length} character long.`
})()
console.log(message)