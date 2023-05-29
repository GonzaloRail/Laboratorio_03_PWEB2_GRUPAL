/////////////CLIENTE////////////////

document.addEventListener('DOMContentLoaded', () => {
    const bSubmit1 = document.querySelector('#bSubmit1');
    
            loadDocumentos();
    
            bSubmit1.addEventListener('click', () =>{

                redirigirSeccion("final"); // me redirige a la seccion myList

                //validar campos
                const titulo = document.querySelector('#titulo').value;
                const contenido = document.querySelector('#contenido').value;

                if(titulo == "") {
                    alert("Su documento no posee título !!!");
                }
                else {
                    //Se elimina el texto escrito en el input y textarea para crear un nuevo documento mas facilmente.
                    const tit=document.getElementById("titulo");    
                    const cont=document.getElementById("contenido");    

                    tit.value = "";
                    cont.value = "";


                    //Elimina espacios con el trim()
                    if(titulo.trim() === '' || contenido.trim() === '') return false;
                    // se actualiza los datos puestos en el input y textarea.
        
                    //mandar solicitud POST a /new
                    fetch('/new', {
                        method: 'POST', 
                        headers: {'Content-type': 'application/json'},
                        body: JSON.stringify({titulo: titulo, contenido: contenido})
                    })
                    .then(res => res.text())
                    .then(data =>{
                        
        
                    //actualizar lista de peliculas
                    loadDocumentos();
                    });
                    
                }
                
            });
            
            const bSubmit2 = document.querySelector('#bSubmit2');
    
            bSubmit2.addEventListener('click',()=>{
                redirigirSeccion("myList"); // me redirige a la seccion myList
                loadDocumentos();
                const actualixarNuevamenteStyle = document.getElementById('lista');
                actualixarNuevamenteStyle.setAttribute("style", " align-items: center;width: 300px;background-color: rgb(30, 29, 43);");
            });
    
            
            function loadDocumentos() {
                fetch('/get-documentos', {method: 'GET'})
                .then(res => res.json())
                .then(data => {
                    const documentos = document.querySelector('#lista');
                    documentos.innerHTML = ''; // Limpiar contenido existente
            
                    data.documentos.forEach(documento => {
                        const element = document.createElement('div');
                        element.innerHTML = `<span>${documento.titulo}</span>`;
            
                        // Agregar evento de clic para llamar a la función mostrar
                        element.addEventListener('click', () => {
                            
                            mostrar(documento.contenido); // Llama a la función mostrar pasando el rating de la película
                            const divLista = document.getElementById('lista');
                            divLista.style.width="100%"; 
                            divLista.style.height="100%";
                        });
            
                        documentos.appendChild(element);
                    });
                });
            }
            
    
            function mostrar(contenido) {
                fetch('/mostrar', {
                    method: 'POST',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({contenido: contenido})
    
                })
                .then(res => res.text())
                .then(html => {
                    // Mostrar el contenido convertido a HTML como desees
                    console.log(html);
                    const resultadoElement = document.querySelector('#lista');
                    resultadoElement.innerHTML = html; // Actualiza el contenido del elemento con el HTML convertido
                    resultadoElement.setAttribute("style", " align-items: first baseline;width: 100%;    background-color: rgb(7, 0, 112);");
                });
            }
    
        });

        function redirigirSeccion(pam) {
            var seccionObjetivo = document.getElementById(pam);
            seccionObjetivo.scrollIntoView({ behavior: "smooth" });
          }
    