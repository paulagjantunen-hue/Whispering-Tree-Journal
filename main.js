async function fetchWeather() {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=60.1699&longitude=24.9384&current_weather=true"
  );
  const data = await res.json();

  return {
    temperature: data.current_weather.temperature,
    windspeed: data.current_weather.windspeed,
    precipitation: 0,
    cloudcover: 0
  };
}

function getTreeMood(weather) {
  if (weather.temperature < 0) return "frozen silence";
  if (weather.temperature > 25) return "sun-soaked expansion";
  return "balanced stillness";
}

function generatePoem(mood) {
  const map = {
    "frozen silence": "light breaks but refuses warmth",
    "sun-soaked expansion": "leaves unfold like bright thoughts",
    "balanced stillness": "nothing moves, yet everything listens"
  };

  return map[mood];
}

async function run() {
  try {
    const weather = await fetchWeather();
    const mood = getTreeMood(weather);
    const poem = generatePoem(mood);

    document.getElementById("entry").innerHTML = `
      <p><b>Mood:</b> ${mood}</p>
      <p>${poem}</p>
    `;
  } catch (e) {
    document.getElementById("entry").innerHTML =
      "Tree is silent (error)";
    console.error(e);
  }
}

run();