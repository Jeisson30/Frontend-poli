import { ProblemRepository } from "../../repository/problemRepository.js";

const form = document.querySelector(".problems-form");
const tableBody = document.querySelector(".problems-table tbody");

function loadProblems() {
  tableBody.innerHTML = "";
  const problems = ProblemRepository.findAll();

  problems.forEach((p, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${p.number}</td>
      <td>${p.shortName}</td>
      <td>${p.fullname}</td>
      <td>${p.basename}</td>
      <td>${p.descfile}</td>
      <td>${p.zipFile}</td>
      <td style="color:${p.colorRgb}">${p.colorName}</td>
      <td>
        <button class="delete-btn" data-index="${index}" title="Delete problem">🗑️</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  // Attach delete event after table is created
  document.querySelectorAll(".delete-btn").forEach(button => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const index = button.getAttribute("data-index");
      deleteProblem(index);
    });
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const shortName = form.shortName.value.trim();
  const shortLower = shortName.toLowerCase();

  const newProblem = {
    number: form.number.value.trim(),
    shortName: shortName,
    fullname: form.fullname.value.trim(),
    colorName: form.colorName.value.trim(),
    colorRgb: form.colorRgb.value.trim(),
    basename: shortLower,
    descfile: `${shortLower}.pdf`,
    zipFile: `${shortLower}.zip`
  };

  ProblemRepository.save(newProblem);
  form.reset();
  loadProblems();
});

function deleteProblem(index) {
  if (confirm("Are you sure you want to delete this problem?")) {
    ProblemRepository.delete(index);
    loadProblems();
  }
}

loadProblems();