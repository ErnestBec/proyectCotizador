function filtrarTabla() {
    var input, filter, table, rows, cells, cell, i, j, txtValue;
    input = document.getElementById("myInput"); 
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable"); 
    rows = table.rows;

    for (i = 1; i < rows.length; i++) {
        cells = rows[i].getElementsByTagName("td");
        var filaVisible = false;
        for (j = 0; j < cells.length; j++) {
            cell = cells[j];
            if (cell) {
                txtValue = cell.textContent || cell.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    filaVisible = true;
                    break;
                }
            }
        }
        if (filaVisible) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}