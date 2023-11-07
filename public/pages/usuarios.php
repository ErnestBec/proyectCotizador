<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuarios</title>
    <link rel="stylesheet" href="css/clientes.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    
</head>
<body style=" background-color: #f1f1f1">
    <header>
        <div class="logo">
            <img src="img/Logo.jpg" alt="Renacimiento"> 
        </div>
        <nav>
            <a href="../Renacimiento/index.html">Inicio</a>      
        </nav>
    </header>
    <h2>Clientes</h2>
<main>
    <div class="clientes-container">
    <div class="form-group"> 
    <label for="columnaOrden">Ordenar por:</label>
<select id="columnaOrden">
    <option value="0">ID</option>
    <option value="1">Nombre</option>
    <option value="2">Apellido</option>
    
</select>
<button onclick="ordenarTabla()">Ordenar</button>
<label for="myInput"><b>Buscar:</b></label>
<input type="text" id="myInput" onkeyup="filtrarTabla()" placeholder="Ingrese término de búsqueda...">

</div>
    <?php
    
    $usuarios = array(
        array("id" => 1, "nombre" => "Ernesto", "apellido" => "Becerril", "genero" => "Femenino", "fechaNacimiento" => "2001-01-01", "calle" => "123 Calle Principal", "entidad" => "Estado", "municipio" => "Ciudad", "cp" => "50200", "Rol" => "Administrador", "Estatus" => "Activo"),
        
    );

    echo '<table id="myTable">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Género</th>
                <th>Fecha de Nacimiento</th>
                <th>Calle</th>
                <th>Entidad</th>
                <th>Municipio</th>
                <th>CP</th>
                <th>Rol</th>
                <th>Estatus</th>
                <th>Acciones</th>
            </tr>';

    foreach ($usuarios as $usuario) {
        echo '<tr>
                <td>' . $usuario["id"] . '</td>
                <td>' . $usuario["nombre"] . '</td>
                <td>' . $usuario["apellido"] . '</td>
                <td>' . $usuario["genero"] . '</td>
                <td>' . $usuario["fechaNacimiento"] . '</td>
                <td>' . $usuario["calle"] . '</td>
                <td>' . $usuario["entidad"] . '</td>
                <td>' . $usuario["municipio"] . '</td>
                <td>' . $usuario["cp"] . '</td>
                <td>' . $usuario["Rol"] . '</td>
                <td>' . $usuario["Estatus"] . '</td>
                <td>

                    <button class="btn-edit" >Editar</button>
                    <button class="btn-delete">Eliminar</button>
                    <button class="btn-danger">Bloquear</button>
                </td>
            </tr>';
    }

    echo '</table>
    
<script src="js/orden.js"></script>
<script src="js/paginacion.js"></script>
<script src="js/busqueda.js"></script>';
    ?>

<div class="pag" id="paginacion">
    <button onclick="cambiarPagina('anterior')">Anterior</button>
    <span id="paginaActual">1</span>
    <button onclick="cambiarPagina('siguiente')">Siguiente</button>
</div>
    </div>
</main>

<footer >
   <h2>Renacimiento Nueva Era</h2>
</footer>


</body>

</html>