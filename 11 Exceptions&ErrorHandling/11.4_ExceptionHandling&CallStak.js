function a() {
    console.log('a: colling b')
    b()
    console.log('a: done')
}

function b() {
    console.log('b: colling c')
    c()
    console.log('c: done')
}

function c() {
    console.log('c: throwing error')
    throw new Error('c error')
    console.log('c: done')
}

function d() {
    console.log('d: colling c')
    c();
    console.log('d: done')
}

try {
    a()
} catch(err) {
    console.log(err.stack)
}

try {
    d()
} catch(err) {
    console.log(err.stack)
}