import { fetchWeather } from "./weather.js";
import { getTreeMood } from "./mood.js";
import { generatePoem } from "./poem.js";

const LAT = 60.1699;
const LON = 24.9384;

async function run() {
  try {
    const weather = await fetchWeather(LAT, LON);
    const mood = getTreeMood(weather);
    const poem = generatePoem(mood);

    document.getElementById("entry").innerHTML = `
      <p><strong>Mood:</strong> ${mood}</p>
      <p>${poem}</p>
      <hr/>
      <small>
        ${weather.temperature}°C · wind ${weather.windspeed} · rain ${weather.precipitation}
      </small>
    `;
  } catch (e) {
    document.getElementById("entry").innerHTML =
      "🌑 The tree is silent (weather could not be read)";
    console.error(e);
  }
}

run();