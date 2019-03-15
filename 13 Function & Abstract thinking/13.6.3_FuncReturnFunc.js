function sum(arr, f) {
    if (typeof f != 'function') f = x => x

    return arr.reduce((a, x) => a += f(x), 0)
}

/*
    아래처럼 매개변수 여러 개를 받는 함수를 매개변수 하나만 받는
    함수로 바꾸는 것을 커링(currying)이라고 합니다.
*/
function newSummer(f) {
    return arr => sum(arr, f)
}

const sumOfSquares = newSummer(x => x * x)
const sumOfCubes = newSummer(x => Math.pow(x, 3))
console.log(sumOfSquares([1, 2, 3])) // 14
console.log(sumOfCubes([1, 2, 3])) // 36