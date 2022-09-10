const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const resourcesController = require('../controllers/myresources')

router.get('/', homeController.getIndex)
router.get('/', resourcesController.getIndex)

module.exports = router