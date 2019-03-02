/*
    C나 C++과 다르게 js는 parameter(매개변수)가 함수를 결정합니다.
    예를 들어 a()와 a(x)는 다릅니다.
    하지만 js에는 이러한 차이가 없습니다. 함수 a를 호출할 때 매개변수를 한 개 전달하든 열 개 전달하든 같은 함수가 호출됩니다.
*/

function f(x) {
    return `in f: x=${x}`
}

console.log(f()) // in f: x=undefined