// Cargar las noticias desde el archivo JSON
fetch('noticias.json')
    .then(response => response.json())
    .then(noticias => {
        const listaNoticias = document.getElementById('noticias-lista');
        
        noticias.forEach(noticia => {
            const noticiaDiv = document.createElement('div');
            noticiaDiv.classList.add('noticia');
            
            const titulo = document.createElement('h3');
            titulo.textContent = noticia.titulo;
            noticiaDiv.appendChild(titulo);
            
            const fecha = document.createElement('p');
            fecha.textContent = `Fecha: ${noticia.fecha}`;
            noticiaDiv.appendChild(fecha);
            
            const descripcion = document.createElement('p');
            descripcion.textContent = noticia.descripcion;
            noticiaDiv.appendChild(descripcion);
            
            const enlace = document.createElement('a');
            enlace.href = noticia.url;
            enlace.target = '_blank';
            enlace.textContent = 'Leer más';
            noticiaDiv.appendChild(enlace);

            listaNoticias.appendChild(noticiaDiv);
        });
    })
    .catch(error => {
        console.error('Error al cargar las noticias:', error);
    });
