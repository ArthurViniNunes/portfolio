import assert from "node:assert/strict";
import test from "node:test";
import { projects } from "../src/content/projects.ts";
import { searchContent } from "../src/content/search.ts";

test("busca títulos, tags e texto sem depender de acentos ou caixa", () => {
  assert(searchContent("ARQUITETURA").some((entry) => entry.kind === "Engenharia"));
  assert(searchContent("centavos").some((entry) => entry.title === "Home Expense Control"));
  assert(searchContent("autenticacao").some((entry) => entry.title === "Kanban Realtime"));
});

test("consulta vazia e filtro por tipo não fabricam resultados", () => {
  assert.deepEqual(searchContent("  "), []);
  assert(searchContent("React", "Projeto").every((entry) => entry.kind === "Projeto"));
  assert.deepEqual(searchContent("React", "Carreira"), []);
});

test("o conteúdo distingue funcionalidades concluídas de evoluções planejadas", () => {
  const kanban = projects.find((project) => project.slug === "kanban-realtime");
  assert(kanban);
  assert(kanban.engineering.some((item) => item.includes("próximas evoluções")));
  assert(kanban.result.includes("planejada"));
});
