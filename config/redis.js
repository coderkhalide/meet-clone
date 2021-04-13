let redis = require('redis')
let client = redis.createClient()

client.on("error", (error) => console.log(error))

module.exports = client