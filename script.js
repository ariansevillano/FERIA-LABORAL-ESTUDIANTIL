document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-vacante");
    const vacantesDiv = document.getElementById("vacantes");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputs = form.querySelectorAll("input, textarea, select");
        const values = Array.from(inputs).map(input => input.value);
        const [titulo, descripcion, modalidad, requisitos, inicio, cierre] = values;
  
        const vacanteHTML = `
          <div class="bg-white p-4 rounded shadow">
            <h3 class="text-lg font-bold">${titulo}</h3>
            <p>${descripcion}</p>
            <p><strong>Modalidad:</strong> ${modalidad}</p>
            <p><strong>Requisitos:</strong> ${requisitos}</p>
            <p><strong>Fechas:</strong> ${inicio} - ${cierre}</p>
          </div>
        `;
  
        vacantesDiv.insertAdjacentHTML("beforeend", vacanteHTML);
        form.reset();
      });
    }
  });
  