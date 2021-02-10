module.exports = {
    publishMessage : async(pubsubClient, topicName, payload) =>{
        const buffer = Buffer.from(JSON.stringify(payload))
        const msgId = await pubsubClient.topic(topicName).publish(buffer)
        console.log(`${msgId} published!`);
        return msgId
    },

    pullSubscribeMessages: (pubsubClient, subscribeName, timeout) => {
        const subscriber = pubsubClient.subscription(subscribeName)

        let msgCount = 0
        const msgHandler = message =>{
            console.log(`Received message ${message.id}:`);
            console.log(`\tData: ${message.data}`);
            console.log(`\tAttributes: ${message.attributes}`);
            msgCount += 1;

            message.ack();
        }

        subscriber.on('message', msgHandler);

        setTimeout(() => {
            subscriber.removeListener('message', msgHandler);
            console.log(`${msgCount} message(s) received.`);
        }, timeout * 1000);
    },

    pushSubscribeMessages: (payload)=> {
        const msg = Buffer.from(payload, 'base64').toString('utf-8')
        let parsed = JSON.parse(msg)
        console.log(parsed);
        return parsed
    }
}