const express = require('express');
let app = express();

let bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('client/dist'));

let port = 1121;

app.listen(port, function(){
  console.log(`I am listening on port ${port}`)
})


