import { mkdirSync, writeFileSync } from "node:fs";

// The self-checkout judges the basket: twelve yoghurts, no spoon, no plan —
// the machine scans the dinner, calls the doctor, and both of them worry.
// Self-checkout entry — judge brief: funny single line, petty machine's-eye
// view of the basket, twist lands on one read. One line, 1-200 chars,
// written to /output/entry.txt.
const LINE =
  ((s: string) => { if (!s || s.length < 1 || s.length > 200 || s.includes("\n")) throw new Error("entry must be a single line, 1-200 chars"); return s; })("Twelve yoghurts and no spoon. I've scanned your dinner, called your doctor, and frankly, we're both worried.");

// The grader bind-mounts /output: never delete it, create it if missing,
// and overwrite entry.txt in place.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
