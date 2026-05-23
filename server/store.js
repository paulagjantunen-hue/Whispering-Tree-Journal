import fs from "fs";

const FILE = "data/entries.json";

export async function saveEntry(entry) {
  let data = [];

  if (fs.existsSync(FILE)) {
    data = JSON.parse(fs.readFileSync(FILE));
  }

  data.push(entry);

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

export async function loadToday() {
  if (!fs.existsSync(FILE)) return null;

  const data = JSON.parse(fs.readFileSync(FILE));
  const today = new Date().toISOString().slice(0, 10);

  return data.find(e => e.date === today);
}