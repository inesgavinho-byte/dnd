#!/usr/bin/env node
// Generates a 512×512 PNG of fine cold-press dimples on transparent background.
// Replace public/paper-grain.png with a real high-resolution scan when one is
// available — this is a procedural stand-in matching the spec's tone.

import { PNG } from 'pngjs';
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SIZE = 512;
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'paper-grain.png');

// Deterministic PRNG so the texture is stable across builds.
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const png = new PNG({ width: SIZE, height: SIZE });
const rand = mulberry32(0x15140f);

for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    const idx = (y * SIZE + x) << 2;

    // Two layered noises: a fine pepper of dimples + a soft long-wave mottle.
    const r1 = rand();
    const r2 = rand();
    const dimple = r1 < 0.045 ? Math.floor(40 + r2 * 50) : 0;
    const mottle = r1 < 0.012 ? Math.floor(18 + r2 * 22) : 0;

    const a = Math.min(255, dimple + mottle);

    // Cool grey ink against transparent paper.
    png.data[idx] = 80;
    png.data[idx + 1] = 78;
    png.data[idx + 2] = 70;
    png.data[idx + 3] = a;
  }
}

writeFileSync(OUT, PNG.sync.write(png));
console.log(`wrote ${OUT}`);
