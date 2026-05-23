async function load() {
  const res = await fetch("/api/today");
  const data = await res.json();

  document.getElementById("entry").innerHTML = `
    <p><strong>Mood:</strong> ${data.mood}</p>
    <p>${data.poem}</p>
  `;
}

load();