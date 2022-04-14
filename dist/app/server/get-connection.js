const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
    console.error("Error encounted: ", error);
});

client.on("connect", function (error) {
    console.log("Redis Connection Established");
});