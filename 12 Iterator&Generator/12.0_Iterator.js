const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly.",
    "Like a tea tray in the sky",
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!"
]

// itorator 생성
let it = book.values()

console.log(it.next()) // { value: 'Twinkle, twinkle, little bat!', done: false }
console.log(it.next()) // ...
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next()) // { value: 'How I wonder what you\'re at!', done: false }
console.log(it.next()) // { value: undefined, done: true }

// 반복문으로 for...of 흉내내기
let it2 = book.values()
let current = it2.next()
while(!current.done) {
    console.log(current.value)
    current = it2.next()
}

/*
    위 예제들에서 보면 알겠지만, 이터레이터는 모두 독립적입니다.
    즉, 새 이터레이터를 만들 때마다 처음에서 시작합니다.
    그리고 각각 다른 요소들을 가르키는 이터레이터 여러 개를 동시에 사용할 수 있습니다.
*/