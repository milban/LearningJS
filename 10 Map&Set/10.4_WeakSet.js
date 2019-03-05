/*
    WeakSet은 객체만 포함할 수 있으며, 이 객체들은 가비지 콜렉션의 대상이 됩니다.
    WeakSet의 실제 용도는 주어진 객체가 Set 안에 존재하는지 아닌지를 알아보는 것 뿐이라고 해도 과언이 아닙니다.
*/

const naughty = new WeakSet()

const children = [
    { name: "Suzy" },
    { name: "Derek" }
]

naughty.add(children[1])

for(let child of children) {
    if(naughty.has(child))
        console.log(`Coal for ${child.name}`)
    else
        console.log(`Presents for ${child.name}`)
}