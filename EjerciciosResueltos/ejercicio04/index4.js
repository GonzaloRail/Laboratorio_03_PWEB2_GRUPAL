const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
app.use(express.static('pub'))

app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")
});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index2.html'))
})

app.get('/recitar', (request, response) => {
    fs.readFile(path.resolve(__dirname, 'priv/poema.txt'), 'utf8',
        (err, data) => {
            if (err) {
                console.error(err)
                response.status(500).json({
                    error: 'message'
                })
                return
            }
            response.json({
                text: data.replace(/\n/g, '<br>')
            })
        })
    //
})