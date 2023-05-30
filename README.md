<div align="center">
<table>
    <theader>
        <tr>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/epis.png?raw=true" alt="EPIS" style="width:50%; height:auto"/></td>
            <th>
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </th>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/abet.png?raw=true" alt="ABET" style="width:50%; height:auto"/></td>
        </tr>
    </theader>
    <tbody>
        <tr><td colspan="3"><span style="font-weight:bold;">Formato</span>: Guía de Práctica de Laboratorio / Talleres / Centros de Simulación</td></tr>
        <tr><td><span style="font-weight:bold;">Aprobación</span>:  2023/03/01</td><td colspan="2"><span style="font-weight:bold;">Código</span>: GUIA-PRLD-001</td></tr>
    </tbody>
</table>
</div>

<div align="center">
</div>
<div align="center">
	<span style="font-weight:bold;">INFORME DE LABORATORIO</span>

<table>
		<theader>
			<tr><th colspan="6">INFORMACIÓN BÁSICA</th></tr>
		</theader>
		<tbody>
			<tr>
				<td><span style="font-weight:bold;">ASIGNATURA:</span></td>
				<td colspan="5">Programación Web II</td>
			</tr>
			<tr>
				<td><span style="font-weight:bold;">TÍTULO DE LA PRÁCTICA:<span></td>
				<td colspan="5">Ajax y NodeJs</td>
			</tr>
			<tr>
				<td>NÚMERO DE PRÁCTICA:</td>
				<td>03</td><td>AÑO LECTIVO:</td>
				<td>2023 A</td>
				<td>NRO. SEMESTRE:</td>
				<td>III</td>
			</tr>
			<tr>
				<td>FECHA DE PRESENTACIÓN::</td>
				<td>29-May-2022</td>
				<td>HORA DE PRESENTACIÓN:</td>
				<td> 10:00 pm.</td>
			</tr>
			<tr>
				<td colspan="3">INTEGRANTES:
					<ul>
					<li>Delgado Allpan, Andree David</li>
				    <li>Hilacondo Begazo, André Jimmy</li>
				    <li>Layme Mamani, Gonzalo Rail</li>
				    <li>Chirinos Negron Sebastian Arley</li>
				    <li>Soto Ccoya Gabriel Eduardo</li>
					</ul>
				</td>
				<td colspan="">NOTA:</td>
				<td></td>
			</tr>
			<tr>
				<td colspan="6">DOCENTE:
					<ul>
					<li>Anibal Sardon</li>
					</ul>
				</td>
			</tr>
		</tdbody>
</table>
</div>
	
<div align="center"><h2> SOLUCIÓN Y RESULTADOS </h2></div>	

### I.	SOLUCIÓN DE EJERCICIOS/PROBLEMAS
	
