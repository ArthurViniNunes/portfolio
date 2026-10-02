import type { Locale } from "./locale.ts";

export type Project = {
	slug: string;
	title: string;
	kind: string;
	summary: string;
	problem: string;
	solution: string;
	engineering: string[];
	result: string;
	image: string;
	imageAlt: string;
	tags: string[];
	repository?: string;
	demo?: string;
	team?: string;
	imageSource?: "repository";
	sourceNote: string;
	status: "documentado" | "em revisão";
};

export const projects: Project[] = [
	{
		slug: "smash-or-pass",
		title: "Smash or Pass",
		kind: "Descoberta de receitas",
		summary:
			"Descubra receitas com Smash ou Pass, compartilhe suas criações e explore um catálogo com ingredientes, preferências e alérgenos.",
		problem:
			"Tornar a descoberta de receitas mais direta, enquanto publicação, comentários e moderação convivem em uma mesma plataforma.",
		solution:
			"Uma aplicação web permite avaliar receitas, desfazer a última interação e priorizar as ainda não avaliadas. Pessoas autenticadas podem cadastrar receitas e comentar; administradores aprovam conteúdos do catálogo.",
		engineering: [
			"React e TypeScript na interface; API REST com Node.js, Express, Prisma e PostgreSQL. O back-end separa rotas, controllers, serviços e repositórios.",
			"Autenticação JWT e controle de acesso por papéis distinguem pessoas usuárias e administradores. A documentação define estados de moderação para conteúdo pendente, aprovado e rejeitado.",
			"Uploads passam por uma abstração StorageService, com um provider local. Essa separação prepara a troca do armazenamento sem afirmar que já existe integração com nuvem.",
			"O repositório documenta o modelo de dados, regras de negócio, índices e endpoints; Swagger/OpenAPI descreve a API.",
		],
		result:
			"Produto em desenvolvimento, com código, documentação e demonstração em vídeo disponíveis. Selecionado pelo autor como seu projeto mais maduro; não há métricas de adoção publicadas aqui.",
		team: "Projeto acadêmico desenvolvido por Arthur Nunes, João Igor Almeida Gomes, Marcos Antonio Alencar da Rocha Junior e Samyra Vitória Lima de Almeida. O detalhamento das contribuições individuais ainda será acrescentado.",
		image: "smash-or-pass.png",
		imageAlt:
			"Página inicial do Smash or Pass, capturada no repositório do produto",
		imageSource: "repository",
		tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
		repository: "https://github.com/ArthurViniNunes/smash-or-pass/",
		demo: "https://youtu.be/u6gNtyVILso",
		sourceNote:
			"Fontes: README e docs/architecture/conventions.md do repositório, conferidos em 01/10/2026. Captura publicada em docs/home-image.png.",
		status: "documentado",
	},
	{
		slug: "home-expense-control",
		title: "Home Expense Control",
		kind: "Finanças residenciais",
		summary:
			"Pessoas, receitas, despesas e saldos reunidos em uma aplicação para acompanhar os gastos de uma residência.",
		problem:
			"Registrar movimentações de diferentes pessoas e consultar os resultados financeiros sem perder as regras de cada operação.",
		solution:
			"A aplicação permite cadastrar pessoas e transações, filtrar movimentações e consultar totais gerais e individuais. A interface mantém os filtros após cadastro, edição ou exclusão.",
		engineering: [
			"Valores monetários são persistidos em centavos inteiros; as comparações dos filtros seguem a mesma representação.",
			"Regras como o bloqueio de receitas para menores de idade são protegidas pela API; a interface também valida os dados de entrada.",
			"O repositório inclui testes do back-end e uma rotina de CI que verifica build, testes e lint.",
		],
		result:
			"O repositório documenta os fluxos, as regras de negócio e as verificações automatizadas. Não há métrica pública de uso ou impacto.",
		image: "home-expense.webp",
		imageAlt:
			"Painel do Home Expense Control em uma captura da versão anterior",
		tags: ["React", "TypeScript", ".NET", "SQLite", "Testes"],
		repository: "https://github.com/ArthurViniNunes/home-expense-control",
		sourceNote:
			"Descrição conferida no README público do projeto; imagem histórica do portfólio anterior.",
		status: "documentado",
	},
	{
		slug: "kanban-realtime",
		title: "Kanban Realtime",
		kind: "Gestão de tarefas",
		summary:
			"Boards, colunas e cards em uma aplicação Full Stack voltada à organização de tarefas.",
		problem:
			"Organizar trabalho em boards pessoais com acesso autenticado e operações previsíveis sobre colunas e cards.",
		solution:
			"O projeto reúne cadastro e login, boards, colunas e cards. A interface usa componentes reutilizáveis e oferece feedback para operações do usuário.",
		engineering: [
			"O back-end separa controllers, serviços, repositórios e banco de dados.",
			"O README registra testes de autorização, ownership e movimentação de cards.",
			"A integração completa de Socket.IO no front-end e a sincronização em tempo real constam como próximas evoluções, não como funcionalidades concluídas.",
		],
		result:
			"O código e o README permitem verificar a estrutura e os testes. A colaboração em tempo real ainda está planejada.",
		image: "kanban-realtime.webp",
		imageAlt: "Board do Kanban Realtime em uma captura da versão anterior",
		tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Autenticação"],
		repository: "https://github.com/ArthurViniNunes/kanban-realtime",
		sourceNote:
			"Descrição conferida no README público do projeto; imagem histórica do portfólio anterior.",
		status: "documentado",
	},
	{
		slug: "plateia-ingressos",
		title: "Plateia Ingressos",
		kind: "Eventos e ingressos",
		summary:
			"Registro de um projeto de eventos apresentado no portfólio anterior. O conteúdo técnico está em revisão.",
		problem:
			"O portfólio anterior descrevia uma jornada de publicação de eventos, seleção de assentos e validação de ingressos.",
		solution:
			"A captura histórica mostra a interface de seleção de assentos. O alcance atual da implementação ainda precisa ser conferido antes de detalhar o caso.",
		engineering: [],
		result:
			"Sem resultado ou métrica publicados nesta versão. A documentação técnica será incluída após revisão do código e confirmação do escopo.",
		image: "plateia.webp",
		imageAlt:
			"Interface de seleção de assentos do Plateia em uma captura histórica",
		tags: ["Eventos", "Interface", "Em revisão"],
		sourceNote:
			"Registro baseado no portfólio anterior; funcionalidades e links ainda não foram verificados.",
		status: "em revisão",
	},
];

