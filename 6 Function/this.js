/*
    js에서는 oop말고도 this를 사용하는 여러 가지 방법이 존재함.
    일반적으로 this는 객체의 프로퍼티인 함수에서 의미가 있습니다. 메서드를 호출하면 this는 호출한 메서드를 소유하는 객체가 됩니다.
*/

const o = {
    name: 'Wallace',
    speak() { return `My name is ${this.name}` }
}

console.log(o.speak())
/*
    이 경우 this는 o에 묶임
    그러므로 My name is Wallace가 출력
    this는 함수를 어떻게 선언했느냐가 아닌 어떻게 호출했느냐에 따라 달라진다는 것을 이해해야함
*/

const speak = o.speak;
console.log(speak === o.speak) // true
console.log(speak()) // My name is undefined
/*
    위 경우 speak가 어디에 속하는지 알 수 없으므로 this는 undefined에 묶입니다.
    
    * this가 어디에 묶이는지 명확히 알 수 없도록 호출했을 때 this를 결정하는 방법은 매우 복잡함.
    이에 관한 자세한 내용은
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this
*/

/*
    중첩된 함수 안에서의 this
    const self = this 를 하지 않고 getReverseName 함수 안에서 this를 쓸 경우 this가 어디에 묶일지 모름
*/
const obj = {
    name: 'Julie',
    greetBackwards: function() {
        const self = this // 이렇게 해야함.
        function getReverseName() {
            let nameBackwards = ''
            for(let i=self.name.length-1; i>=0; i--) {
                nameBackwards += self.name[i]
            }
            return nameBackwards
        }
        return `${getReverseName()}`
    }
}
console.log(obj.greetBackwards()) //eiluJ