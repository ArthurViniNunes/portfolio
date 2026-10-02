import { mkdirSync, writeFileSync } from "node:fs";
import { brand } from "../src/content/brand.ts";

mkdirSync("public/brand", { recursive: true });
for (const [name, color, bridge] of [
	["symbol", "#733C55", "#733C55"],
	["symbol-dark", "#E9A9C8", "#E7BB55"],
	["symbol-mono", "#29232A", "#29232A"],
]) {
	writeFileSync(
		`public/brand/${name}.svg`,
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${brand.viewBox}" fill="none"><title>Arthur Nunes</title><g stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><path d="${brand.stroke}" stroke="${color}"/><path d="${brand.bridge}" stroke="${bridge}"/></g></svg>\n`,
	);
}
writeFileSync(
	"public/favicon.svg",
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><title>Arthur Nunes</title><rect width="96" height="96" rx="23" fill="#733C55"/><g transform="translate(3 12) scale(.93)" fill="none" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="${brand.stroke}" stroke="#FAF7F2"/><path d="${brand.bridge}" stroke="#E7BB55"/></g></svg>\n`,
);
console.log("Símbolos da marca e favicon gerados a partir da mesma geometria.");
