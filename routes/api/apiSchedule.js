var express = require('express')
var router = express.Router()

const db = require('../../db/mongo')

router.get('/', function(req, res, next) {
    const info = {
        query: {},
        collection: req.app.locals.collectionSchedule
    }

    db.readAll(info)
    .then(schedule => {
        res.json(schedule)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router