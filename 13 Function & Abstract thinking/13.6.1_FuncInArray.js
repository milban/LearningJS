/*
    배열 안에 함수를 쓰는 패턴은 그리 오래되지 않았지만 점점 늘어나고 있고,
    특정 상황에서는 매우 유용합니다.
    자주 하는 일을 한 셋으로 묶는 파이프라인이 좋은 예입니다.
    배열을 사용하면 작업 단계를 언제든 쉽게 바꿀 수 있다는 장점이 있습니다.
    어떤 작업을 빼야 한다면 배열에서 제거하기만 하면 되고, 추가할 작업이 있다면 배열에 추가하기만 하면 됩니다.
*/
const sin = Math.sin
const cos = Math.cos
const theta = Math.PI/4
const zoom = 2
const offset = [1, -3]

const pipeline = [
    function rotate(p) {
        return {
            x: p.x * cos(theta) - p.y * sin(theta),
            y: p.x * sin(theta) + p.y * cos(theta)
        }
    },
    function scale(p) {
        return { x: p.x * zoom, y: p.y * zoom}
    },
    function translate(p) {
        return { x: p.x + offset[0], y: p.y + offset[1] }
    }
]

// 이제 pipeline은 2D 변형에 필요한 함수의 배열입니다.
// 점 하나를 변형해 봅시다.
const p = { x: 1, y: 1 }
let p2 = p
for(let i=0; i<pipeline.length; i++) {
    p2 = pipeline[i](p2)
}

console.log(p2)