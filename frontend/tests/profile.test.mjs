import assert from "node:assert/strict";
import test from "node:test";
import { recommendations } from "../src/content/recommendations.ts";
import { searchContent } from "../src/content/search.ts";

test("depoimentos usam excertos literais, fonte individual e data válida nos dois idiomas", () => {
  assert.equal(new Set(recommendations.map(item => item.id)).size, recommendations.length);
  for (const item of recommendations) {
    assert.equal(new URL(item.profileUrl).hostname, "www.linkedin.com");
    assert(item.profileUrl.includes("/in/"));
    assert.match(item.avatar, /\.(?:jpg|jpeg|png|webp)$/i);
    assert(!Number.isNaN(Date.parse(item.date)));
    for (const locale of ["pt", "en"]) {
      assert(item.quote[locale].includes(item.excerpt[locale]), `Excerto alterado: ${item.id}/${locale}`);
      assert(searchContent(item.name, "career", locale).some(entry => entry.href === `${locale === "en" ? "/en" : ""}/about#comment-${item.id}`));
    }
  }
});

test("biografia fornecida integra a busca sem perder o idioma da rota", () => {
  for (const locale of ["pt", "en"]) {
    for (const term of ["Tatame", "PC4", "TEVOS"]) {
      assert(searchContent(term, "career", locale).some(entry => entry.href === `${locale === "en" ? "/en" : ""}/about`));
    }
  }
});
