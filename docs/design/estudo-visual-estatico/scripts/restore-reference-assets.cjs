// Recover the author's existing images from the previous portfolio branch.
// Run from the repository root: node scripts/restore-reference-assets.cjs
const { spawnSync } = require('node:child_process');
const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const root = join(__dirname, '..');
const assets = join(root, 'assets');
mkdirSync(assets, { recursive: true });

for (const name of [
  'foto-perfil.webp',
  'plateia.webp',
  'kanban-realtime.webp',
  'home-expense.webp',
  'favicon.ico',
]) {
  const result = spawnSync('git', ['show', `origin/main:assets/${name}`], {
    cwd: root,
    encoding: null,
    maxBuffer: 10 * 1024 * 1024,
  });
  if (result.status !== 0) {
    throw new Error(`Could not restore ${name}: ${result.stderr.toString()}`);
  }
  writeFileSync(join(assets, name), result.stdout);
  console.log(`${name}: ${result.stdout.length} bytes`);
}
