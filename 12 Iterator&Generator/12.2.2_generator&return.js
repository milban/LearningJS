/*
    yield 문은, 설령 제너레이터의 마지막 문이더라도 제네레이터를 끝내지 않습니다.
    제네레이터에서 return 문을 사용하면 그 위치와 관계없이 done은 true가 되고,
    value 프로퍼티는 return이 반환하는 값이 됩니다.
*/

function* abc() {
    yield 'a'
    yield 'b'
    return 'c'
}

const it = abc()
console.log(it.next()) // { value: 'a', done: false }
console.log(it.next()) // { value: 'b', done: false }
console.log(it.next()) // { value: 'c', done: true }

/*
    제네레이터를 사용할 때는 보통 done이 true이면
    value 프로퍼티에 주의를 기울이지 않는다는 점을 염두에 두십시오.
*/
for(let l of abc()) {
    console.log(l) // c 는 출력되지 않습니다.
}

/*
    제네레이터에서 중요한 값을 return으로 반환하려 하지 마십시오.
    제네레이터가 반환하는 값을 사용하려 할 떄는 yield를 써야하고,
    return은 제네레이터를 중간에 종료하는 목적으로만 사용해야 합니다.
*/