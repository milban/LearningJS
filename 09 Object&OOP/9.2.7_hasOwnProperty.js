/*
    obj.hasWonProperty(x)
    obj에 property x가 있다면 return true
    property x가 obj에 정의되지 않았거나 prototype chain에만 정의되었다면 return false
*/

class Super {
    constructor() {
        this.name = 'Super'
        this.isSuper = true
    }
}

// 유효하지만, 권장하지 않습니다.
Super.prototype.sneaky = 'not recommende!'

class Sub extends Super {
    constructor() {
        super()
        this.name = 'Sub'
        this.isSub = true
    }
}

const obj = new Sub()

for(let p in obj) {
    console.log(`${p}: ${obj[p]}` + (obj.hasOwnProperty(p) ? '' : ' (inherited)'))
}