const express = require('express')
const router = express()
const notifService = require('../services/notif')

router.get('/', notifService.notifIndex)
router.post('/push', notifService.pushNotif)
router.post('/pull', notifService.pullNotif)

module.exports = router