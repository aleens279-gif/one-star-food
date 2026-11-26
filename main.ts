// One Star, Five Stars for the Food — writes one sentence to /output/entry.txt
// Gate: 160 chars (max 200), one sentence, no trailing newline.
// Twist: the complaint is alien, the compliment is the noodles.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "One star: the locals",
  "queue for hours to stare at",
  "glowing rectangles, the weather",
  "changes its mind mid-sentence,",
  "but the noodles alone are worth the light-years.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
