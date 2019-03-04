/*
    null과 undefined
    일반적인 규칙을 제시한다면, null은 프로그래머에게 허용된 데이터 타입이며 undefined는 자바스크립트 자체에서 사용한다고 기억하십시오.
    프로그래머도 언제든 undefined 값을 사용할 수는 있지만, 꼭 필요할때만 사용하도록 주의해야 합니다.
    변수 값을 아직 모르거나 적용할 수 없는 경우에는 대부분 null이 더 나은 선택입니다.
    변수를 선언하기만 하고 명시적으로 값을 할당하지 않으면 그 변수에는 기본적으로 undefined가 할당됩니다.

    null and undefined
    As a general rule of thumb, remember that null is the data type allowed by the programmer, and undefined is used by JavaScript itself.
    Programmers can always use undefined values, but be careful to use them only when absolutely necessary.
    If the value of the variable is not yet known or can not be applied, then null is usually the better choice.
    If you declare a variable, but do not explicitly assign a value, the variable is assigned undefined by default.
*/

let currentTemp // 암시적으로 undefined (Implicitly undefined)
const targetTemp = null // 대상 온도는 null, 즉 "아직 모르는" 값 (The target temperature is null, that is, "not yet known" value)
currentTemp = 19.5 // currentTemp에는 이제 값이 있습니다. (currentTemp now has a value.)
currentTemp = undefined // currentTemp는 초기화되지 않은 듯합니다. 권장하지 않습니다. (It seems that currentTemp is not initialized. Not recommended.)