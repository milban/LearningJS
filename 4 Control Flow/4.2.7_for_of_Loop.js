/*
    New in ES6 version
    for(variable of object)
        statement

    배열은 물론 iterable 객체에 모두 사용할 수 있는 범용적인 루프
*/

const numArr = [1, 2, 3]
for(let num of numArr)
    console.log(num)
