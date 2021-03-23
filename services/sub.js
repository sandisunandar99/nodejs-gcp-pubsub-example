const {PubSub} = require('@google-cloud/pubsub')
const pubsubClient = new PubSub()
const subscribeName = "latihan-pubsub-subscriber"
// const subscribeName = "subs-lapor-mandiri-submit-pelaporan"
const timeout = 60;
const {pullSubscribeMessages, pushSubscribeMessages} = require('../helpers/pubSubHelper')


module.exports = {
    subIndex: (req, res) => {
        return res.status(200).json({
            success: true,
            message: "Subscriber OK !"
        })
    },

    pullSub: (req, res) => {
        try {
            pullSubscribeMessages(pubsubClient, subscribeName, timeout)
        } catch (error) {
            return res.status(500).json({
                success: false, 
                message: "Cannot get data sub !",
                data: error
            })
        }
    },

    pushSub: async(req, res) =>{
        try {
            let msgResponse = await pushSubscribeMessages(req.body.message.data)
            return res.status(200).json({
                success: true,
                message: "Message received success",
                data: msgResponse
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Cannot push data sub !",
                data: error
            }) 
        }
    }
}