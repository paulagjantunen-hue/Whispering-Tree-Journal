const openings = [
  "Today the tree remembers",
  "In the morning light, the tree writes",
  "A quiet record appears in the bark of time",
  "The tree speaks softly of"
];

const imagery = {
  "whispering rain": [
    "water threading through leaf veins",
    "a slow conversation with the soil",
    "drops counting ancient seconds"
  ],
  "restless branches": [
    "green hands searching the air",
    "wind rewriting every sentence",
    "movement without apology"
  ],
  "frozen silence": [
    "light breaking but not warming",
    "time held in glassy suspension",
    "roots dreaming downward"
  ],
  "sun-soaked expansion": [
    "leaves unrolling like unfinished thoughts",
    "gold spilling through green architecture",
    "a bright insistence on growth"
  ],
  "balanced stillness": [
    "nothing asking to be more",
    "breath held evenly between worlds",
    "the patience of standing"
  ]
};

const closings = [
  "and keeps it in the rings of tomorrow.",
  "until the day forgets to end.",
  "as if memory itself were photosynthesis.",
  "waiting for someone to listen back."
];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generatePoem(mood) {
  const open = rand(openings);
  const img = rand(imagery[mood] || imagery["balanced stillness"]);
  const close = rand(closings);

  return `${open} ${img} ${close}`;
}