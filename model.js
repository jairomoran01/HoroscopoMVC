const API_URL = "https://horoscope-api.example.com/daily"; // Reemplazar con API real
const CORS_PROXY = "https://corsproxy.io/?";

function getZodiacSign(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return { sign: "Aries", emoji: "♈" };
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return { sign: "Tauro", emoji: "♉" };
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return { sign: "Géminis", emoji: "♊" };
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return { sign: "Cáncer", emoji: "♋" };
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return { sign: "Leo", emoji: "♌" };
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return { sign: "Virgo", emoji: "♍" };
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return { sign: "Libra", emoji: "♎" };
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return { sign: "Escorpio", emoji: "♏" };
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return { sign: "Sagitario", emoji: "♐" };
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return { sign: "Capricornio", emoji: "♑" };
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return { sign: "Acuario", emoji: "♒" };
  return { sign: "Piscis", emoji: "♓" };
}

export async function fetchHoroscope(birthdate) {
  try {
    const { sign, emoji } = getZodiacSign(new Date(birthdate));
    // Simulación de respuesta de API
    return {
      sign,
      emoji,
      prediction: `Hoy es un gran día para ${sign}. Las estrellas están alineadas a tu favor.`
    };
  } catch (error) {
    console.error("Error al obtener el horóscopo:", error);
    return null;
  }
}