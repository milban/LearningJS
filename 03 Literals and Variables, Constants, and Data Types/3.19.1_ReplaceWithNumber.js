const numStr = "33.3"
const num = Number(numStr)

const a = parseInt("16 volts", 10) // volts는 무시, 10진수 16
const b = parseInt("3a", 16) // 16진수 3a를 10진수로 바꿉니다. 결과는 58
const c = parseFloat("15.5 kph") // parseFloat는 항상 기수(진법)이 10이라고 가정합니다.

// Date obj -> num
const d = new Date();
const ts = d.valueOf() // UTC 1970년 1월 1일 자정으로부터 몇 밀리초가 지났는지 나타내는 숫자
console.log(ts)

// bool -> num
const e = true;
const n = b ? 1 : 0
console.log(n)