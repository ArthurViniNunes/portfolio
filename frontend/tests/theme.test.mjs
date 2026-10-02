import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import test from "node:test";
import { themeScript } from "../src/content/theme.ts";

test("tema inicial respeita escolha explícita e tolera storage bloqueado", () => {
  for (const [stored, expected] of [["dark", "dark"], ["light", "light"], [null, "light"], ["invalid", "light"]]) {
    const document = { documentElement: { dataset: {} } };
    runInNewContext(themeScript, { document, localStorage: { getItem: () => stored } });
    assert.equal(document.documentElement.dataset.theme, expected);
  }
  const document = { documentElement: { dataset: {} } };
  runInNewContext(themeScript, { document, localStorage: { getItem() { throw new Error("blocked"); } } });
  assert.equal(document.documentElement.dataset.theme, "light");
});

function luminance(hex) {
  const value = hex.length === 4 ? hex.slice(1).split("").map(char => char + char).join("") : hex.slice(1);
  const channels = value.match(/../g).map(channel => parseInt(channel, 16) / 255).map(channel => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4);
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}
test("tokens de texto mantêm contraste AA nos dois temas", () => {
  const css = readFileSync(new URL("../src/styles/site.css", import.meta.url), "utf8");
  const blocks = [css.match(/:root\s*\{([^}]+)\}/)[1], css.match(/:root\[data-theme="dark"\]\s*\{([^}]+)\}/)[1]];
  for (const [index, block] of blocks.entries()) {
    const colors = Object.fromEntries([...block.matchAll(/--([\w-]+):\s*(#[\da-f]+);/gi)].map(match => [match[1], match[2]]));
    for (const [foreground, background] of [
      ...["page", "surface", "soft", "hero"].flatMap(background => ["ink", "muted", "plum"].map(foreground => [foreground, background])),
      ["on-brand", "plum"], ["on-brand", "plum-dark"]
    ]) {
      const values = [luminance(colors[foreground]), luminance(colors[background])].sort((a, b) => b - a);
      const ratio = (values[0] + 0.05) / (values[1] + 0.05);
      assert(ratio >= 4.5, `${index === 0 ? "light" : "dark"}: ${foreground}/${background} = ${ratio.toFixed(2)}`);
    }
  }
});
