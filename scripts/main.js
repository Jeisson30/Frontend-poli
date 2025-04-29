import { renderizarFechaActual } from '../modules/header/header.js';

// Función general para cargar cualquier HTML en un contenedor
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

// Función especial para módulos (content) que además cargan su CSS y su JS
async function loadModule(path) {
  await loadComponent('content', path);

  const basePath = path.substring(0, path.lastIndexOf('/')); // Ejemplo: "modules/teams"
  const fileName = basePath.split('/').pop(); // Ejemplo: "teams"

  // Cargar el CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = `${basePath}/${fileName}.css`;
  document.head.appendChild(cssLink);

  // Cargar el JS
  const script = document.createElement('script');
  script.type = 'module';
  script.src = `${basePath}/${fileName}.js`;
  document.head.appendChild(script);
}

// Función especial para cargar componentes como header, sidebar y footer con su CSS
async function loadStaticComponent(containerId, path, cssPath = null, callback) {
  try {
    // Si se proporciona un CSS específico, cargarlo
    if (cssPath) {
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = cssPath;
      document.head.appendChild(cssLink);
    }

    await loadComponent(containerId, path, callback);
  } catch (err) {
    console.error(`Error loading static component ${path}:`, err);
  }
}

// Cargar automáticamente los componentes principales
window.addEventListener('DOMContentLoaded', async () => {
  await loadStaticComponent('header', 'modules/header/header.html', 'modules/header/header.css', renderizarFechaActual);
  await loadStaticComponent('sidebar', 'modules/sidebar/sidebar.html', 'modules/sidebar/sidebar.css');
  await loadStaticComponent('footer', 'modules/footer/footer.html'); // No necesita CSS si no lo tienes
  await loadModule('modules/teams/teams.html'); // Al inicio carga Teams
});

// Exponer loadModule para el sidebar
window.loadModule = loadModule;
