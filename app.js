
/////////////SERVIDOR//////////////


//MODULOS

const express = require('express');//Se usa express para configurar el servidor

const bodyParser = require('body-parser');//analiza los datos enviados en el cuerpo de las solicitudes HTTP 
const path = require('path'); //es un modulo de Node.js para manipular rutas de archivos y directorios
const fs = require('fs'); // es un modulo para trabajar con el sistema de archivos
const MarkdownIt = require('markdown-it') //nos permitirá convertir contenido en formato Markdown a HTML
const md = new MarkdownIt();

const app = express(); //creando una instancia de la aplicación Express que nos permitirá configurar y manejar las rutas y solicitudes.

app.use(bodyParser.json());//nos permite analizar los datos JSON enviados en las solicitudes. 
app.use(bodyParser.urlencoded({extended: true})); // nos permite analizar los datos codificados en la URL. 
//Osea solo se buscara en el directorio ---public---
app.use(express.static('./public')); //configura para servir archivos estáticos desde el directorio "public".


//RUTAS
app.get('/', (req, res) =>{ // Para la ruta principal ("/"), estamos enviando el archivo HTML ubicado en "./public/index.html"
    
    res.setHeader('Content-type', 'text/html');//Le dide al header que aqui va ir un archivo HTML
    res.sendFile('./public/index.html'); //envia la direccion y se connecta
})
 
app.get('/get-documentos', (req, res) =>{// Para la ruta "/get-documentos", estamos leyendo el contenido del archivo "documentos.json" y enviándolo como respuesta.
    const file = fs.readFileSync('./documentos.json', 'UTF-8'); // con el readFileSync lee el archivo, en este caso un JSON
    
    res.setHeader('Content-type', 'text/json');//dice que es un JSON
    res.send(file); // Lo envia como respuesta, como si fuera un true
});

app.post('/new', (req, res) =>{
    res.setHeader('Content-type', 'text/plain'); //dice que aqui habra un texto plano(lo que escribes a diario)
    //Busca el titulo y conytenido de documentos.json
    const titulo = req.body.titulo;
    const contenido = req.body.contenido;


    
    let file = fs.readFileSync('./documentos.json', 'UTF-8');// abre el archivo JSON 
    const json = JSON.parse(file);// convertirlo a un arreglo
    json.documentos.push({"titulo": titulo, "contenido": contenido});// insertar un nuevo elemento
    file = fs.writeFileSync('./documentos.json', JSON.stringify(json));// guardar json en el archivo
    res.send('Datos guardados con éxito'); //Los guarda
    
});

app.post('/mostrar', (req, res) => {
    const contenido = req.body.contenido; //busca el contenido de documentos.json

    // Convertir el rating de Markdown a HTML
    const html = md.render(contenido);

    res.setHeader('Content-type', 'text/html');//aqui html
    res.send(html); //lo envia
});


//Se conecta en el puerto 3000
//localhost3000
app.listen(3000, () =>{
    console.log('Servidor iniciado...');
});

