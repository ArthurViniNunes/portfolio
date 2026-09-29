export const site = {
	name: "Arthur Nunes",
	fullName: "Arthur Vinicius Carneiro Nunes",
	role: "Desenvolvedor Full Stack",
	email: "arthurvininunes@gmail.com",
	github: "https://github.com/arthurvininunes",
	linkedin: "https://www.linkedin.com/in/arthurvininunes/",
};

export const engineeringDocuments = [
	{
		slug: "static-generation",
		title: "Como este portfólio gera páginas estáticas",
		summary:
			"Uma decisão de arquitetura sobre rotas React, HTML no build e hospedagem sem servidor Node.js.",
		tags: ["React", "Arquitetura", "Renderização", "ADR"],
		body: [
			"O portfólio precisa ser legível e compartilhável mesmo antes da hidratação do React. Isso inclui Home, projetos e documentos técnicos.",
			"React Router em modo framework pré-renderiza todas as rotas públicas conhecidas durante o build. Node.js executa as ferramentas; o visitante recebe arquivos estáticos.",
			"A busca usa um índice local derivado do mesmo conteúdo versionado. A consulta é feita no navegador, sem uma API própria para esta versão.",
		],
	},
] as const;
