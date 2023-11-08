function quitarDia() {
    const fechaInput = document.getElementById("DateInvale");
    const valor = fechaInput.value;
    
    // Verificamos si el valor es válido
    if (valor) {
      const partes = valor.split("-");
      if (partes.length === 3) {
        const mesAnio = partes[1] + "/" + partes[0];
        fechaInput.value = mesAnio;
      }
    }
  }