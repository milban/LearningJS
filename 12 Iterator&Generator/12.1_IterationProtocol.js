/*
    Itorator Protocol은 모든 객체를 iterable 객체로 바꿀 수 있습니다.
*/

class Log {
    constructor() {
        this.messages = []
    }
    add(messages) {
        this.messages.push({
            messages,
            timestamp: Date.now()
        })
    }
    [Symbol.iterator]() {
        return this.messages.values()
    }
}

const log = new Log()
log.add("first day at sea")
log.add("spotted whale")
log.add("spotted another vessel")

// 로그를 배열처럼 순회합니다.
for(let entry of log) {
    console.log(`${entry.messages} @ ${entry.timestamp}`)
}

/*
    위 예제에서는 messages 배열에서 이터레이터를 가져와 이터레이터 프로토콜을 구현했지만, 다음과 같이 직접 이터레이터를 만들 수도 있습니다.
*/
class Log2 {
    constructor() {
        this.messages = []
    }
    add(messages) {
        this.messages.push({
            messages,
            timestamp: Date.now()
        })
    }
    [Symbol.iterator]() {
        let i = 0
        const messages = this.messages
        return {
            next() {
                if(i >= messages.length) {
                    return { value: undefined, done: true }
                }
                return { value: messages[i++], done: false }
            }
        }
    }
}

const log2 = new Log2()
log2.add("first day at sea")
log2.add("spotted whale")
log2.add("spotted another vessel")

for(let entry of log2) {
    console.log(`${entry.messages} @ ${entry.timestamp}`)
}

/*
    이터레이터는 무한한 데이터에도 사용할 수 있습니다.
    피보나치 수열은 무한히 계속되고, 프로그램에서는 몇 번째 숫자까지 계산해야 할지 알 수 없으므로 이터레이터를 사용하기에 알맞습니다.
*/
class FibonacciSequence {
    [Symbol.iterator]() {
        let a = 0, b = 1
        return {
            next() {
                let rval = { value: b, done: false }
                b += a
                a = rval.value
                return rval
            }
        }
    }
}

const fibo = new FibonacciSequence()
let cnt = 0
for(let iter of fibo) {
    if(cnt==10)
        break
    console.log(iter)
    cnt++
}