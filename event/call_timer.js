var module = require('./custom_module_timer');

module.timer.on('tick', function(test){
    var time = new Date();
    console.log('now:'+time);
});