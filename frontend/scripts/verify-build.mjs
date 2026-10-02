import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { localizedPath } from "../src/content/locale.ts";
import { messages } from "../src/content/messages.ts";
import { profile } from "../src/content/profile.ts";
import { getProjects } from "../src/content/projects.ts";
import { recommendations } from "../src/content/recommendations.ts";
import { getResumes } from "../src/content/resumes.ts";
import { getEngineering } from "../src/content/site.ts";

const root = resolve("build/client");
const placeholders = new Set(
	getResumes()
		.filter((item) => item.status === "placeholder")
		.map((item) => item.href),
);
let count = 0;
for (const locale of ["pt", "en"]) {
	const c = messages[locale];
	const pages = new Map([
		["/", c.home.title],
		["/work", c.work.title],
		["/about", c.about.title],
		["/resume", c.resume.title],
		["/contact", c.contact.title],
		["/learning", c.learning.empty],
		["/engineering", c.engineering.title],
		["/search", c.search.label],
		["/404", c.error.title],
		...getProjects(locale).map((item) => [`/work/${item.slug}`, item.title]),
		...getEngineering(locale).map((item) => [
			`/engineering/${item.slug}`,
			item.title,
		]),
	]);
	for (const [path, expected] of pages) {
		const route = localizedPath(path, locale);
		const file = resolve(root, `.${route}/index.html`);
		assert(existsSync(file), `Rota ausente: ${route}`);
		const html = readFileSync(file, "utf8");
		const rendered = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
		assert(
			html.includes(`<html lang="${locale === "pt" ? "pt-BR" : "en"}"`),
			`Idioma incorreto: ${route}`,
		);
		assert(rendered.includes('<main id="main"'), `Sem main: ${route}`);
		assert(/<title>[^<]+<\/title>/.test(html), `Sem título: ${route}`);
		assert(
			/<meta name="description" content="[^"]+"/.test(html),
			`Sem descrição: ${route}`,
		);
		const decoded = rendered
			.replace(/&#x27;|&#39;/g, "'")
			.replace(/&amp;/g, "&");
		assert(
			decoded.includes(expected),
			`Conteúdo não pré-renderizado: ${route}`,
		);
		assert(rendered.includes('href="/favicon.svg"'), `Marca ausente: ${route}`);
		if (path === "/" || path === "/about") {
			for (const item of recommendations) {
				assert(
					decoded.includes(item.quote[locale]),
					`Depoimento não pré-renderizado: ${route}/${item.id}`,
				);
				assert(rendered.includes(`id="comment-${item.id}"`));
			}
			if (locale === "en")
				assert(decoded.includes(c.recommendations.translated));
		}
		if (path === "/about") {
			assert(decoded.includes(profile[locale].education));
			for (const item of profile[locale].journey)
				assert(decoded.includes(item.organization));
		}
		assert(
			rendered.includes('hrefLang="en"') || rendered.includes('hreflang="en"'),
			`Sem alternativa de idioma: ${route}`,
		);
		for (const match of rendered.matchAll(/(?:href|src)="([^"]+)"/g)) {
			const url = match[1].replace(/&amp;/g, "&");
			if (!url.startsWith("/") || url.startsWith("//")) continue;
			const pathname = url.split(/[?#]/)[0];
			if (placeholders.has(pathname)) continue;
			const target = resolve(root, `.${pathname}`);
			assert(
				existsSync(target) || existsSync(resolve(target, "index.html")),
				`Link/asset quebrado em ${route}: ${url}`,
			);
		}
		count++;
	}
}
for (const path of ["404.html", "en/404.html"])
	assert(existsSync(resolve(root, path)));
for (const locale of ["pt", "en"]) {
	const route = localizedPath("/resume", locale);
	const html = readFileSync(resolve(root, `.${route}/index.html`), "utf8");
	for (const item of getResumes(locale)) {
		assert(
			html.includes(`href="${item.href}"`),
			`Currículo sem link: ${item.id}`,
		);
		if (item.status === "available")
			assert(
				existsSync(resolve(root, `.${item.href}`)),
				`PDF indisponível: ${item.href}`,
			);
	}
}
console.log(
	`${count} páginas PT/EN: idioma, conteúdo, metadados e links verificados. ${placeholders.size} links de PDF provisórios autorizados.`,
);
