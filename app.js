const express = require('express')
const app = express()
const port = 5000 
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.set('views', './src/views')
app.set('view engine', 'ejs')


const home = require('./src/routes/home')

app.use('/', home)

app.listen(port, () => console.log(`Listening on port ${port}`))