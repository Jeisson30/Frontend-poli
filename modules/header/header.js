export function renderizarFechaActual() {
    const fecha = new Date();
    const opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const fechaFormateada = fecha.toLocaleDateString('es-CO', opciones);
  
    const contenedorFecha = document.getElementById('fecha-actual');
    if (contenedorFecha) {
      contenedorFecha.textContent = fechaFormateada;
    }
}
  