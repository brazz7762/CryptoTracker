const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'harvard182',
  database: 'CT'
});

connection.connect((err) => {
  if(err){
    console.log('There was an error connecting to MySQL')
  } else {
    console.log('Successfully Connected to MySQL')
  }
})

const writeGenPrice = function(price, symbol) {
  return new Promise ((resolve, reject) => {
    connection.query(`INSERT INTO ${symbol} (price, ts) VALUES (${price}, NULL)`, (err) => {
      if(err){
        console.log(`Error writing ${symbol} price to database`)
      } else {
        console.log(`Successfully wrote price for ${symbol}`)
        resolve();
      }
    })
  })
}

//const getGenPrice = function(symbol){
 // return new Promise ((resolve, reject)
//}

module.exports = {
  writeGenPrice
}