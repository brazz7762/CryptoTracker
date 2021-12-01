const axios = require('axios');
const models = require('./server/database/database.js')

var crypto = 'ETH';
var intervalTimer = () => {
  axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=USD&api_key=19a7806478f5764a9f0876f258156f5eb98114a147055f714271cff952e9018d`)
  .then(results => {
    console.log('results:', results.data);
    models.writeGenPrice(results.data.USD, crypto)
  })
}


setInterval(function(){intervalTimer()}, 1000)
