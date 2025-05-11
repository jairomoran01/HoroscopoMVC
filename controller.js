import { fetchHoroscope } from "./model.js";
import {
  disableButton,
  enableButton,
  clearView,
  renderHoroscope,
  renderError,
  fadeOut,
  setupDateValidation
} from "./view.js";

let hideTimeout;
let currentBirthdate = null;

function updateBirthdate(date) {
  currentBirthdate = date;
}

async function showHoroscope() {
  if (!currentBirthdate) return;
  
  disableButton();
  clearTimeout(hideTimeout);
  clearView();

  const data = await fetchHoroscope(currentBirthdate);
  if (!data) {
    renderError();
    hideTimeout = setTimeout(() => {
      clearView();
      enableButton();
    }, 5000);
    return;
  }

  renderHoroscope(data);
  hideTimeout = setTimeout(fadeOut, 15000);
  setTimeout(() => {
    clearView();
    enableButton();
  }, 16000);
}

setupDateValidation(updateBirthdate);
document.getElementById("get-quote").addEventListener("click", showHoroscope);