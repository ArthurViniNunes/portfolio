import type { Locale } from "./locale.ts";

export type Recommendation = {
	id: string;
	name: string;
	initials: string;
	avatar: string;
	profileUrl: string;
	date: string;
	role: Record<Locale, string>;
	context: Record<Locale, string>;
	quote: Record<Locale, string>;
	excerpt: Record<Locale, string>;
	source: "provided-by-author";
};

// Texts supplied verbatim by Arthur on 2026-10-01. Avatar files were supplied locally.
export const recommendations: Recommendation[] = [
	{
		id: "rhyan-andrade",
		name: "Rhyan Dos Anjos Andrade",
		initials: "RA",
		avatar: "rhyan-linkedin-profile.jpg",
		profileUrl: "https://www.linkedin.com/in/rhyan-dos-anjos-andrade/",
		date: "2026-09-29",
		role: {
			pt: "Backend Developer · DevOps · Cloud Computing (AWS)",
			en: "Backend Developer · DevOps · Cloud Computing (AWS)",
		},
		context: {
			pt: "Trabalhou no mesmo time em uma dinâmica do PagBank",
			en: "Worked on the same team during a PagBank group challenge",
		},
		excerpt: {
			pt: "O Arthur é aquele tipo de profissional que eleva o nível do time ao redor.",
			en: "Arthur is the kind of professional who raises the level of the team around him.",
		},
		quote: {
			pt: "O Arthur é aquele tipo de profissional que eleva o nível do time ao redor. Trabalhamos juntos em um desafio intenso na dinâmica do PagBank, onde ele assumiu um papel de liderança essencial: soube ouvir ativamente cada membro, organizou as ideias com agilidade e manteve o grupo motivado e alinhado até a apresentação final. Sua sensibilidade interpessoal aliada ao senso de direção e foco em resultados fazem dele um colega excepcional. Foi um privilégio dividir esse desafio com ele!",
			en: "Arthur is the kind of professional who raises the level of the team around him. We worked together on an intense challenge during a PagBank group activity, where he took on an essential leadership role: he actively listened to each member, organized ideas quickly and kept the group motivated and aligned through to the final presentation. His interpersonal sensitivity, combined with a sense of direction and a focus on results, makes him an exceptional colleague. It was a privilege to share this challenge with him!",
		},
		source: "provided-by-author",
	},
	{
		id: "marcos-antonio",
		name: "Marcos Antônio",
		initials: "MA",
		avatar: "marcus-linkedin-profile.jpg",
		profileUrl: "https://www.linkedin.com/in/marcos-ant%C3%B4nio-67496139b/",
		date: "2026-07-30",
		role: {
			pt: "Desenvolvedor de Software · Bolsista de Inovação Tecnológica na UFC",
			en: "Software Developer · Technological Innovation Scholarship Holder at UFC",
		},
		context: {
			pt: "Trabalhou no mesmo time em Desenvolvimento de Software para Web na UFC",
			en: "Worked on the same team in the Web Software Development course at UFC",
		},
		excerpt: {
			pt: "Também é um excelente colega de equipe: colaborativo, proativo e sempre disposto a aprender e compartilhar conhecimento.",
			en: "He is also an excellent teammate: collaborative, proactive and always willing to learn and share knowledge.",
		},
		quote: {
			pt: "Tive o privilégio de trabalhar com o Arthur na disciplina de Desenvolvimento de Software para Web na UFC, e posso afirmar que ele é um profissional extremamente dedicado e comprometido com a qualidade do que entrega. Demonstrou uma excelente capacidade analítica para resolver problemas, além de escrever códigos limpos, organizados e de fácil manutenção. Também é um excelente colega de equipe: colaborativo, proativo e sempre disposto a aprender e compartilhar conhecimento. Tenho certeza de que será um grande diferencial em qualquer equipe de tecnologia e o recomendo sem hesitação.",
			en: "I had the privilege of working with Arthur in the Web Software Development course at UFC, and I can say that he is an extremely dedicated professional, committed to the quality of what he delivers. He demonstrated excellent analytical problem-solving skills, while writing clean, organized and maintainable code. He is also an excellent teammate: collaborative, proactive and always willing to learn and share knowledge. I am sure he will make a real difference on any technology team, and I recommend him without hesitation.",
		},
		source: "provided-by-author",
	},
];
