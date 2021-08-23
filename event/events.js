//이벤트 핸들링 예제

//events 모듈 사용
var events = require('events');

//eventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();


var connectHandler = function connected(){
    console.log("Connection Successful");
    eventEmitter.emit("connection");
}

// event와 EventHandler 연동 (Bind)
// eventName 은 임의로 설정 가능
eventEmitter.on('test', connectHandler);

eventEmitter.on('connection', function(){
    console.log("Data Received");
});

eventEmitter.emit('test');





console.log("program has ended");