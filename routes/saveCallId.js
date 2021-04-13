const express = require('express')
const { saveCallId } = require('../models/saveCallId')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const {id, signalData} = req.body
        await saveCallId(id, signalData)

        res.status(200).send(true)
    }catch (err) {
        res.status(400).send({error: "Something went wrong!"})
    }
})

module.exports = router