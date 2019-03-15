/*
    우리는 IIFE를 이용해서 클로저를 만들 수 있다는 것을 압니다.
    이제 IIFE로 비동기적 코드를 처리하는 중요한 예제를 하나 살펴봅시다.

    IIFE를 사용하는 사례 중 하나는 비동기적 코드가 정확히 동작할 수 있도록
    새 변수를 새 스코프에 만드는 겁니다.
    5초에서 시작하고 카운트다운이 끝나면 "go"를 표시하는 고전적 타이머 예제를 만들어 봅시다.
*/

// setTimeout(Func, time)
// setTimeout(() =>  console.log("hello"), 1500) // 1.5초 후 hello 출력

/*
    아래 코드는 -1이 6번 출력될 뿐이다.
    setTimeout에 전달된 함수가 루프 안에서 실행되지 않고 루프가 종료된 뒤 실행됐기 때문
*/
var i
for(i=5; i>=0; i--) {
    setTimeout(function() {
        console.log(i===0 ? "go!" : i)
    }, (5-i)*1000)
}

/*
    IIFE를 사용하면 해결
*/
for(i=5; i>=0; i--) {
    (function(i) {
        setTimeout(function() {
            console.log(i===0 ? "go!" : i)
        }, (5-i)*1000)
    })(i)
}

/*
    let 키워드 사용
    let을 사용해도 for 루프 바깥에 썼다면 똑같은 문제 발생
    let을 아래와 같이 사용하면 js는 루프의 단계마다 변수 i의 복사본을 새로 만듭니다.
    따라서 setTimeout에 전달된 함수가 실해될 때는 독립 스코프에서 변수를 받습니다.
*/
for(let i=5; i>=0; i--) {
    setTimeout(function() {
        console.log(i===0 ? "go!" : i)
    }, (5-i)*1000);
}