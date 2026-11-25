// Funniest One-Line Out-of-Office Reply
// Writes one out-of-office auto-reply line to /output/entry.txt.
// Gate: UTF-8 text, 1 to 160 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I'm out until Monday. Please direct all emergencies to my plants — they've been handling things around here for weeks.";

// Gate validation: one line, 1 to 160 characters, not only whitespace.
if (line.length < 1 || line.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (line.trim() === "") {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote entry.txt (${line.length} characters): ${line}`);
