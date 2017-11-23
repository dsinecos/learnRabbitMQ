#!/usr/bin/env node

// var amqp = require('amqplib/callback_api');

// amqp.connect('amqp://localhost', function (err, conn) {
//     conn.createChannel(function (err, ch) {
//         var ex = 'logs';
//         var msg = process.argv.slice(2).join(' ') || 'Hello World!';

//         ch.assertExchange(ex, 'fanout', { durable: false });
//         ch.publish(ex, '', new Buffer(msg)); //The empty string as second parameter means that we don't want to send the message to any specific queue. We want only to publish it to our 'logs' exchange

//         console.log(" [X] Sent %s ", msg);
//     });

//     setTimeout(function () {
//         conn.close();
//         process.exit(0);
//     }, 500);
// });

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var ex = 'logs';
        var msg = process.argv.slice(2).join(' ') || 'Hello World!';

        ch.assertExchange(ex, 'fanout', { durable: false });
        ch.publish(ex, '', new Buffer(msg)); //The empty string as second parameter means that we don't want to send the message to any specific queue. We want only to publish it to our 'logs' exchange
        console.log(" [x] Sent %s", msg);
    });

    setTimeout(function () { conn.close(); process.exit(0) }, 500);
});