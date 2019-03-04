/*
    for(variable in object)
        statement

    객체의 프로퍼티에 루프를 실행하도록 설계된 루프
*/

const player = {
    name: 'Thomas',
    rank: 'Midshipman',
    age: 25
}

for(let prop in player) {
    if(!player.hasOwnProperty(prop)) continue;
    console.log(prop + ': ' + player[prop])
}