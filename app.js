const { response } = require('express');
const express = require('express');
const app = express();

const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
  console.error(error);
});

client.set("key", "value", redis.print);
client.get("key", redis.print);

const port = 3000

app.get('/', (req, res) => {
    console.log(client.get("key", redis.print));
    res.send({});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})