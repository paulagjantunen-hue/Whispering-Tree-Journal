const entry = document.getElementById("entry");
const branches = document.getElementById("branches");
const leaves = document.getElementById(".leaves");
const rainContainer = document.getElementById("rain");

async function fetchWeather() {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=60.1699&longitude=24.9384&current_weather=true&daily=precipitation_sum,cloudcover_mean"
  );

  const data = await res.json();

  return {
    temp: data.current_weather.temperature,
    wind: data.current_weather.windspeed,
    rain: data.daily.precipitation_sum?. [0] ?? 0,
    clouds: data.daily.cloudcover_mean?. [0] ?? 0
  };
}

function poem(weather) {
  if (weather.rain > 5)
    return "Rain gathers softly in the bark, and the tree listens to the earth.";

  if (weather.wind > 25)
    return "The branches search the sky like unfinished thoughts.";

  if (weather.temp < 0)
    return "Cold light settles quietly between the roots.";

  if (weather.temp > 22)
    return "Leaves glow like green glass in warm morning air.";

  return "The tree stands patiently beside the passing day.";
}

function makeRain(amount = 80) {
  rainContainer.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const d = document.createElement("div")
    d.className = "drop";

    d.style.left = Math.random() * 100 + "vw";
    d.style.animationDuration = 0.5 + Math.random() + "s";
    d.style.opacity = Math.random();

    rainContainer.appendChild(d);
  }
}

async function run() {
  try {
    const weather = await fetchWeather();

    entry.innerHTML = `
      <p>${poem(weather)}<p>
      <small>
        ${weather.temp}°C · wind ${weather.wind} · rain ${weather.rain}
      </small>
    `;

    if (weather.wind > 20) {
      branches.classList.add("windy");
    }

    if (weather.temp > 20) {
      leaves.forEach(l => {
        l.style.fill = "#cfd8dc";
      });
    }

    if (weather.clouds > 70) {
      document.querySelector(".sky").style.filter = "brightness(0.7)";
    }

    if (weather.rain > 5) {
      makeRain(120);

      leaves.forEach(l => {
        l.style.transform = "translateY(6px)";
      });
    }
  } catch (err) {
    console.error(err);

    entry.innerHTML =
      "The tree is silent tonight.";
  }
}

run();