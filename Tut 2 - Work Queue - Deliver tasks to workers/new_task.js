// var amqp = require('amqplib/callback_api');

// amqp.connect('amqp://localhost', function (err, conn) {
//     conn.createChannel( function (err, ch) {
//         var q = 'task_queue';
//         var msg = process.argv.slice(2).join(' ') || "Hello World!";

//         ch.assertQueue(q, { durable: true });
//         ch.sendToQueue(q, new Buffer(msg), { persistent: true });
//         console.log(" [x] Sent '%s' ", msg);
//     });
//     setTimeout(function() {
//         conn.close();
//         process.exit(0);
//     }, 500);
// })

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'task_queue';
    var msg = process.argv.slice(2).join(' ') || "Hello World!";

    ch.assertQueue(q, {durable: true});
    ch.sendToQueue(q, new Buffer(msg), {persistent: true});
    console.log(" [x] Sent '%s'", msg);
  });
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});

// var msg = process.argv.slice(2).join('');
// var msgWithoutJoin = process.argv.slice(2);

// var secs = msg.split('.').length -1;
// console.log(msg.split('.'));
// console.log(secs);

// console.log(process.argv);
// console.log(msg);
// console.log(msgWithoutJoin);