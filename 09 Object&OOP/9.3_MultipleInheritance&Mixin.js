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

class InsurancePolicy {}
function makeInsurable(o) {
    o.addInsurancePolicy = function(p) { this.insurancePolicy = p }
    o.getInsurancePolicy = function() { return this.insurancePolicy }
    o.isInsured = function() { return !!this.insurancePolicy }
}

makeInsurable(Car.prototype)
const car1 = new Car()
car1.addInsurancePolicy(new InsurancePolicy())

/*
    Car클래스와 보험 클래스의 메서드 충돌이 걱정되 시 Symbol을 사용하면 해결된다.
*/

class InsurancePolicy2 {}
const ADD_POLICY = Symbol()
const GET_POLICY = Symbol()
const IS_INSURED = Symbol()
const _POLICY = Symbol()
function makeInsurable2(o) {
    o[ADD_POLICY] = function(p) { this[_POLICY] = p }
    o[GET_POLICY] = function() { return this[_POLICY] }
    o[IS_INSURED] = function() { return !!this[_POLICY] }
}