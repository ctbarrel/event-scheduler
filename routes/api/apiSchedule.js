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

router.post('/', function (req, res, next) {
    const info = {
        doc: req.body,
        collection: req.app.locals.collectionSchedule
    }
    db.createOne(info)
    .then(data => {
        res.json(data.ops[0])
    })
    .catch(err => {
        console.log(err)
    })
})

router.delete('/:id', function (req, res, next) {
    const info = {
        id: req.params.id,
        collection: req.app.locals.collectionSchedule
    }
    db.deleteOne(info)
    .then(date => {
        res.json({msg: `deleted ${info.id}`})
    })
    .catch(err => {
        console.log(err)
    })
})
module.exports = router