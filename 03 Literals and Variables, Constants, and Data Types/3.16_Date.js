const now = new Date()
console.log(now)

const halloween = new Date(2019, 9, 31) // 월은 0에서 시작합니다. 즉, 9는 10월입니다.
console.log(halloween) // 2019-10-30T15:00:00.000Z
console.log(halloween.getFullYear()) // 2019
console.log(halloween.getDay()) // 4 (목요일, 0은 일요일)
/*
    년, 월, 일, 요일, 시간, 분, 초, 밀리초 가능
*/