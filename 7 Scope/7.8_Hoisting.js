/*
    https://developer.mozilla.org/ko/docs/Glossary/Hoisting
    var의 경우 위 레퍼런스를 참고

    let의 경우 (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone)
    Temporal dead zone
    let bindings are created at the top of the (block) scope containing the declaration, commonly referred to as "hoisting". Unlike variables declared with var, which will start with the value undefined, let variables are not initialized until their definition is evaluated. Accessing the variable before the initialization results in a ReferenceError. The variable is in a "temporal dead zone" from the start of the block until the initialization is processed.

    정리하자면 let과 const도 호이스팅은 되지만, 초기화 되기 전에(before the initialization) Access한다면 TDZ가 ReferenceError를 throw.
*/

/*
    함수 호이스팅
*/

f() // 'f'
function f() {
    console.log('f')
}

/*
    변수에 할당한 함수 표현식으 호이스팅 되지 않습니다.
    이들은 변수의 스코프 규칙을 그대로 따릅니다.
    f() // ReferenceError
    let f = function() {
        console.log('f')
    }
*/