var paginaActual = 1;
var filasPorPagina = 5; 

function mostrarPagina(pagina) {
    var table = document.getElementById("myTable"); // ID de tu tabla
    var rows = table.rows;
    var startIndex = (pagina - 1) * filasPorPagina;
    var endIndex = startIndex + filasPorPagina;

    for (var i = 1; i < rows.length; i++) {
        if (i > startIndex && i <= endIndex) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
    document.getElementById("paginaActual").textContent = pagina;
}

function cambiarPagina(direccion) {
    if (direccion === 'anterior' && paginaActual > 1) {
        paginaActual--;
    } else if (direccion === 'siguiente' && paginaActual < Math.ceil(rows.length / filasPorPagina)) {
        paginaActual++;
    }
    mostrarPagina(paginaActual);
}


document.addEventListener("DOMContentLoaded", function() {
    mostrarPagina(paginaActual);
});