/*
    객체 매개변수 해체
    프로퍼티 이름은 반드시 유효한 식별자여야 하고, 들어오는 객체에 해당 프로퍼티가 없는 변수는 undefined를 할당받습니다.
*/
function getSentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`
}

const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript"
}

console.log(getSentence(o)) // I love JavaScript

/*
    배열 매개변수 해체
*/
function getSentenceArr([ subject, verb, object ]) {
    return `${subject} ${verb} ${object}`
}

const arr = ["I", "love", "JavaScript"]

console.log(getSentenceArr(arr)) //  I love JavaScript

/*
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_operator
    
    spread operator(전개 연산자, 확산 연산자)를 써서 남는 매개변수를 이용할 수 있습니다.
    함수를 선언할 때 확산 연산자는 반드지 마지막 매개변수여야 합니다. 확산 연산자 뒤에 다른 매개변수가 있으면 js는 전달된 값 중 어디까지를 확산 매개변수에 할당해야 하는지 판단할 수 없어 에러를 일으킵니다.
*/
function addPrefix(prefix, ...words) {
    // 나중에 더 좋은 방법을 배웁니다.
    const preFixedWords = []
    for(let i=0; i<words.length; i++) {
        preFixedWords[i] = prefix + words[i];
    }
    return preFixedWords
}

console.log(addPrefix("con", "verse", "vex")) // [ 'converse', 'convex' ]
