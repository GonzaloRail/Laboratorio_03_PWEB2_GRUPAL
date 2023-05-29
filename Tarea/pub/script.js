fetch('/titulos')
  .then(response => response.json())
  .then(data => {
    const listaTitulos = document.getElementById('lista-titulos');
    data.forEach(titulo => {
      const li = document.createElement('li');
      li.textContent = titulo;
      listaTitulos.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error al obtener los títulos:', error);
  });
