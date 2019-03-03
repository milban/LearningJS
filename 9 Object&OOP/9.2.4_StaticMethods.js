/*
    static 키워드는 클래스를 위한 정적(static) 메소드를 정의합니다. 정적 메소드는 클래스의 인스턴스화(instantiating) 없이 호출되며, 클래스의 인스턴스에서는 호출할 수 없습니다. 정적 메소드는 어플리케이션(application)을 위한 유틸리티(utility) 함수를 생성하는데 주로 사용됩니다.
    
    예를 들어 자동차 식별 번호(VIN)을 붙이는 메소드를 생각해 봅시다. 개별 자동차가 자신만의 VIN을 생성한다는 것은 불가능합니다. VIN 중복 여부를 판단할 수 없기 때문입니다.
*/

class Car {
    static getNextVin() {
        return Car.nextVin++
    }
    constructor(make, model) {
        this.make = make
        this.model = model
        this.vin = Car.getNextVin()
    }
    static areSimilar(car1, car2) {
        return car1.make === car2.make && car1.model === car2.model
    }
    static areSame(car1, car2) {
        return car1.vin === car2.vin
    }
}

Car.nextVin = 0

const car1 = new Car("Tesla", "S")
const car2 = new Car("Mazda", "3")
const car3 = new Car("Mazda", "3")

console.log(car1.vin) // 0
console.log(car2.vin) // 1
console.log(car3.vin) // 2

console.log(Car.areSimilar(car1, car2))
console.log(Car.areSimilar(car2, car3))
console.log(Car.areSame(car1, car2))
console.log(Car.areSame(car2, car2))
