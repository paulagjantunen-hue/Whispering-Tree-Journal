import express from "express";
import cors from "cors";
import { fetchWeather } from "./weather.js";
import { getTreeMood } from "./mood.js";
import { generatePoem } from "./poem.js";
import { saveEntry, loadToday } from "./store.js";

const app = express();
app.use(cors());
app.use(express.static("client"));

const PORT = process.env.PORT || 3000;

app.get("/api/today", async (req, res) => {
  const today = await loadToday();
  if (today) return res.json(today);

  const weather = await fetchWeather(process.env.CITY_LAT, process.env.CITY_LON);
  const mood = getTreeMood(weather);
  const poem = generatePoem(mood);

  const entry = {
    date: new Date().toISOString().slice(0, 10),
    weather,
    mood,
    poem
  };

  await saveEntry(entry);
  res.json(entry);
});

app.listen(PORT, () => {
  console.log(`🌳 Whispering Tree Journal running on port ${PORT}`);
});