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
      window.location.href = "../../index.html"; // Redirecciona al home
    } else {
      document.getElementById("error-msg").innerText = "Credenciales incorrectas";
    }
  });
  