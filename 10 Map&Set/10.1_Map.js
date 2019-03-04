/*
    Map은 ES6에서 새로 도입된 데이터 구조 입니다.
    Map은 키와 값을 연결한다는 점에서 객체와 비슷합니다.

    ES6 이전에는 키와 값을 연결하려면 객체를 사용해야 했습니다. 하지만 객체를 이런 목적으로 사용하면 여러 가지 단점이 생깁니다.
    * 프로토 타입 체인 때문에 의도하지 않은 연결이 생길 수 있습니다.
    * 객체 안에 연결된 키와 값이 몇 개나 되는지 쉽게 알아낼 수 있는 방법이 없습니다.
    * 키는 반드시 문자열이나 심볼이어야 하므로 객체를 키로 써서 값과 연결할 수 없습니다.
    * 객체는 프로퍼티 순서를 전혀 보장하지 않습니다.
    
    Map은 위의 결함들을 모두 해결했습니다.
*/

const u1 = { name: 'Cynthia' }
const u2 = { name: 'Jackson' }
const u3 = { name: 'Olive' }
const u4 = { name: 'James' }

const userRoles = new Map() // 맵 생성

// set() 메소드를 사용하여 사용자 역할 할당
userRoles.set(u1, 'User')
userRoles.set(u2, 'User')
userRoles.set(u3, 'Admin')
// 제임스는 역할이 없어요 ㅜㅜ

/*
    위와 같은 기능을 하지만, set() 메서드는 체인으로 연결할 수 있어 타이핑을 줄여줍니다.
    userRoles
        .set(u1, 'User')
        .set(u2, 'User')
        .set(u3, 'Admin')

    생성자에 배열의 배열을 넘기는 형태로 써도 됩니다.
    const userRoles = new Map([
        [u1, 'User'],
        [u2, 'User'],
        [u3, 'Admin']
    ])
*/

console.log(userRoles.get(u2)) // "User"

/*
    맵에 존재하지 않는 키에 get을 호출하면 undefined를 반환합니다.
    맵에 키가 존재하는지 확인하는 has() 메소드도 있습니다.
*/
console.log(userRoles.has(u1)) // true
console.log(userRoles.get(u1)) // "User"
console.log(userRoles.has(u4)) // false
console.log(userRoles.get(u4)) // undefined

/*
    맵에 이미 존재하는 키에 set()을 호출하면 값이 교체됩니다.
*/
console.log(userRoles.get(u1)) // User
userRoles.set(u1, 'Admin')
console.log(userRoles.get(u1)) // Admin

/*
    size 프로퍼티는 맵의 요소 숫자를 반환합니다.
*/
console.log(userRoles.size) // 3

/*
    keys() 메소드는 맵의 키를 반환
    values() 메소드는 값을 반환
    entries() 메소드는 첫 번째 요소가 키이고 두 번째 요소고 값일 배열을 반환
    이들 메소드가 반환하는 것은 모두 이터러블 객체이므로 for..of 루프 사용 가능
*/
for(let u of userRoles.keys())
    console.log(u.name)

for(let r of userRoles.values())
    console.log(r)

for(let ur of userRoles.entries())
    console.log(`${ur[0].name}: ${ur[1]}`)

// 맵 분해
for(let [u, r] of userRoles.entries())
    console.log(`${u.name}: ${r}`)

// entries() 메서드는 맵의 기본 이터레이터 입니다.
// 위 코드는 다음과 같이 단축해서 쓸 수 있습니다.
for(let [u, r] of userRoles)
    console.log(`${u.name}: ${r}`)

// 이터러블 객체보다 배열이 필요하다면 spread operator 사용
console.log([...userRoles.values()]) // [ "Admin", "User", "Admin" ]

// 맵의 요소를 지울 때는 delete() 메소드를 사용
userRoles.delete(u2)
console.log(userRoles.size) // 2

// 맵의 요소를 모두 지울 때는 clear() 메소드를 사용
userRoles.clear()
console.log(userRoles.size) // 0