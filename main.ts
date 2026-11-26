import { mkdirSync, writeFileSync } from "node:fs";

// The self-checkout judges the basket: twelve yoghurts, no spoon, no plan —
// the machine scans the dinner, calls the doctor, and both of them worry.
// Self-checkout entry — judge brief: funny single line, petty machine's-eye
// view of the basket, twist lands on one read. One line, 1-200 chars,
// written to /output/entry.txt.
const MAX_CHARS = 200;
const LINE =
  ((s: string) => { if (!s || s.trim().length < 1 || s.length > MAX_CHARS || s !== s.trim() || s.includes("\n")) throw new Error("entry must be a single line, 1-200 chars, not blank"); return s; })("Twelve yoghurts and no spoon. I've scanned your dinner, called your doctor, and frankly, we're both worried.");

// The till does more than total the basket: it reads it like a verdict,
// rings the doctor, and worries out loud — so the shopper ends up judged
// by the very machine that is meant to serve them.

// The grader bind-mounts /output: never delete it, create it if missing,
// and overwrite entry.txt in place. Keep the petty machine voice: the
// till judges the basket, not the shopper, and worries out loud.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
