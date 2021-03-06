/*
    비동기적 실행에서 혼란스럽고 에러도 자주 일어나는 부분은
    스코프와 클로저가 비동기적 실행에 영향을 미치는 부분입니다.
    함수를 호출하면 항상 클로저가 만들어집니다.
    매개변수를 포함해 함수 안에 만든 변수는 모두 무언가가 자신에 접속할 수 있는 한 계속 존재합니다.
*/

function countdown() {
    let i
    console.log("Countdown:")
    for(i=5; i>=0; i--) {
        setTimeout(function() {
            console.log(i===0 ? "GO!" : i)

        }, (5-i)*1000)
    }
}

// countdown() // -1을 6번 출력

/*
    -1만 6번 출력되는 이유
    for 루프가 실행을 마치고 i의 값이 -1이 된 다음에서야 콜백이 실행되기 시작합니다.
    문제는, 콜백이 실행될 때 i의 값은 이미 -1이란 겁니다.

    스코프와 비동기적 실행이 어떻게 연관되는지 이해하는 것이 중요합니다.
    countdown을 호출하면 변수 i가 들어있는 클로저가 만들어집니다.
    for 루프 안에서 만드는 콜백은 모두 i에 접근할 수 있고, 그들이 접근하는 i는 똑같은 i입니다.

    이 문제는 즉시 호출하는 함수 표현식(IIFE)으로 해결했고,
    좀 더 간단하게 i를 for 루프 선언부에서 선언하는 방식으로도 해결할 수 있었습니다.
*/

function coutndown_modified(){
    console.log("Countdown:")
    for(let i=5; i>=0; i--) {
        setTimeout(function() {
            console.log(i===0 ? "GO!" : i)
        }, (5-i)*1000)
    }
}

coutndown_modified() // 5 4 3 2 1 GO! 정상적으로 출력

/*
    여기서 주의할 부분은 콜백이 어느 스코프에 선언됐느냐입니다.
    콜백은 자신을 선언한 스코프(클로저)에 있는 것에 접근할 수 있습니다.
    따라서 i의 값은 콜백이 실제 실행되는 순간마다 다를 수 있습니다.
    이 원칙은 콜백뿐만 아니라 모든 비동기적 테크닉에 적용됩니다.
*/