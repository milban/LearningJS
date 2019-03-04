/*
    js에서는 일반적인 방법 외에도, 함수를 어디서, 어떻게 호출했느냐와 관계없이 this가 무엇인지 지정할 수 있습니다.
    call, apply, bind 메소드가 있습니다.

    call 메소드는 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정할 수 있습니다.
*/

const bruce = { name: "Bruce" }
const madeline = { name: "Madeline" }

// 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
function greet() {
    return `Hello, I'm ${this.name}`
}

console.log(greet()) // Hello, I'm undefined
console.log(greet.call(bruce)) // Hello, I'm Bruce
console.log(greet.call(madeline)) // Hello, I'm Madeline

/*
    함수를 호출하면서 call을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드인 것처럼 사용할 수 있습니다.
    call의 첫 번째 매개변수는 this로 사용할 값이고, 매개변수가 더 있으면 그 매개변수는 호출하는 함수로 전달됩니다.
*/
function update(birthYear, occupation) {
    this.birthYear = birthYear
    this.occupation = occupation
}

update.call(bruce, 1949, 'singer')
console.log(bruce) // { name: 'Bruce', birthYear: 1949, occupation: 'singer' }
update.call(madeline, 1942, 'actress')
console.log(madeline) // { name: 'Madeline', birthYear: 1942, occupation: 'actress' }


/*
    apply
    apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같습니다.
    apply는 매개변수를 배열로 받습니다.
*/
update.apply(bruce, [1995, "actor"])
console.log(bruce) // { name: 'Bruce', birthYear: 1995, occupation: 'actor' }
update.apply(madeline, [1918, "writer"])
console.log(madeline) // { name: 'Madeline', birthYear: 1918, occupation: 'writer' }

// ES6의 확산 연산자(...)를 사용해도 apply와 같은 결과를 얻을 수 있습니다.
const newBruce = [1940, "martial artist"]
update.call(bruce, ...newBruce)
console.log(bruce) // { name: 'Bruce', birthYear: 1940, occupation: 'martial artist' }


/*
    bind
    bind를 사용하면 함수의 this 값을 영구히 바꿀 수 있습니다.
*/
const updateBruce = update.bind(bruce)
updateBruce(1904, "actor")
console.log(bruce) // { name: 'Bruce', birthYear: 1904, occupation: 'actor' }
updateBruce.call(madeline, 1274, "king") // 이 때, madeline 객체가 아닌 bruce 객체에 묶여있음
console.log(bruce) // { name: 'Bruce', birthYear: 1274, occupation: 'king' }

/*
    bind에 매개변수를 넘기면 항상 그 매개면수를 받으면서 호출되는 새 함수를 만드는 효과가 있습니다.
    예를 들어 bruce가 태어난 해랄 항상 1949로 고정하지만, 직업은 자유롭게 바꿀 수 있는 업데이트 함수를 만들고 싶다면 다음과 같이 하면 됩니다.
*/
const updateBruce1949 = update.bind(bruce, 1949)
updateBruce1949("singer, songwriter")
console.log(bruce) // { name: 'Bruce', birthYear: 1949, occupation: 'singer, songwriter' }
