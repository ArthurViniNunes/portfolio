import assert from "node:assert/strict";
import test from "node:test";
import { getProjects } from "../src/content/projects.ts";
import { searchContent } from "../src/content/search.ts";

test("busca títulos, tags e texto sem depender de acentos ou caixa", () => {
  assert(searchContent("ARQUITETURA").some(entry => entry.kind === "engineering"));
  assert(searchContent("centavos").some(entry => entry.title === "Home Expense Control"));
  assert(searchContent("autenticacao").some(entry => entry.title === "Kanban Realtime"));
});
test("busca inglesa usa texto traduzido e URLs inglesas", () => {
  const results = searchContent("integer cents", "project", "en");
  assert.equal(results.length, 1);
  assert.equal(results[0].href, "/en/work/home-expense-control");
  assert(searchContent("infrastructure", "career", "en").some(entry => entry.href === "/en/resume#devops"));
  assert.equal(searchContent("centavos", undefined, "en").length, 0);
});
test("consulta vazia, múltiplos termos e filtros", () => {
  assert.deepEqual(searchContent("  "), []);
  assert(searchContent("React", "project").every(entry => entry.kind === "project"));
  assert.deepEqual(searchContent("integer cents", "career", "en"), []);
  assert.deepEqual(searchContent("React palavra-inexistente"), []);
});
test("smash-or-pass abre a vitrine e preserva autoria em equipe", () => {
  for (const locale of ["pt", "en"]) {
    const project = getProjects(locale)[0];
    assert.equal(project.slug, "smash-or-pass");
    assert(project.team.includes("Samyra"));
    assert.equal(project.repository, "https://github.com/ArthurViniNunes/smash-or-pass/");
    assert(searchContent(locale === "pt" ? "receitas" : "recipes", "project", locale).some(entry => entry.title === "Smash or Pass"));
  }
});
test("Kanban e Plateia refletem o escopo verificável dos repositórios", () => {
  const kanban = getProjects().find(project => project.slug === "kanban-realtime");
  assert(kanban.engineering.some(item => item.includes("Socket.IO")));
  assert(kanban.result.includes("colaboração em tempo real"));
  assert(getProjects("en").find(project => project.slug === "kanban-realtime").result.includes("real-time"));
  const plateia = getProjects().find(project => project.slug === "plateia-ingressos");
  assert.equal(plateia.status, "documentado");
  assert.equal(plateia.repository, "https://github.com/ArthurViniNunes/plateia");
  assert(plateia.result.includes("pagamento real"));
});
