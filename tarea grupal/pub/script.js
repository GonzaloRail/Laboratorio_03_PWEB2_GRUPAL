function recitar(markupText, fileName) {
    const url = 'http://localhost:3000/';
    const data = {
        text: markupText,
        fileName: fileName
    };
    console.log(data);
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    http = fetch(url, request);
    http.then(
        response => response.json()
    ).then(
        data => {
            document.querySelector("#htmlCode").innerHTML = data.text;
        }
    );
}

function showFiles() {
    const inputFields = document.querySelector("#inputFields");
    inputFields.style.display = 'none'; // Oculta los campos de entrada

    const url = 'http://localhost:3000/files';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const fileList = data.files;
            const filesContainer = document.querySelector("#filesContainer");
            filesContainer.innerHTML = '';

            fileList.forEach(file => {
                const listItem = document.createElement('li');
                listItem.textContent = file;
                listItem.addEventListener('click', () => {
                    showFileContent(file);
                });
                filesContainer.appendChild(listItem);
            });

            const caja2 = document.querySelector("#caja2");
            caja2.style.display = 'block'; // Muestra la lista de archivos
        })
        .catch(error => {
            console.error('Error al obtener la lista de archivos:', error);
        });
}

function showFileContent(file) {
    const url = `http://localhost:3000/files/${file}`;
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const htmlCode = document.querySelector("#htmlCode");
            htmlCode.innerHTML = data;
        })
        .catch(error => {
            console.error('Error al obtener el contenido del archivo:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const createMdButton = document.querySelector("#createMdButton");
    const showFilesButton = document.querySelector("#showFilesButton");
    const markupForm = document.querySelector("#markupForm");

    createMdButton.addEventListener('click', () => {
        markupForm.style.display = 'block'; // Muestra el formulario de creación de MD
        const caja2 = document.querySelector("#caja2");
        caja2.style.display = 'none'; // Oculta la lista de archivos
    });

    markupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const markupText = document.querySelector("#markupText").value;
        const fileName = document.querySelector("#fileName").value;
        recitar(markupText, fileName);
    });

    showFilesButton.addEventListener('click', () => {
        showFiles();
        markupForm.style.display = 'none'; // Oculta el formulario de creación de MD
    });
});