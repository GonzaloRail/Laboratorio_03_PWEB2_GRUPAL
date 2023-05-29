const fs = require('fs');
const path = require('path');
const express = require('express');
const bp = require('body-parser');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const app = express();

app.use(express.static('pub'));
app.use(bp.json());
app.use(bp.urlencoded({
    extended: true
}));

app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000");
});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/files', (request, response) => {
    const directoryPath = path.resolve(__dirname, 'markdown');
    fs.readdir(directoryPath, (error, files) => {
        if (error) {
            console.error('Error al leer el directorio:', error);
            response.status(500).json({ error: 'Error al obtener la lista de archivos' });
        } else {
            response.json({ files });
        }
    });
});

app.get('/files/:fileName', (request, response) => {
    const fileName = request.params.fileName;
    const filePath = path.resolve(__dirname, 'markdown', fileName + '.md');

    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            console.error('Error al leer el archivo:', error);
            response.status(500).json({ error: 'Error al obtener el contenido del archivo' });
        } else {
            let htmlText = md.render(data);
            response.setHeader('Content-Type', 'text/html');
            response.send(htmlText);
        }
    });
});

app.post('/', (request, response) => {
    console.log(request.body);
    let markDownText = request.body.text;
    let fileName = request.body.fileName;
    let filePath = path.resolve(__dirname, 'markdown', fileName + '.md');

    fs.writeFile(filePath, markDownText, (error) => {
        if (error) {
            console.error('Error al guardar el archivo Markdown:', error);
            response.status(500).json({ error: 'Error al guardar el archivo Markdown' });
        } else {
            let htmlText = md.render(markDownText);
            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify({ text: htmlText }));
        }
    });
});