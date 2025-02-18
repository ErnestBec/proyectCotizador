function ordenarTablaPorColumna(columna) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable"); 
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columna];
            y = rows[i + 1].getElementsByTagName("TD")[columna];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function ordenarTabla() {
    var columnaSeleccionada = document.getElementById("columnaOrden").value;
    ordenarTablaPorColumna(columnaSeleccionada);
}