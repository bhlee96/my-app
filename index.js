const express = require('express')
const router = require('./routes/routes')
const app = express()

const port = 3000

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('home')
  })

app.use(router);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})