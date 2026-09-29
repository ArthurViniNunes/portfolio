import { projects } from "./projects.ts";
import { engineeringDocuments, site } from "./site.ts";

export type SearchKind = "Projeto" | "Engenharia" | "Carreira";
export type SearchEntry = {
	title: string;
	summary: string;
	href: string;
	kind: SearchKind;
	tags: string[];
	text: string;
};

export const searchEntries: SearchEntry[] = [
	...projects.map((project) => ({
		title: project.title,
		summary: project.summary,
		href: `/work/${project.slug}`,
		kind: "Projeto" as const,
		tags: project.tags,
		text: [
			project.problem,
			project.solution,
			...project.engineering,
			project.result,
		].join(" "),
	})),
	...engineeringDocuments.map((document) => ({
		title: document.title,
		summary: document.summary,
		href: `/engineering/${document.slug}`,
		kind: "Engenharia" as const,
		tags: [...document.tags],
		text: document.body.join(" "),
	})),
	{
		title: `Sobre ${site.name}`,
		summary:
			"Apresentação profissional e caminhos para projetos, documentação e contato.",
		href: "/about",
		kind: "Carreira",
		tags: ["Sobre", "Trajetória", "Contato"],
		text: `${site.fullName} ${site.role}`,
	},
];

export function normalizeSearch(value: string) {
	return value
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLocaleLowerCase("pt-BR")
		.trim();
}

export function searchContent(query: string, kind?: SearchKind) {
	const words = normalizeSearch(query).split(/\s+/).filter(Boolean);
	if (words.length === 0) return [];

	return searchEntries.filter((entry) => {
		if (kind && entry.kind !== kind) return false;
		const haystack = normalizeSearch(
			[entry.title, entry.summary, entry.text, ...entry.tags].join(" "),
		);
		return words.every((word) => haystack.includes(word));
	});
}
