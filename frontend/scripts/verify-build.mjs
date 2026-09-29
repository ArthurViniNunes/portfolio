import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve("build/client");
const routes = new Map([
	["index.html", "Produtos web, da interface à arquitetura."],
	["work/index.html", "Trabalhos com decisões à vista."],
	["work/home-expense-control/index.html", "Home Expense Control"],
	["work/kanban-realtime/index.html", "Kanban Realtime"],
	["work/plateia-ingressos/index.html", "Plateia Ingressos"],
	["engineering/index.html", "Decisões que sustentam o produto."],
	[
		"engineering/static-generation/index.html",
		"Como este portfólio gera páginas estáticas",
	],
	["learning/index.html", "Nenhum estudo publicado ainda"],
	["about/index.html", "Trajetória profissional"],
	["resume/index.html", "Experiência e formação"],
	["contact/index.html", "Vamos conversar."],
	["search/index.html", "O que você procura?"],
	["404.html", "Esta página não foi encontrada."],
]);

for (const [relative, expected] of routes) {
	const path = resolve(root, relative);
	if (!path.startsWith(root) || !existsSync(path))
		throw new Error(`Rota não gerada: ${relative}`);
	const html = readFileSync(path, "utf8");
	for (const [label, condition] of [
		["idioma", html.includes('<html lang="pt-BR"')],
		["conteúdo principal", html.includes('<main id="main"')],
		["título", /<title>[^<]+<\/title>/.test(html)],
		["descrição", /<meta name="description" content="[^"]+"/.test(html)],
		["conteúdo esperado", html.includes(expected)],
	]) {
		if (!condition) throw new Error(`${relative}: falta ${label}`);
	}
}

for (const asset of [
	"images/foto-perfil.webp",
	"images/home-expense.webp",
	"images/kanban-realtime.webp",
	"images/plateia.webp",
	"favicon.ico",
]) {
	if (!existsSync(resolve(root, asset)))
		throw new Error(`Asset ausente: ${asset}`);
}

console.log(
	`${routes.size} páginas públicas com HTML útil e assets verificados.`,
);
