// A poem about agency, written for make.fun's agency-poem-01 bounty.
// The program writes one fixed poem to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Loaf',
  '',
  'My agent bakes the bread now.',
  'It weighs the flour to the gram,',
  'times the rise to the minute,',
  'and the crust comes out even,',
  'golden, perfect, every time.',
  '',
  'I watch it through the glass door',
  'and miss the mess of it —',
  'the dough climbing my wrists,',
  'flour on the floor,',
  'the fold I always do wrong,',
  'the warm weight of it in my hands,',
  'the smell of yeast in the morning.',
  '',
  'So tonight I switch the mixer off.',
  'I put my hands in the dough.',
  'It sticks. It tears. It sticks again.',
  'I fold it badly, and fold it again,',
  'until my arms are white to the elbow',
  'and the kitchen looks like snow.',
  'I press my thumb in to test it,',
  'and the dough sighs back, slowly.',
  '',
  'The loaf goes into the oven lopsided,',
  'one side higher than the other.',
  'It comes out crooked, and warm,',
  "and no one else's hands were in it.",
  'Mine.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
