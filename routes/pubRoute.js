const express = require('express')
const router = express()
const pubService = require('../services/pub')

router.get('/', pubService.publish)
router.post('/create', pubService.createPublish)

module.exports = router