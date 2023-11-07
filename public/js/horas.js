function mostrarHora() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    var horaActual = horas + ':' + minutos + ':' + segundos;
    var zonaHoraria = obtenerZonaHoraria();
    

    document.getElementById('hora').textContent = 'Hora: ' + horaActual;
    document.getElementById('zona-horaria').textContent = 'Zona Horaria: ' + zonaHoraria;
    
}

function obtenerZonaHoraria() {
    var zonaHoraria = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return zonaHoraria;
}

setInterval(mostrarHora, 1000);

mostrarHora();
