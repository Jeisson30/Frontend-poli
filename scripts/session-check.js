// scripts/session-check.js

export function checkLogin(path = "./modules/login/login.html") {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = path;
  }
}

export function logout(path = "./modules/login/login.html") {
  Swal.fire({
    icon: 'success',
    title: '¡Sesión cerrada!',
    text: 'Redireccionando al login...',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
    background: '#150240',        
    color: '#ffffff',             
    customClass: {
      popup: 'colored-swal'         
    }
  }).then(() => {
    sessionStorage.removeItem("loggedIn");
    window.location.href = path;
  });
}
