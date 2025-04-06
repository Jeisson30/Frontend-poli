import { renderizarFechaActual } from '../modules/header/header.js';

async function loadComponent(containerId, path, callback) {
  try {
    const res = await fetch(path);
    const html = await res.text();
    document.getElementById(containerId).innerHTML = html;
    if (callback) callback();
  } catch (err) {
    console.error(`Error loading ${path}:`, err);
  }
}

loadComponent('header', 'modules/header/header.html', renderizarFechaActual);

// Módulos
loadComponent('footer', 'modules/footer/footer.html');
loadComponent('sidebar', 'modules/sidebar/sidebar.html');
loadComponent('content', 'modules/language/language.html');
loadComponent('prueba', 'modules/prueba/prueba.html');

window.loadModule = (path) => {
  loadComponent('content', path);
};
