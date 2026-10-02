import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const client = resolve("build/client");
for (const prefix of ["", "en/"]) {
	const source = resolve(client, `${prefix}404/index.html`);
	if (!existsSync(source)) throw new Error(`404 não gerada: ${source}`);
	copyFileSync(source, resolve(client, `${prefix}404.html`));
}
console.log("Páginas 404 PT/EN preparadas.");
