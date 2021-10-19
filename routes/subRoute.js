const express = require('express')
const router = express()
const subService = require('../services/sub')

router.get('/', subService.subIndex)
router.post('/push', subService.pushSub)
router.post('/pull', subService.pullSub)

module.exports = router