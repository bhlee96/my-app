const express = require('express')
const router = require('./routes/routes')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

//use
app.use(router)
app.use(expressLayouts)

//set
app.set('view engine', 'ejs')
app.set('layout', 'layout')
app.set('layout extractScripts', true)

//get
app.get('/', (req, res) => {
  res.render('home')
})

//listen
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})