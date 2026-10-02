import assert from "node:assert/strict";
import test from "node:test";
import { localeFromPath, localizedPath } from "../src/content/locale.ts";
import { getProjects } from "../src/content/projects.ts";
import { getEngineering } from "../src/content/site.ts";
import { getResumes } from "../src/content/resumes.ts";
import { messages } from "../src/content/messages.ts";

test("troca de idioma preserva rota, consulta e âncora", () => {
  assert.equal(localizedPath("/work/smash-or-pass?tech=React#engineering", "en"), "/en/work/smash-or-pass?tech=React#engineering");
  assert.equal(localizedPath("/en/search?q=React&tipo=project", "pt"), "/search?q=React&tipo=project");
  assert.equal(localizedPath("/en?q=React", "pt"), "/?q=React");
  assert.equal(localizedPath("/?q=React", "en"), "/en?q=React");
  assert.equal(localizedPath("/en", "en"), "/en");
  assert.equal(localizedPath("/engineering", "pt"), "/engineering");
  assert.equal(localizedPath("https://github.com/example", "en"), "https://github.com/example");
  assert.equal(localizedPath("//example.org", "en"), "//example.org");
});
test("idioma depende apenas do segmento en completo", () => {
  assert.equal(localeFromPath("/en/about"), "en");
  assert.equal(localeFromPath("/engineering"), "pt");
  assert.equal(localeFromPath("/english"), "pt");
  assert.equal(localeFromPath("/en?test=1"), "en");
});
test("catálogos têm os mesmos identificadores e traduções completas", () => {
  for (const getContent of [getProjects, getEngineering]) {
    const pt = getContent("pt"); const en = getContent("en");
    assert.deepEqual(pt.map(item => item.slug), en.map(item => item.slug));
    for (let i = 0; i < pt.length; i++) assert.notEqual(pt[i].summary, en[i].summary);
  }
  function shape(value) {
    if (Array.isArray(value)) return value.map(shape);
    if (typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, shape(entry)]));
    assert.equal(typeof value, "string");
    assert(value.trim().length > 0);
    return "string";
  }
  assert.deepEqual(shape(messages.pt), shape(messages.en));
});
test("catálogo mantém exatamente os três PDFs provisórios solicitados", () => {
  const resumes = getResumes();
  assert.deepEqual(resumes.map(item => item.id), ["devops", "full-stack", "software-engineer"]);
  assert(resumes.every(item => item.status === "placeholder" && /^\/resumes\/.+\.pdf$/.test(item.href)));
  assert.deepEqual(resumes.map(item => item.href), getResumes("en").map(item => item.href));
});
