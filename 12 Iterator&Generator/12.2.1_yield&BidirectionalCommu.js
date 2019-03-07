/*
    제네레이터와 호출자 사이에서 양방향 통신이 가능합니다.
    제네레이터는 화살표 표기법으로 만들 수 없으며 반드시 function*을 써야합니다.
*/

function* interrogate() {
    const name = yield "Whart is your name"
    const color = yield "What is your favorite color"
    return `${name}'s favorite color is ${color}`
}

const it = interrogate()
console.log(it.next()) // { value: 'Whart is your name', done: false }
console.log(it.next('Ethan')) // { value: 'What is your favorite color', done: false }
console.log(it.next('orange')) // { value: 'Ethan\'s favorite color is orange', done: true }

