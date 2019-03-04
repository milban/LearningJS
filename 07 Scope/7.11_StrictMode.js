/*
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode

    일반적으로 전역 스코프에서는 스트릭트 모드를 사용하지 않는게 좋다. 전역 스코프에 스트릭트 모드를 사용하게 되면 스트릭트 모드를 적용한 스크립트에서 불러온 다른 스크립트에도 스트릭트 모드가 적용되기 때문이다.

    따라서 다음과 같이 사용하는게 적절하다.
*/

(function () {
    'use strict'
    // ...
})()