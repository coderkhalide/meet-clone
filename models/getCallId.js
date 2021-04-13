const redisClient = require('../config/redis')

module.exports.getCallId = function(key){
    return new Promise((resolve, reject) => {
        redisClient.GET(key, (err, res) => {
            if(err) return reject(err)
            resolve(JSON.parse(res))
        })
    })
} 