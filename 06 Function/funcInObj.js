/*
    객체의 프로퍼티인 함수는 method라고 구별해 부릅니다.
*/
// ES5
const o = {
    name: 'Wallace',
    bark: function() { return 'Woof!' }
}

console.log(o.bark()) // Woof!

// New in ES6
const obj = {
    name: 'Wallace',
    bark() { return 'Woof!' }
}

console.log(obj.bark()) // Woof!