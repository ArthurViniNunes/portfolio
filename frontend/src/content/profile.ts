import type { Locale } from "./locale.ts";

// Sources: ARTHUR_CONTEXT.md and recommendations supplied by the author, 2026-10-01.
// Publication scope and unresolved evidence: docs/content/fontes-do-perfil.md.
const pt = {
	pageNavigation: "Explore esta página",
	sections: {
		journey: "Trajetória",
		interests: "Interesses",
		comments: "Comentários",
	},
	intro:
		"Sou Arthur Nunes, desenvolvedor Full Stack de Fortaleza e estudante de Ciência da Computação na UFC. Construo aplicações web e gosto de conectar código, pessoas e problemas reais.",
	storyTitle: "Construir software também é construir em equipe.",
	story:
		"Minha experiência passa por uma plataforma educacional na PC4 e por um sistema de telemarketing na TEVOS. Entre interfaces, APIs e bancos de dados, aprendi a olhar para o produto inteiro e a trabalhar com as pessoas que o constroem.",
	story2:
		"No smash-or-pass, assumi a liderança técnica da equipe em uma aplicação para descobrir e compartilhar receitas. Hoje também dedico parte do meu tempo à monitoria de programação e ao Tatame Cidadão. Ensinar e construir em equipe são formas de colocar o que aprendo em prática.",
	education: "Ciência da Computação · UFC · 2023–2027 (em andamento)",
	journeyTitle: "Onde venho construindo essa experiência.",
	journey: [
		{
			organization: "Tatame Cidadão · UFC",
			role: "Agente de tecnologia e inovação",
			period: "Desde abr. 2026",
			start: "2026-04",
			text: "Liderança técnica, levantamento de requisitos e desenvolvimento web em uma equipe multidisciplinar.",
		},
		{
			organization: "PID · UFC",
			role: "Monitor voluntário de programação",
			period: "Desde fev. 2026",
			start: "2026-02",
			text: "Apoio em Fundamentos de Programação, com exercícios, materiais e encontros para ajudar estudantes a desenvolver autonomia.",
		},
		{
			organization: "TEVOS Solutions",
			role: "Desenvolvedor Full Stack",
			period: "Mai. a set. 2025",
			start: "2025-05",
			text: "Sistema de telemarketing Brasilink, com React, Node.js e TypeScript, autenticação, testes, Docker e integração contínua.",
		},
		{
			organization: "PC4 Comunicação e Tecnologia",
			role: "Desenvolvedor Full Stack",
			period: "Fev. 2024 a abr. 2025",
			start: "2024-02",
			text: "Plataforma educacional com Vue, TypeScript e Laravel, trabalhando com APIs, consultas SQL e paginação no servidor.",
		},
	],
	interestsTitle: "Aprender, ensinar e investigar.",
	interestsText:
		"Na monitoria, transformo dúvidas em exercícios e materiais de apoio. Nos estudos, venho aprofundando Java e Spring Boot. Na pesquisa, exploro o diagnóstico de testes instáveis causados por falhas de isolamento, um tema que conecta minha curiosidade por investigação ao cuidado com a qualidade do software.",
	collaborationTitle: "Como isso aparece no trabalho com outras pessoas.",
	collaboration: [
		{
			title: "Escutar, organizar, avançar.",
			text: "No desafio em grupo do PagBank, Rhyan destaca minha escuta ativa, a organização das ideias e o alinhamento da equipe até a apresentação.",
			source: "rhyan-andrade",
		},
		{
			title: "Qualidade que se compartilha.",
			text: "Na disciplina de Desenvolvimento de Software para Web da UFC, Marcos destaca minha dedicação à qualidade, capacidade analítica e disposição para aprender e compartilhar conhecimento.",
			source: "marcos-antonio",
		},
	],
	readRecommendation: "Ler o relato",
	proofTitle: "Conheça o trabalho por mais de um ângulo.",
	proof: [
		{
			title: "Produto e código",
			text: "Um caso com contexto, demonstração e repositório para explorar.",
			to: "/work/smash-or-pass",
			action: "Explorar smash-or-pass",
		},
		{
			title: "Escolhas explicadas",
			text: "As decisões deste portfólio registram contexto, alternativas e consequências.",
			to: "/engineering",
			action: "Ler decisões",
		},
		{
			title: "Experiências compartilhadas",
			text: "Comentários de colegas com nome, data e contexto de colaboração.",
			to: "/about#comments",
			action: "Ver recomendações",
		},
	],
	closing: "Vamos conversar sobre o que podemos construir juntos?",
};
const en: typeof pt = {
	pageNavigation: "Explore this page",
	sections: {
		journey: "Experience",
		interests: "Interests",
		comments: "Testimonials",
	},
	intro:
		"I'm Arthur Nunes, a Full Stack developer from Fortaleza and a Computer Science student at UFC. I build web applications and enjoy connecting code, people and real problems.",
	storyTitle: "Building software also means building as a team.",
	story:
		"My experience spans an education platform at PC4 and a telemarketing system at TEVOS. Working across interfaces, APIs and databases taught me to look at the whole product and collaborate with the people building it.",
	story2:
		"On smash-or-pass, I took the technical lead on a team building an application to discover and share recipes. I also devote time to supporting programming students and contributing to Tatame Cidadão. Teaching and building with others are ways to put what I learn into practice.",
	education: "Computer Science · UFC · 2023–2027 (in progress)",
	journeyTitle: "Where I've been building that experience.",
	journey: [
		{
			organization: "Tatame Cidadão · UFC",
			role: "Technology and innovation contributor",
			period: "Since Apr. 2026",
			start: "2026-04",
			text: "Technical leadership, requirements gathering and web development with a multidisciplinary team.",
		},
		{
			organization: "PID · UFC",
			role: "Volunteer programming teaching assistant",
			period: "Since Feb. 2026",
			start: "2026-02",
			text: "Supporting Programming Fundamentals through exercises, learning materials and sessions that help students become more independent.",
		},
		{
			organization: "TEVOS Solutions",
			role: "Full Stack Developer",
			period: "May–Sep. 2025",
			start: "2025-05",
			text: "The Brasilink telemarketing system, using React, Node.js and TypeScript, with authentication, tests, Docker and continuous integration.",
		},
		{
			organization: "PC4 Comunicação e Tecnologia",
			role: "Full Stack Developer",
			period: "Feb. 2024–Apr. 2025",
			start: "2024-02",
			text: "An education platform built with Vue, TypeScript and Laravel, working on APIs, SQL queries and server-side pagination.",
		},
	],
	interestsTitle: "Learning, teaching and investigating.",
	interestsText:
		"As a teaching assistant, I turn questions into exercises and learning materials. I'm deepening my knowledge of Java and Spring Boot. In my research, I'm exploring how to diagnose flaky tests caused by isolation failures, connecting my curiosity for investigation with a focus on software quality.",
	collaborationTitle: "How this shows up when working with others.",
	collaboration: [
		{
			title: "Listen, organize, move forward.",
			text: "In the PagBank group challenge, Rhyan highlights my active listening, organization of ideas and ability to keep the team aligned through the presentation.",
			source: "rhyan-andrade",
		},
		{
			title: "Quality that is shared.",
			text: "In the Web Software Development course at UFC, Marcos highlights my commitment to quality, analytical skills and willingness to learn and share knowledge.",
			source: "marcos-antonio",
		},
	],
	readRecommendation: "Read the testimonial",
	proofTitle: "Explore the work from more than one angle.",
	proof: [
		{
			title: "Product and code",
			text: "A case study with context, a demo and a repository to explore.",
			to: "/work/smash-or-pass",
			action: "Explore smash-or-pass",
		},
		{
			title: "Explained choices",
			text: "This portfolio's decisions record context, alternatives and consequences.",
			to: "/engineering",
			action: "Read decisions",
		},
		{
			title: "Shared experiences",
			text: "Testimonials from colleagues with names, dates and collaboration context.",
			to: "/about#comments",
			action: "View recommendations",
		},
	],
	closing: "Let's talk about what we could build together.",
};
export const profile: Record<Locale, typeof pt> = { pt, en };
