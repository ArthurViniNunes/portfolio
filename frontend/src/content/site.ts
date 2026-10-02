import type { Locale } from "./locale.ts";

export const site = {
	name: "Arthur Nunes",
	fullName: "Arthur Vinicius Carneiro Nunes",
	email: "arthurvininunes@gmail.com",
	github: "https://github.com/arthurvininunes",
	linkedin: "https://www.linkedin.com/in/arthurvininunes/",
};

export type EngineeringDocument = {
	slug: string;
	title: string;
	summary: string;
	tags: string[];
	context: string;
	choice: string;
	consequences: string;
	adr: string;
};

const pt: EngineeringDocument[] = [
	{
		slug: "static-generation",
		title: "Como este portfólio gera páginas estáticas",
		summary: "Rotas React, HTML no build e hospedagem sem servidor Node.js.",
		tags: ["React", "Arquitetura", "Renderização", "ADR"],
		context:
			"Projetos e documentos precisam ser legíveis e compartilháveis antes da hidratação. Uma aplicação exclusivamente renderizada no navegador não atende a esse objetivo.",
		choice:
			"React Router em modo framework pré-renderiza as rotas públicas. Node.js executa as ferramentas; a hospedagem entrega arquivos estáticos. O catálogo de conteúdo também alimenta o índice de busca local.",
		consequences:
			"Mudanças editoriais exigem um novo build. Cada idioma tem seu próprio HTML. O catálogo fornece os slugs usados para gerar páginas de projetos e documentos, evitando manter duas listas independentes.",
		adr: "ADR-002-static-react-router-and-hosting.md",
	},
	{
		slug: "languages",
		title: "Duas línguas, páginas completas",
		summary:
			"Por que português e inglês têm URLs próprias e conteúdo no HTML inicial.",
		tags: ["React", "i18n", "SEO", "ADR"],
		context:
			"O portfólio precisa funcionar em português e inglês sem depender de trocar os textos somente após carregar JavaScript.",
		choice:
			"Português mantém as URLs existentes e inglês usa /en. A URL define o idioma. Catálogos tipados fornecem os textos, e o botão mantém a página, a consulta e a âncora durante a troca.",
		consequences:
			"O build gera as duas versões. Novos conteúdos precisam de tradução, e links internos preservam o idioma. Não há redirecionamento automático que altere um endereço compartilhado.",
		adr: "ADR-004-bilingual-static-routes.md",
	},
	{
		slug: "themes-and-motion",
		title: "Preferências visuais com limites claros",
		summary:
			"Tema persistido e movimento que respeita o controle de quem visita.",
		tags: ["CSS", "Acessibilidade", "Frontend", "ADR"],
		context:
			"Uma abertura expressiva e o modo escuro precisam conviver com leitura confortável, teclado e preferência por movimento reduzido.",
		choice:
			"Tokens CSS controlam as duas paletas. Tema e movimento são aplicados antes da hidratação e persistidos localmente. SVG e CSS animam a marca na Home; um controle global pausa os efeitos e a preferência do sistema por movimento reduzido prevalece.",
		consequences:
			"O efeito para fora da tela, com a aba oculta ou com movimento reduzido. Falhas de armazenamento não bloqueiam o tema. Nenhum conteúdo depende da animação para ser compreendido.",
		adr: "ADR-010-brand-and-global-motion.md",
	},
];
const en: EngineeringDocument[] = [
	{
		...pt[0],
		title: "How this portfolio generates static pages",
		summary:
			"React routes, build-time HTML and hosting without a Node.js server.",
		tags: ["React", "Architecture", "Rendering", "ADR"],
		context:
			"Projects and documents need to be readable and shareable before hydration. An application rendered exclusively in the browser does not meet that goal.",
		choice:
			"React Router framework mode pre-renders public routes. Node.js runs the tools; hosting serves static files. The content catalog also supplies a local search index.",
		consequences:
			"Editorial changes require a new build. Each language has its own HTML. The catalog supplies slugs for project and document pages, avoiding two independently maintained lists.",
	},
	{
		...pt[1],
		title: "Two languages, complete pages",
		summary:
			"Why Portuguese and English have separate URLs and content in their initial HTML.",
		tags: ["React", "i18n", "SEO", "ADR"],
		context:
			"The portfolio needs to work in Portuguese and English without relying on replacing text only after JavaScript loads.",
		choice:
			"Portuguese keeps existing URLs and English uses /en. The URL determines the language. Typed catalogs provide copy, and the switch preserves the page, query and fragment.",
		consequences:
			"The build generates both versions. New content needs translation, and internal links preserve the language. No automatic redirect changes a shared address.",
	},
	{
		...pt[2],
		title: "Visual preferences with clear boundaries",
		summary:
			"A persistent theme and motion that stays under the visitor's control.",
		tags: ["CSS", "Accessibility", "Frontend", "ADR"],
		context:
			"An expressive opening and dark mode need to coexist with comfortable reading, keyboard navigation and reduced-motion preferences.",
		choice:
			"CSS tokens control both palettes. Theme and motion preferences are applied before hydration and stored locally. SVG and CSS animate the Home signature; a global control pauses effects and the system's reduced-motion preference takes priority.",
		consequences:
			"The effect stops off-screen, when the tab is hidden or with reduced motion. Storage failures do not block theme changes. No content relies on animation to be understood.",
	},
];
export function getEngineering(locale: Locale = "pt") {
	return locale === "en" ? en : pt;
}
