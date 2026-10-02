import type { Locale } from "./locale.ts";

export type Resume = {
	id: string;
	title: string;
	summary: string;
	focus: string[];
	href: string;
	status: "placeholder" | "available";
};
const pt: Resume[] = [
	{
		id: "devops",
		title: "DevOps",
		summary:
			"Uma versão direcionada a infraestrutura, automação e operação de software.",
		focus: ["Infraestrutura", "Automação", "CI/CD"],
		href: "/resumes/arthur-nunes-devops.pdf",
		status: "placeholder",
	},
	{
		id: "full-stack",
		title: "Desenvolvedor Full Stack",
		summary:
			"Uma versão voltada à construção de produtos, da interface às APIs e aos dados.",
		focus: ["Frontend", "Backend", "Produto"],
		href: "/resumes/arthur-nunes-full-stack.pdf",
		status: "placeholder",
	},
	{
		id: "software-engineer",
		title: "Engenheiro de Software",
		summary:
			"Uma versão com foco em arquitetura, qualidade e evolução de sistemas.",
		focus: ["Arquitetura", "Qualidade", "Sistemas"],
		href: "/resumes/arthur-nunes-software-engineer.pdf",
		status: "placeholder",
	},
];
const en: Resume[] = [
	{
		...pt[0],
		summary:
			"A version focused on infrastructure, automation and software operations.",
		focus: ["Infrastructure", "Automation", "CI/CD"],
	},
	{
		...pt[1],
		title: "Full Stack Developer",
		summary:
			"A version focused on building products, from interfaces to APIs and data.",
		focus: ["Frontend", "Backend", "Product"],
	},
	{
		...pt[2],
		title: "Software Engineer",
		summary:
			"A version focused on architecture, quality and the evolution of systems.",
		focus: ["Architecture", "Quality", "Systems"],
	},
];
export function getResumes(locale: Locale = "pt") {
	return locale === "en" ? en : pt;
}
