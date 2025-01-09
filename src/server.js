const express = require('express')
const path = require('path')
require('dotenv').config()
// import express from 'express';

const app = express()
const port = process.env.PORT ||8888;
const hostname = process.env.HOST_NAME;


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//khai báo route
app.get('/', (req, res) => {
  res.send('Hello World! & nodemon')
})

//khai báo route
app.get('/abc', (req, res) => {
  res.send('check ABC')
})

//khai báo route
app.get('/hoidanit', (req, res) => {
  // res.send('<h1>Nguyen Minh Tam</h1>')
  res.render('sample.ejs')  
})



app.listen(port, hostname,   () => {
  console.log(`Example app listening on port ${port}`)
})