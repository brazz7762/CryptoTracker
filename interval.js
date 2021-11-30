const axios = require('axios');

axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=19a7806478f5764a9f0876f258156f5eb98114a147055f714271cff952e9018d')
  .then(results => {
    console.log('results:', results.data);
  })
