const container = document.getElementById("horoscope-container");
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

export function renderHoroscope({ horoscope, sign, emoji }) {
  container.innerHTML = `
    <h2>${emoji} ${sign.charAt(0).toUpperCase() + sign.slice(1)} ${emoji}</h2>
    <p>${horoscope}</p>
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

export function validateDate(date) {
  return date && date.match(/^\d{4}-\d{2}-\d{2}$/);
}

export function setupDateValidation(callback) {
  birthdateInput.addEventListener('input', (e) => {
    const isValid = validateDate(e.target.value);
    button.disabled = !isValid;
    if (isValid) {
      callback(e.target.value);
    }
  });
}