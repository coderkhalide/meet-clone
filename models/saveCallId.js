const redisClient = require('../config/redis')

module.exports.saveCallId = function(key, value){
    return new Promise((resolve, reject) => {
        redisClient.SET(key, JSON.stringify(value), "EX", 86400, (err, res) => {
            if(err) return reject(err)
            resolve(res)
        })
    })
} 