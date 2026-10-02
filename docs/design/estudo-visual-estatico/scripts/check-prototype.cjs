const { existsSync, readFileSync, statSync } = require('node:fs');
const { resolve, dirname } = require('node:path');

const root = resolve(__dirname, '..');
const pages = ['index.html', 'plateia.html'];
let checks = 0;

function assert(condition, message) {
  if (!condition) throw new Error(message);
  checks += 1;
}

function idsOf(html) {
  return [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
}

for (const page of pages) {
  const path = resolve(root, page);
  const html = readFileSync(path, 'utf8');
  const ids = idsOf(html);
  assert(new Set(ids).size === ids.length, `${page}: duplicate id`);
  assert(/<html lang="pt-BR">/.test(html), `${page}: language missing`);
  assert(/<main\b/.test(html) && /<h1\b/.test(html), `${page}: main or title missing`);

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|data:)/.test(target)) continue;
    const [relative, fragment] = target.split('#');
    const targetPath = relative ? resolve(dirname(path), relative) : path;
    assert(existsSync(targetPath), `${page}: missing ${target}`);
    if (fragment) {
      const targetHtml = readFileSync(targetPath, 'utf8');
      assert(idsOf(targetHtml).includes(fragment), `${page}: missing anchor ${target}`);
    }
    if (/\.(?:webp|ico)$/.test(relative)) {
      assert(statSync(targetPath).size > 1000, `${page}: image is empty: ${target}`);
    }
  }
}

console.log(`Prototype checks passed (${checks} assertions).`);
