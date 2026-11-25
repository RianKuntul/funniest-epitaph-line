// Famous Last Words: The Funniest Epitaph
// Writes one tombstone epitaph of famous last words to /output/entry.txt.
// Deterministic: a single fixed line, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const epitaph = "Don't panic — I've done this before.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), epitaph, "utf8");
