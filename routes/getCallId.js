const express = require('express')
const { getCallId } = require('../models/getCallId')
const router = express.Router()

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        console.log(req.params, id)
        const code = await getCallId(id)

        res.status(200).send({ code })
    }catch (err) {
        res.status(400).send({error: "Something went wrong! " + err})
    }
})

module.exports = router