const express = require('express')
const mongodb = require('mongodb')

const app = express()
let db

let connectionString = `mongodb+srv://anashalideen:anashalideen@cluster0.pvgda.mongodb.net/compadmin`

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    db = client.db()
    
  }
)

app.use(express.json())



app.get('/Xiaomi/items', function (req, res) {
  // getting all the data
  db.collection('compadmin')
    .find({
        CompanyName: 'Xiaomi'
      })
    .toArray(function (err, items) {
      res.send(items)
    })
})

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