**LINK REPOSITORIO: [https://github.com/GonzaloRail/Laboratorio_03_PWEB2_GRUPAL.git](https://github.com/GonzaloRail/Laboratorio_03_PWEB2_GRUPAL.git)**

> ### *PUEDE REVISAR LAS RAMAS*

Este sistema fue desarrollado usando estas tecnologías:
  
-   HTML y CSS
    
-   El Framework Express basado en NodeJS para el BackEnd
   
-   Los archivos se guardaron en Sistema de Archivos del Sistema Operativo del Servidor a través de la dependencia nativa File System (fs).
    
-   JavaScript para el FrontEnd
    
-   Las páginas se escriben en lenguaje Markdown
    
-   Se utilizó la dependencia markdown-it
    
-   La comunicación entre el Cliente y el Servidor se hizo usando JSON de manera asíncrona.

**Install dependencies**

```sh
     npm install
```

****Run the app****

```sh
     node app.js
```

<div>
<p style = 'text-align:center;'>
<img src="https://github.com/GonzaloRail/Laboratorio_03_PWEB2_GRUPAL/blob/main/img/1.png?raw=true" alt="JuveYell" width="300px">
<img src="https://github.com/GonzaloRail/Laboratorio_03_PWEB2_GRUPAL/blob/main/img/2.jpeg?raw=true" width="300px">
</p>
</div>


#

-   **Servidor**
    

Cuando se recibe una solicitud POST en esa ruta, se obtienen los valores de los campos "titulo" y "contenido" del cuerpo de la solicitud. Luego se inserta un nuevo elemento con esos valores en el archivo JSON documentos.json. Finalmente, se envía una respuesta con un mensaje de éxito.
<img src="https://github.com/GonzaloRail/Laboratorio_03_PWEB2_GRUPAL/blob/main/img/3.jpeg?raw=true">

Lee el contenido del archivo documentos.json y se envía como respuesta con un encabezado que indica que es un archivo JSON.
<img src="https://github.com/GonzaloRail/Laboratorio_03_PWEB2_GRUPAL/blob/main/img/4.png?raw=true">

Cuando se recibe una solicitud POST en esa ruta, se obtiene el valor del campo "contenido" del cuerpo de la solicitud. Luego, se convierte ese contenido de Markdown a HTML utilizando markdown-it. Finalmente, se envía una respuesta con el contenido HTML generado.
<img src="https://github.com/GonzaloRail/Laboratorio_03_PWEB2_GRUPAL/blob/main/img/5.png?raw=true">

#	
- **Ejecución:**

<img src="https://github.com/GonzaloRail/Laboratorio_03_PWEB2_GRUPAL/blob/main/img/6.png?raw=true">

En el formulario llenamos el área del contenido usando MARKDOWN  (Fig 01)  pero sin título. Este nos enviará una alerta de que no llenamos el título (Fig 02):  

<img src="https://github.com/GonzaloRail/Laboratorio_03_PWEB2_GRUPAL/blob/main/img/7.png?raw=true">    

#
<img src="https://github.com/GonzaloRail/Laboratorio_03_PWEB2_GRUPAL/blob/main/img/8.png?raw=true">
 
Visualizamos el archivo “Prueba4” en la lista (Fig 04).

<img src="https://github.com/GonzaloRail/Laboratorio_03_PWEB2_GRUPAL/blob/main/img/9.png?raw=true">

También podremos visualizar el contenido si presionamos en el nombre del archivo que queramos ver:

<img src="https://github.com/GonzaloRail/Laboratorio_03_PWEB2_GRUPAL/blob/main/img/10.png?raw=true">

#
### II.	SOLUCIÓN DEL CUESTIONARIO

-   **En el Ejemplo "Hola Mundo" con NodeJS. ¿Qué pasó con la línea: "Content type ….."**?
    

No se necesita especificar explícitamente el tipo de contenido en la respuesta con res.setHeader('Content-type', 'text/html') porque el cliente puede traducir la respuesta utilizando una plantilla HTML predeterminada. En este caso, el mensaje se muestra dentro de un elemento < pre>. Sin embargo, al usar res.setHeader('Content-type', 'text/html'), el cliente interpretará que deseamos ver la respuesta en un formato específico. Si se utiliza HTML, el mensaje se mostrará sin etiquetas dentro del cuerpo (<body>) del documento.

  

-   **En los ejercicios. ¿En qué lugar debería estar el archivo poema.txt?**
    

Debería estar en la carpeta priv, tal como se le indica en la dirección que recibe path.resolve

  

-   **¿Entiende la expresión regular en el código y se da cuenta de para qué es útil?**
    

Modifica el texto en formato HTML para que los saltos de línea representados por \n sean reemplazados por la etiqueta < br>, de manera que el contenido se visualice en el navegador de la misma forma que está en el archivo de texto original.

  

-   **Note que la respuesta del servidor está en formato JSON, ¿Habrá alguna forma de verla directamente?**  
    

Se puede utilizar response.send() para enviar cadenas y arrays sin necesidad de usar JSON, de forma que la información se muestra directamente.

## III.	CONCLUSIONES


Durante el desarrollo de este proyecto, se lograron alcanzar los siguientes objetivos y conclusiones clave:

  -   Aprender peticiones asíncronas en JavaScript usando JSON: Se comprendió la importancia de utilizar JSON para la comunicación de datos. Esto permite una interacción dinámica con servidores o APIs sin necesidad de recargar la página.
    
-   Programar en el Backend usando JavaScript: Se exploraron herramientas como Node.js y Express.js para programar en el backend utilizando JavaScript. Se comprendió cómo crear servidores web, manejar solicitudes y respuestas, y desarrollar la lógica de negocio en el backend. Esto brinda versatilidad y eficiencia en el desarrollo de aplicaciones web completas.
    
-   Entender las promesas y los objetos no bloqueantes: Se obtuvo una comprensión sólida de las promesas y los objetos no bloqueantes. Las promesas proporcionan una forma estructurada de manejar tareas asíncronas, evitando el anidamiento excesivo de callbacks. Los objetos no bloqueantes permiten que otras tareas se ejecuten sin interrupciones mientras se realizan operaciones asíncronas, mejorando el rendimiento de la aplicación.



<div align="center"><h2> REFERENCIAS Y BIBLIOGRAFÍA </h2></div> 

-   JavaScript code using the latest ECMAScript. Packt Publishing Ltd, 2018.
    
-   Greg Lim. Beginning Node.js, Express & MongoDB Development. Amazon, 2019.
  
-   https://www.w3schools.com/nodejs/nodejs_intro.asp
    
-   https://nodejs.org/en/docs/guides/getting-started-guide/
    
-   https://nodejs.dev/learn
    
-   https://www.w3schools.com/js/js_api_fetch.asp
    
-   https://expressjs.com/es/
    
-   https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
    
-   https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction
