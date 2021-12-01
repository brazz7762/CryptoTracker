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

const getGenPrice = function(){
 return new Promise ((resolve, reject) =>{
   connection.query('SELECT * FROM ETH ORDER BY ts DESC LIMIT 60', (err, results, fields) => {
     if(err){
       console.log('Error getting ETH data');
       reject(err)
     } else {
       console.log('Success getting ETH data');
       resolve(results);
     }
   })
 })
}

module.exports = {
  writeGenPrice,
  getGenPrice
}