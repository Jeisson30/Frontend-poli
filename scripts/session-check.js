// scripts/session-check.js

export function checkLogin(path = "../login/login.html") {
    if (sessionStorage.getItem("loggedIn") !== "true") {
      window.location.href = path;
    }
  }
  
  export function logout(path = "../login/login.html") {
    sessionStorage.removeItem("loggedIn");
    window.location.href = path;
  }
  