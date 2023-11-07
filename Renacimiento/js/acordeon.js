document.addEventListener("DOMContentLoaded", function() {
    var acordeonItems = document.querySelectorAll('.item');

    acordeonItems.forEach(function(item) {
        var titulo = item.querySelector('.titulo');
        var contenido = item.querySelector('.contenido');

        titulo.addEventListener('click', function() {
           
            if (item.classList.contains('expandido')) {
                contenido.style.display = 'none';
                item.classList.remove('expandido');
                item.querySelector('.flecha').textContent = '▶';
            } else {
                
                acordeonItems.forEach(function(item) {
                    item.classList.remove('expandido');
                    item.querySelector('.contenido').style.display = 'none';
                    item.querySelector('.flecha').textContent = '▶';
                });

               
                contenido.style.display = 'block';
                item.classList.add('expandido');
                item.querySelector('.flecha').textContent = '▼';
            }
        });
    });
});