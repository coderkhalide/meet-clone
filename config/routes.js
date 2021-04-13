const express = require('express')
const saveCallId = require('../routes/saveCallId')
const getCallId = require('../routes/getCallId')

module.exports = function(app){
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use("/api/save-call-id", saveCallId)
    app.use("/api/get-call-id", getCallId)
}