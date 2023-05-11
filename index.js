import express from 'express'
import router from './routes/routes.js'
import expressLayouts from 'express-ejs-layouts'
const app = express()
const port = 3000

//use
app.use(router)
app.use(expressLayouts)
app.use(express.static('public'))

//set
app.set('view engine', 'ejs')
app.set('layout', 'layout/layout')
app.set('layout extractScripts', true)

//get
app.get('/', (req, res) => {
  res.render('home')
})

//listen
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})