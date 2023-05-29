const path = require('path');
const express = require('express');
const app = express();
app.use(express.static('pub'));
app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")

});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index2.html'));
});
