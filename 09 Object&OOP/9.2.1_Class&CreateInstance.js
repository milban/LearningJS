/*
    ES6 이전에 js에서 클래스를 만드는 건 직관적이지도 않고 무척 번거로운 일이었습니다.
    ES6에서는 클래스를 만드는 간편한 새 문법을 도입했습니다.
*/

class Car{
    constructor(make, mode1) {
        this.make = make
        this.mode1 = mode1
        this.userGears = ['P', 'N', 'R', 'D']
        this.userGear = this.userGears[0]
    }
    shift(gear) {
        if(this.userGears.indexOf(gear) < 0)
            throw new Error(`Invalid gear: ${gear}`)
        this.userGear = gear
    }
}

// 인스턴트 생성
const car1 = new Car("Tesla", "Model S")
const car2 = new Car("Mazda", "3i")

// 객체가 클래스의 인스턴스인지 확인
car1 instanceof Car // true

car1.shift('D')
car2.shift('R')

console.log(car1.userGear) // D
console.log(car2.userGear) // R
