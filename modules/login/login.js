// modules/login/login.js
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
      showConfirmButton: false
    }).then(() => {
      window.location.href = "../../index.html";
    });

  } else {
    Swal.fire({
      icon: "error",
      title: "Credenciales incorrectas",
      text: "Por favor verifica tu nombre de usuario y contraseña",
    });
  }
});
