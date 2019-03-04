$(document).ready(function() {
    'use strict'
    paper.install(window) // Paper.js를 전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas')) // Paper.js를 캔버스에 연결하고 Paper.js가 그림을 그릴 수 있도록 준비

    var tool = new Tool()
    var c = Shape.Circle(200, 200, 80)
    c.fillColor = 'black'
    var text = new PointText(200, 200)
    text.justification = 'center'
    text.fillColor = 'white'
    text.fontSize = 20
    text.content = 'hello world'
    tool.onMouseDown = event => {
        var c = Shape.Circle(event.point.x, event.point.y, 20)
        c.fillColor = 'green'
    }

    paper.view.draw() // Paper.js가 실제로 화면에 그림을 그리라는 명령
})