function baseProject(slug: string): Project {
	const project = projects.find((item) => item.slug === slug);
	if (!project) throw new Error(`Unknown project translation: ${slug}`);
	return project;
}

const english: Project[] = [
	{
		...baseProject("smash-or-pass"),
		kind: "Recipe discovery",
		summary:
			"Discover recipes with Smash or Pass, share your creations and explore a catalog of ingredients, preferences and allergens.",
		problem:
			"Make recipe discovery more direct while publishing, comments and moderation share a single platform.",
		solution:
			"A web application lets people rate recipes, undo the latest interaction and prioritize recipes they have not rated. Signed-in users can publish recipes and comments; administrators approve catalog content.",
		engineering: [
			"React and TypeScript power the interface; the REST API uses Node.js, Express, Prisma and PostgreSQL. The back end separates routes, controllers, services and repositories.",
			"JWT authentication and role-based access distinguish users and administrators. The documentation defines pending, approved and rejected moderation states.",
			"Uploads use a StorageService abstraction with a local provider. This prepares for a storage change without claiming that cloud storage is already integrated.",
			"The repository documents the data model, business rules, indexes and endpoints; Swagger/OpenAPI describes the API.",
		],
		result:
			"A product in development with available code, documentation and a video demo. Selected by the author as his most mature project; no adoption metrics are published here.",
		team: "An academic project built by Arthur Nunes, João Igor Almeida Gomes, Marcos Antonio Alencar da Rocha Junior and Samyra Vitória Lima de Almeida. A breakdown of individual contributions will be added later.",
		imageAlt: "Smash or Pass home page, captured in the product repository",
		sourceNote:
			"Sources: repository README and docs/architecture/conventions.md, reviewed on October 1, 2026. Screenshot published in docs/home-image.png.",
	},
	{
		...baseProject("home-expense-control"),
		kind: "Household finances",
		summary:
			"People, income, expenses and balances in an application for tracking household spending.",
		problem:
			"Record transactions for different people and review financial totals while preserving each operation's business rules.",
		solution:
			"The application manages people and transactions, filters entries and shows overall and individual totals. The interface preserves filters after creating, editing or deleting records.",
		engineering: [
			"Monetary values are stored as integer cents; filter comparisons use the same representation.",
			"Rules such as preventing income entries for minors are enforced by the API; the interface also validates input.",
			"The repository includes back-end tests and a CI routine for builds, tests and lint.",
		],
		result:
			"The repository documents workflows, business rules and automated checks. No public usage or impact metrics are available.",
		imageAlt: "Home Expense Control dashboard from a previous version",
		tags: ["React", "TypeScript", ".NET", "SQLite", "Testing"],
		sourceNote:
			"Description checked against the public README; historical image from the previous portfolio.",
	},
	{
		...baseProject("kanban-realtime"),
		kind: "Task management",
		summary:
			"Boards, columns and cards in a Full Stack application for organizing tasks.",
		problem:
			"Organize work in personal boards with authenticated access and predictable operations on columns and cards.",
		solution:
			"The project includes registration, login, boards, columns and cards. Reusable interface components provide feedback for user actions.",
		engineering: [
			"The back end separates controllers, services, repositories and the database.",
			"The README describes authorization, ownership and card movement tests.",
			"Full Socket.IO front-end integration and real-time synchronization are planned improvements, not completed features.",
		],
		result:
			"Code and the README document the structure and tests. Real-time collaboration is still planned.",
		imageAlt: "Kanban Realtime board from a previous version",
		tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Authentication"],
		sourceNote:
			"Description checked against the public README; historical image from the previous portfolio.",
	},
	{
		...baseProject("plateia-ingressos"),
		kind: "Events and tickets",
		summary:
			"An event project featured in the previous portfolio. Its technical content is under review.",
		problem:
			"The previous portfolio described publishing events, selecting seats and validating tickets.",
		solution:
			"The historical screenshot shows a seat selection interface. The current implementation scope needs verification before expanding the case study.",
		engineering: [],
		result:
			"No outcome or metrics published in this version. Technical documentation will follow code review and scope confirmation.",
		imageAlt: "Historical screenshot of Plateia's seat selection interface",
		tags: ["Events", "Interface", "Under review"],
		sourceNote:
			"Based on the previous portfolio; features and links have not yet been verified.",
	},
];

export function getProjects(locale: Locale = "pt") {
	return locale === "en" ? english : projects;
}

export function getProject(slug: string | undefined, locale: Locale = "pt") {
	return getProjects(locale).find((project) => project.slug === slug);
}
