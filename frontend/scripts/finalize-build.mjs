import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const client = resolve("build/client");
const source = resolve(client, "404/index.html");
const target = resolve(client, "404.html");

if (
	!source.startsWith(client) ||
	!target.startsWith(client) ||
	!existsSync(source)
) {
	throw new Error("A página 404 pré-renderizada não foi encontrada.");
}

copyFileSync(source, target);
console.log("Página 404 estática preparada em build/client/404.html.");
