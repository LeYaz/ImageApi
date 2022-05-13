const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.json({
      name: "RandomImageApi",
      version: "0.1.0",
      info: "Api who send random healthy food image"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/random', function(req,res){
    number = Math.floor(Math.random() * 5)+1
    res.statusCode = 200;
    res.sendFile(`C:/Users/Administrateur/Desktop/projet/M2iApp/api/assets/images/${number}.jpg`);   
});
