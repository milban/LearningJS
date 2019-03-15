
function sum(arr, f) {
    //함수가 전달되지 않았으면 매개변수를 그대로 반환하는 null 함수를 씁니다.
    if(typeof f != 'function') f = x => x
    /*
        f = fnction(x) { return x } 와 같음
        (f=x) => x 아님 ㅡㅡ
    */
    return arr.reduce((a,x) => a += f(x), 0)
}
const arr = [1,2,3]
console.log(sum(arr)) // 6
console.log(sum(arr, x => x*x)) // 14
console.log(sum(arr, x => Math.pow(x, 3))) // 36