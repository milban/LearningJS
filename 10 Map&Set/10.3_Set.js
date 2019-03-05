/*
    Set은 중복을 허용하지 않는 데이터 집합
*/

const roles = new Set()

roles.add("User")
roles.add("Admin")

console.log(roles) // [ 'User', 'Admin' ]
console.log(roles.size) // 2

roles.add("User")
console.log(roles.size) // 2

roles.delete("Admin")
console.log(roles) // [ 'User' ]
console.log(roles.size) // 1