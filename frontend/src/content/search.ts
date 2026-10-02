import type { Locale } from "./locale.ts";
import { localizedPath } from "./locale.ts";
import { messages } from "./messages.ts";
import { profile } from "./profile.ts";
import { getProjects } from "./projects.ts";
import { recommendations } from "./recommendations.ts";
import { getResumes } from "./resumes.ts";
import { getEngineering, site } from "./site.ts";

export type SearchKind = "project" | "engineering" | "career";
export type SearchEntry = {
	title: string;
	summary: string;
	href: string;
	kind: SearchKind;
	tags: string[];
	text: string;
};

export function getSearchEntries(locale: Locale = "pt"): SearchEntry[] {
	const c = messages[locale];
	const biography = profile[locale];
	return [
		...getProjects(locale).map((project) => ({
			title: project.title,
			summary: project.summary,
			href: localizedPath(`/work/${project.slug}`, locale),
			kind: "project" as const,
			tags: project.tags,
			text: [
				project.problem,
				project.solution,
				...project.engineering,
				project.result,
				project.team,
				project.sourceNote,
			]
				.filter(Boolean)
				.join(" "),
		})),
		...getEngineering(locale).map((doc) => ({
			title: doc.title,
			summary: doc.summary,
			href: localizedPath(`/engineering/${doc.slug}`, locale),
			kind: "engineering" as const,
			tags: doc.tags,
			text: [doc.context, doc.choice, doc.consequences].join(" "),
		})),
		...getResumes(locale).map((resume) => ({
			title: resume.title,
			summary: resume.summary,
			href: localizedPath(`/resume#${resume.id}`, locale),
			kind: "career" as const,
			tags: resume.focus,
			text: `${c.nav.resume} ${resume.summary} ${c.resume.pending}`,
		})),
		{
			title: `${c.nav.about} · ${site.name}`,
			summary: biography.intro,
			href: localizedPath("/about", locale),
			kind: "career",
			tags: [c.nav.about, c.nav.contact],
			text: [
				site.fullName,
				c.common.role,
				biography.story,
				biography.story2,
				biography.education,
				biography.interestsText,
				...biography.journey.flatMap((item) => [
					item.organization,
					item.role,
					item.period,
					item.text,
				]),
				...biography.collaboration.flatMap((item) => [item.title, item.text]),
				...c.about.focus.flatMap((item) => [item.title, item.text]),
			].join(" "),
		},
		...recommendations.map((item) => ({
			title: `${c.recommendations.label} · ${item.name}`,
			summary: item.excerpt[locale],
			href: localizedPath(`/about#comment-${item.id}`, locale),
			kind: "career" as const,
			tags: [c.recommendations.label, item.name],
			text: [item.quote[locale], item.role[locale], item.context[locale]].join(
				" ",
			),
		})),
	];
}

export function normalizeSearch(value: string) {
	return value
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.trim();
}
export function searchContent(
	query: string,
	kind?: SearchKind,
	locale: Locale = "pt",
) {
	const words = normalizeSearch(query).split(/\s+/).filter(Boolean);
	if (!words.length) return [];
	return getSearchEntries(locale).filter((entry) => {
		if (kind && entry.kind !== kind) return false;
		const text = normalizeSearch(
			[entry.title, entry.summary, entry.text, ...entry.tags].join(" "),
		);
		return words.every((word) => text.includes(word));
	});
}
