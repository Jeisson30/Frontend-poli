import { checkLogin, logout } from "../../scripts/session-check.js";
  checkLogin("../../modules/login/login.html");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("languageForm");
    const tableBody = document.querySelector("#languageTable tbody");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const number = document.getElementById("number").value.trim();
      const name = document.getElementById("name").value.trim();
      const extension = document.getElementById("extension").value.trim();
  
      if (!number || !name || !extension) return;
  
      const row = document.createElement("tr");
  
      const numCell = document.createElement("td");
      numCell.textContent = number;
      numCell.style.cursor = "pointer";
      numCell.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this language?")) {
          tableBody.removeChild(row);
        }
      });
  
      const nameCell = document.createElement("td");
      nameCell.textContent = name;
  
      const extCell = document.createElement("td");
      extCell.textContent = extension;
  
      row.appendChild(numCell);
      row.appendChild(nameCell);
      row.appendChild(extCell);
  
      tableBody.appendChild(row);
      form.reset();
    });
});
  