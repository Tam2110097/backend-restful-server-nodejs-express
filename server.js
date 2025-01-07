const express = require('express')
// import express from 'express';
const app = express()
const port = 8081


//khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//khai báo route
app.get('/abc', (req, res) => {
  res.send('check ABC')
})

//khai báo route
app.get('/hoidanit', (req, res) => {
  res.send('<h1>Nguyen Minh Tam</h1>')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})