const { response } = require('express');
const express = require('express');
const app = express();

const port = process.env.PORT || 80

app.get('/', (req, res) => {
    res.send({msg: "hello"});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})