const express = require('express');
const models = require('./database/database.js')
let app = express();

let bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('client/dist'));

let port = 1121;



app.listen(port, function(){
  console.log(`I am listening on port ${port}`)
})

app.post('/api/writePrice', async function (req, res) {
  try{
    console.log('running in get right now')
    var test = 4600;
    var symbol = 'ETH';
    models.writeGenPrice(test, symbol);
    console.log('Yayyyy this worked!')
  } catch {
    console.log('Error doing the writing/getting')
  }
})


