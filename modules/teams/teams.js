import { checkLogin, logout } from "../../scripts/session-check.js";
checkLogin("../../modules/login/login.html");

const form = document.getElementById("teamForm");
const tableBody = document.querySelector("#teamsTable tbody");

if (form && tableBody) {
    loadTeams();

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtener los datos
        const team = {
            name: document.getElementById("teamName").value.trim(),
            member1: document.getElementById("member1").value.trim(),
            member2: document.getElementById("member2").value.trim(),
            member3: document.getElementById("member3").value.trim(),
            university: document.getElementById("university").value.trim()
        };

        if (!team.name || !team.member1 || !team.university) {
            alert("Por favor completa los campos obligatorios.");
            return;
        }

        // Guardar en localStorage
        const teams = JSON.parse(localStorage.getItem("teams")) || [];
        teams.push(team);
        localStorage.setItem("teams", JSON.stringify(teams));

        // Agregar fila en tabla
        addTeamToTable(team);

        // Resetear formulario
        form.reset();
    });

    function loadTeams() {
        const teams = JSON.parse(localStorage.getItem("teams")) || [];
        teams.forEach(team => addTeamToTable(team));
    }

    function addTeamToTable(team) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${team.name}</td>
            <td>${team.member1}</td>
            <td>${team.member2}</td>
            <td>${team.member3}</td>
            <td>${team.university}</td>
            <td><button class="delete-btn">Eliminar</button></td>
        `;

        // Botón eliminar
        const deleteBtn = row.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            if (confirm("¿Deseas eliminar este equipo?")) {
                // Eliminar del DOM
                row.remove();

                // Eliminar del localStorage
                let teams = JSON.parse(localStorage.getItem("teams")) || [];
                teams = teams.filter(t => !(t.name === team.name && t.member1 === team.member1));
                localStorage.setItem("teams", JSON.stringify(teams));
            }
        });

        tableBody.appendChild(row);
    }
}
