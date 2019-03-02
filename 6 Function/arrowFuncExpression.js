/*
    New in ES6!!
    화살표 표기법은 간단히 말해 function이라는 단어와 중괄호 숫자를 줄이려고 고안된 단축 문법
    
    화살표 함수의 세 가지 단축 문법
    * function을 생략해도 됩니다.
    * 함수에 매개변수가 단 하나 뿐이라면 괄호(())도 생략할 수 있습니다.
    * 함수 바디가 표현식 하나라면 중괄호와 return 문도 생략할 수 있습니다.

    아래 예제들은 다분히 인위적입니다.
    이름 붙은 함수가 필요하다면 그냥 일반적인 함수 선언을 사용하면 됩니다.
    화살표 함수는 익명 함수를 만들어 다른 곳에 전달하려 할 때 가장 유용합니다.
*/

const f1 = function() { return "hello!" }
const f1Arrow = () => "hello!"

const f2 = function(name) { return `Hello ${name} `}
const f2Arrow = (name) => `Hello ${name}`

const f3 = function(a, b) { return a + b }
const f3Arrow = (a, b) => a + b

/*
    화살표 함수에는 일반적인 함수와 중요한 차이가 있습니다.
    this가 다른 변수와 마찬가지로 정적으로(lexically) 묶인다는 것입니다.
*/
const o = {
    name: 'Julie',
    greetBackwards: function() {
        const getReverseName = () => {
            let nameBackwards = ''
            for(let i=this.name.length-1; i>=0; i--) {
                nameBackwards += this.name[i]
            }
            return nameBackwards
        }
        return `${getReverseName()}`
    }
}
console.log(o.greetBackwards())

/*
    화살표 함수에는 일반적인 함수와 다른 점이 두 가지 더 있습니다.
    화살표 함수는 객체 생성자로 사용할 수 없고, arguments 변수도 사용할 수 없습니다.
    하지만 ES6에서 확산 연산자가 생겼으니 arguments 변수는 필요가 없긴 합니다.

    * arguments 객체는 함수에 전달된 인수에 해당하는 Array 형태의 객체입니다.
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments
*/