require('dotenv').config()
const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('vishaldotcom')
}) 

app.get('/github', (req, res) => {
    res.send('githubdata')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app is listening on port ${process.env.PORT || 3000}`)
})