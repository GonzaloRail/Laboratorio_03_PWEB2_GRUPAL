const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bp = require('body-parser')
app.use(express.static('pub'))
app.use(bp.json())

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/titulos', (req, res) => {
    // Lee el archivo JSON existente
    let archivoExistente = [
      {
        "titulo": "Hola",
        "contenido" : "lasdkjflsdjkaf"
      }
      ,
      {
        "titulo": "mundo",
        "contenido" : "lasdkjflsdjkaf"
      }
    ];
    try {
      const contenido = fs.readFileSync('datos.json', 'utf-8');
      archivoExistente = JSON.parse(contenido);
    } catch (error) {
      console.error('Error al leer el archivo JSON existente:', error);
    }
  
    // Obtén los títulos de los JSON de Markdown
    const titulos = archivoExistente.map((item) => item.titulo);
  
    // Envía los títulos como respuesta en formato JSON
    res.json(titulos);
  });
  