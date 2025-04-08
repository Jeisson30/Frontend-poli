import { checkLogin, logout } from "../../scripts/session-check.js";
checkLogin("../../modules/login/login.html");
function updateAnswer() {
    const number = parseInt(document.getElementById('number').value);
    const description = document.getElementById('description').value;
    const type = document.getElementById('type').value;

    if (number < 0 || number > 7) {
        alert('Número inválido. Debe estar entre 0 y 7.');
        return;
    }

    const table = document.getElementById('answersTable');
    const row = table.rows[number + 1]; // +1 por el encabezado

    if (row) {
        row.cells[1].textContent = description;
        row.cells[2].textContent = type;
    } else {
        alert('No se encontró la fila especificada.');
    }
}


