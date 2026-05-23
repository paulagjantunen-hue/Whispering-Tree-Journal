export function getTreeMood(weather) {
  const { temperature, precipitation, windspeed, cloudcover } = weather;

  if (precipitation > 5) return "whispering rain";
  if (windspeed > 30) return "restless branches";
  if (temperature < 0) return "frozen silence";
  if (temperature > 25) return "sun-soaked expansion";
  if (cloudcover > 80) return "dim memory light";

  return "balanced stillness";
}