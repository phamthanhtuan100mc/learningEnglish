const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error: any) {
    console.error("Error encounted: ", error);
});

client.on("connect", function (error: any) {
    console.log("Redis Connection Established");
});