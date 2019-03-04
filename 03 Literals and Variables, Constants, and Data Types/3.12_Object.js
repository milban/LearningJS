/*
    원시 타입은 단 하나의 값만 나타낼 수 있고 불변이지만, 이와 달리 객체는 여러 가지 값이나 복잡한 값을 나타낼 수 있으며, 변할 수도 있습니다.
    객체의 본질은 "컨테이너"입니다. 컨테이너의 내용물은 시간이 지나면서 바뀔 수 있지만, 내용물이 바뀐다고 컨테이너가 바뀌는 건 아닙니다. 즉, 여전히 같은 객체입니다.
    객체에도 중괄호, 즉 {과 }를 사용하는 리터럴 문법이 있습니다. 중괄호는 한 쌍이므로 객체가 어디에서 시작하고 어디에서 끝나는지 나타낼 수 있습니다.
*/

const obj = {}; // 객체 생성, new Object()로도 가능
obj.color = "yellow" // 프로퍼티 추가
obj["not an identifier"] = 3 // 프로퍼티 이름에 유효한 식별자가 아닌 이름을 쓴다면 "계산된 멤버 접근 연산자(Computed member access operator)"인 []를 써야 합니다. 프로퍼티 이름이 유효한 식별자여도 []로 접근할 수 있습니다.
console.log(obj["not an identifier"]) // 3
console.log(obj["color"]) // yellow
const SIZE = Symbol()
obj[SIZE] = 8
console.log(obj[SIZE]) // 8
obj.SIZE = 0
console.log(obj.SIZE) // 0
console.log(obj)
/*
{ color: 'yellow',
  'not an identifier': 3,
  SIZE: 0,
  [Symbol()]: 8 }
*/

const sam1 = {
    name: 'Sam',
    age: 4,
}

const sam2 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Cordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'cantus',
    },
}

console.log(sam2.classification.family) // Felidae
console.log(sam2["classification"].family) // Felidae
console.log(sam2.classification["family"]) // Felidae
console.log(sam2["classification"]["family"]) // Felidae

sam2.speak = () => { return "Meow!" } // 객체에 함수 담기 가능
console.log(sam2.speak()) // Meow!

delete sam2.classification // classification 트리 전체가 삭제
delete sam2.speak // speak 함수 삭제