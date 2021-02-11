const {PubSub} = require('@google-cloud/pubsub')
const pubsubClient = new PubSub()
// const topicName = "latihan-pubsub"
const topicName = "lapor-mandiri-submit"

const { publishMessage } = require('../helpers/pubSubHelper')

module.exports = {
    publish: (req, res) =>{
        return res.status(200).json({
            success: true,
            message: "Publisher OK"
        })
    },

    createPublish: async(req, res) => {
        let pubObj = req.body
        let msgId = await publishMessage(pubsubClient, topicName, pubObj)
        return res.status(200).json({
            success: true,
            message: `${msgId} published`
        })
    }
}