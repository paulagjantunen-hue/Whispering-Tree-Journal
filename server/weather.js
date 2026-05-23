import fetch from "node-fetch";

export async function fetchWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=precipitation_sum,cloudcover_mean`;

  const res = await fetch(url);
  const data = await res.json();

  return {
    temperature: data.current_weather.temperature,
    windspeed: data.current_weather.windspeed,
    precipitation: data.daily.precipitation_sum?.[0] || 0,
    cloudcover: data.daily.cloudcover_mean?.[0] || 0
  };
}