const SYM = Symbol()
const o = { a: 1, b: 2, c: 3, [SYM]: 4 }

for(let prop in o) {
    if (!o.hasOwnProperty(prop)) continue
    console.log(`${prop}: ${o[prop]}`) // a: 1 b: 2 c: 3
    // for...in 루프에는 키가 심볼인 프로퍼티는 포함되지 않습니다.
}