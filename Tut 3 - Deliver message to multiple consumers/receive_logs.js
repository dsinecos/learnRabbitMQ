#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {
        var ex = 'logs';

        ch.assertExchange(ex, 'fanout', { durable: false });

        ch.assertQueue('', { exclusive: true }, function (err, q) {
            // console.log(q);
            console.log(" [*] Waiting for messages in %s. To exit press Ctrl+C", q.queue);

            ch.bindQueue(q.queue, ex, ''); //We've already created a fanout exchange and a queue. Now we need to tell the exchange to send messages to our queue. That relationship between exchange and a queue is called a binding.

            ch.consume(q.queue, function(msg) {
                console.log(" [X] %s", msg.content.toString());
                // console.log(q);
            }, { noAck: true });
        });
    });
});