var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors())

app.get('/', (req, res)=>{
    console.log('loot')
    res.send('Hello World!!!!~~')
})

app.get('/g/', (req, res)=>{
    console.log('g')
    res.send('Hello Kim!!!!~~')
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log('Server Started!!')
})