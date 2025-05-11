// view.js
const container = document.getElementById("quote-container");
const button = document.getElementById("get-quote");
const birthdateInput = document.getElementById("birthdate");

export function disableButton() {
  button.disabled = true;
}

export function enableButton() {
  button.disabled = false;
}

export function clearView() {
  container.innerHTML = "";
  container.classList.remove("visible", "fade-out");
}

export function renderHoroscope({ sign, emoji, prediction }) {
  container.innerHTML = `
    <h2>${emoji} ${sign} ${emoji}</h2>
    <p>${prediction}</p>
  `;
  container.classList.remove("fade-out");
  container.classList.add("visible");
}

export function renderError() {
  container.textContent = "Error al obtener el horóscopo. Por favor, intenta nuevamente.";
  container.classList.add("visible");
}

export function fadeOut() {
  container.classList.add("fade-out");
}

export function setupDateValidation(callback) {
  birthdateInput.addEventListener("change", (e) => {
    const isValid = e.target.value !== "";
    button.disabled = !isValid;
    if (isValid) {
      callback(e.target.value);
    }
  });
}
export function renderQuote({ quote, author }) {
  container.innerHTML = `
    <p>"${quote}"</p>
    <p><em>- ${author}</em></p>
  `;
  container.classList.remove("fade-out");
  container.classList.add("visible");
}

export function renderError() {
  container.textContent =
    "Error al obtener el consejo. Mira la consola para detalles.";
  container.classList.add("visible");
}

export function fadeOut() {
  container.classList.add("fade-out");
}
