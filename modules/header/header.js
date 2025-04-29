import { checkLogin, logout } from "../../scripts/session-check.js";

// Validar sesión
checkLogin("./modules/login/login.html");

export function renderizarFechaActual() {
  const fecha = new Date();
  const opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const fechaFormateada = fecha.toLocaleDateString('es-CO', opciones);

  const contenedorFecha = document.getElementById('fecha-actual');
  if (contenedorFecha) {
    contenedorFecha.textContent = fechaFormateada;
  }

  // Activar botón logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      logout("./modules/login/login.html"); 
    });
  }
}
