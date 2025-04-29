document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Usuarios simulados
  const validUser = "admin";
  const validPass = "1234";

  if (username === validUser && password === validPass) {
    sessionStorage.setItem("loggedIn", "true");

    Swal.fire({
      icon: "success",
      title: "¡Bienvenido!",
      text: "Redireccionando al inicio...",
      timer: 1500,
      showConfirmButton: false,
      background: '#150240', 
      color: '#ffffff',      
      iconColor: '#04BFBF',   
      timerProgressBar: true, 
      customClass: {
        title: 'swal2-title',
        popup: 'swal2-popup',
      }
    }).then(() => {
      window.location.href = "../../index.html";
    });

  } else {
    Swal.fire({
      icon: "error",
      title: "Credenciales incorrectas",
      text: "Por favor verifica tu nombre de usuario y contraseña",
      background: '#150240',
      color: '#ffffff',
      iconColor: '#e74c3c', 
      confirmButtonColor: '#8303A6', 
      customClass: {
        title: 'swal2-title',
        popup: 'swal2-popup',
      }
    });
  }
});
