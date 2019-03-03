/*
    ES6에서 class 키워드가 새로 생겨 더 직관적이고 쉽게 class를 생성할 수 있게 되었을 뿐, ES5와 다를게 없습니다.
    ES5에서 클래스를 만든다는 것은 곧 클래스 생성자로 사용할 함수를 만든다는 의미였습니다.
*/

class Es6Car {}
function Es5Car() {}
console.log(Es6Car) // function
console.log(Es5Car) // function