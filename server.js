var express = require('express')
var app = express()

app.get('/', (req, res)=>{
    res.send('Hello World!!!!~~')
})

app.get('/g/', (req, res)=>{
    res.send('Hello Kim!!!!~~')
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log('Server Started!!')
})