/*
    WeakMap은 다음 차이점을 제외하면 Map과 완전히 같습니다.
    * 키는 반드시 객체여야 합니다.
    * WeakMap의 키는 가비지 콜렉션에 포함될 수 있습니다.
    * WeakMap은 이터러블이 아니며 clear() 메소드도 없습니다.
    
    일반적으로 js는 코드 어딘가에서 객체를 참조하는 한 그 객체를 메모리에 계속 유지합니다. 예를 들어 Map의 키인 객체 o가 있다면, js는 Map이 존재하는 한 o를 메모리에 계속 유지합니다.
    하지만 WeakMap은 그렇지 않습니다.
    WeakMap의 이런 특징은 객체 인스턴스의 private 키를 저장하기에 알맞습니다.
*/

const SecretHolder = (function() {
    const secrets = new WeakMap()
    return class {
        setSecret(secret) {
            secrets.set(this, secret)
        }
        getSecret() {
            return secrets.get(this)
        }
    }
})()

const a = new SecretHolder()
const b = new SecretHolder()

a.setSecret('secret A')
b.setSecret('secret B')

console.log(a.getSecret()) // 'secret A'
console.log(b.getSecret()) // 'secret B'