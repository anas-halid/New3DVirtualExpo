import {Component, useEffect, useState} from 'react';
import axios from 'axios'

/*
mongodb.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
      db = client.db()
      
    }
  )
  
  app.use(express.json())
  
  
  
  app.get('/', function (req, res) {
    // getting all the data
    db.collection('compadmin')
      .find({
          CompanyName: 'Xiaomi'
        })
      .toArray(function (err, items) {
        res.send(items)
      })
  })
  */
function Products() {


   
      const [data, setData] = useState([])
    
      useEffect(() => {
        fetch('/Xiaomi/items')
          .then((response) => response.json())
          .then((data) => setData(data))
      }, [])
    
      return (
        <div>
          <h1>Company Data</h1>
          <ul>
            {data.map((item) => (
              <li key={item._id}>
                Company Name: {item.CompanyName} <br />
                Company Address: {item.Login} <br />
                Company Phone: {item.Password}
                <ul>
                  {item.Products.map((product) => (
                    <li key={product.Product}>
                      Product: {product.Product} <br />
                      Price: {product.Price}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    

    



     


export default Products;