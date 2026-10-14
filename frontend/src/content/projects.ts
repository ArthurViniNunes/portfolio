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
			"Valores monetários são persistidos em centavos inteiros e convertidos em um ponto central. A escolha evita arredondamentos de ponto flutuante e mantém filtros e totais na mesma precisão, com o custo de converter os números na fronteira da API.",
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
			"Fontes: README e docs/architecture.md do repositório, revistos em 14/10/2026. Imagem histórica do portfólio anterior, ainda não comparada com a interface atual.",
		status: "documentado",
	},
	{
		slug: "kanban-realtime",
		title: "Kanban Realtime",
		kind: "Gestão colaborativa de tarefas",
		summary:
			"Boards, colunas e cards em uma aplicação Full Stack com atualização entre participantes do mesmo board.",
		problem:
			"Organizar trabalho em boards compartilhados, com acesso autorizado, ordem consistente dos cards e atualização para participantes conectados.",
		solution:
			"O projeto reúne cadastro e login, boards com membros e papéis, colunas e cards arrastáveis. A página do board recebe eventos via Socket.IO e sincroniza o estado após a conexão.",
		engineering: [
			"A API verifica a participação no board antes de permitir acesso. Papéis de proprietário, administrador e membro delimitam a gestão de participantes; isso impede que conhecer o identificador de um board conceda acesso.",
			"A movimentação de cards ocorre em uma transação: a API valida origem, destino e posição, reindexa as colunas e só depois emite o evento. Assim, outros clientes recebem a mudança após a persistência, sem aceitar movimentos entre boards.",
			"O frontend usa Socket.IO para entrar na sala do board, recuperar um snapshot ao conectar e receber alterações de cards, colunas, membros e presença. O snapshot recompõe o estado quando uma conexão é retomada.",
		],
		result:
			"O código inclui colaboração em tempo real no board e testes de acesso, membros e movimentação de cards. Não há métrica pública de uso nem validação de uma implantação hospedada.",
		image: "kanban-realtime.webp",
		imageAlt: "Board do Kanban Realtime em uma captura da versão anterior",
		tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Autenticação"],
		repository: "https://github.com/ArthurViniNunes/kanban-realtime",
		sourceNote:
			"Fontes: README e código de BoardPage, Socket.IO, acesso e movimentação de cards, revistos em 14/10/2026. Imagem histórica ainda não comparada com a interface atual.",
		status: "documentado",
	},
	{
		slug: "plateia-ingressos",
		title: "Plateia Ingressos",
		kind: "Eventos e ingressos",
		summary:
			"Plataforma de eventos e ingressos para um desafio técnico, da escolha de assentos à validação na portaria.",
		problem:
			"Permitir que organizadores publiquem eventos e que clientes reservem lugares sem dupla ocupação, concluam uma compra simulada e apresentem um ingresso verificável na entrada.",
		solution:
			"A aplicação React atende clientes, organizadores e portaria. Uma API em Node.js e PostgreSQL integra o catálogo da Ticketmaster, mantém reservas temporárias, simula pagamentos e emite ingressos com QR Code para validação manual ou por câmera.",
		engineering: [
			"Reservas bloqueiam até quatro assentos por dez minutos, com o PostgreSQL como fonte de disponibilidade. O prazo libera compras abandonadas, enquanto a transação e o bloqueio dos lugares impedem que reservas concorrentes ocupem o mesmo assento.",
			"O pagamento é simulado, sem transação financeira real. Após aprovação, a API emite um ingresso por assento; recusa ou expiração devolve os lugares ao catálogo. Essa escolha entrega o fluxo exigido pelo desafio sem integrar um provedor financeiro.",
			"O QR Code aponta para um ingresso compartilhável com código opaco. A portaria consulta o estado no servidor para rejeitar reutilização e ingressos de eventos cancelados.",
		],
		result:
			"MVP com repositório, ADRs, testes e demonstração web publicados. Não há pagamento real nem métricas públicas de adoção; a captura exibida é histórica.",
		image: "plateia.webp",
		imageAlt:
			"Interface de seleção de assentos do Plateia em uma captura histórica",
		tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Ingressos"],
		repository: "https://github.com/ArthurViniNunes/plateia",
		demo: "https://plateia-ingressos.vercel.app/",
		sourceNote:
			"Fontes: README, ADRs e testes do repositório Plateia, revistos em 14/10/2026; demonstração pública acessível nessa data. Captura do portfólio anterior, ainda não comparada com a interface atual.",
		status: "documentado",
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
			"Monetary values are stored as integer cents and converted at one boundary. This avoids floating-point rounding and keeps filters and totals at the same precision, at the cost of converting values at the API boundary.",
			"Rules such as preventing income entries for minors are enforced by the API; the interface also validates input.",
			"The repository includes back-end tests and a CI routine for builds, tests and lint.",
		],
		result:
			"The repository documents workflows, business rules and automated checks. No public usage or impact metrics are available.",
		imageAlt: "Home Expense Control dashboard from a previous version",
		tags: ["React", "TypeScript", ".NET", "SQLite", "Testing"],
		sourceNote:
			"Sources: repository README and docs/architecture.md, reviewed on October 14, 2026. Historical image from the previous portfolio, not yet compared with the current interface.",
	},
	{
		...baseProject("kanban-realtime"),
		kind: "Collaborative task management",
		summary:
			"Boards, columns and cards in a Full Stack application that updates across participants in the same board.",
		problem:
			"Organize work in shared boards with authorized access, consistent card ordering and updates for connected participants.",
		solution:
			"The project includes registration, login, boards with members and roles, columns and draggable cards. The board page receives Socket.IO events and synchronizes state after connecting.",
		engineering: [
			"The API checks board membership before granting access. Owner, admin and member roles govern member management, so knowing a board ID does not grant access.",
			"Card movement runs in a transaction: the API validates source, destination and position, reindexes columns and only then emits an event. Other clients receive the change after persistence, while cross-board moves are rejected.",
			"The frontend uses Socket.IO to join a board room, fetch a snapshot on connection and receive card, column, member and presence updates. The snapshot restores state when a connection resumes.",
		],
		result:
			"The code includes real-time board collaboration and tests for access, members and card movement. No public usage metrics or hosted deployment validation are available.",
		imageAlt: "Kanban Realtime board from a previous version",
		tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Authentication"],
		sourceNote:
			"Sources: repository README and BoardPage, Socket.IO, access and card movement code, reviewed on October 14, 2026. Historical image not yet compared with the current interface.",
	},
	{
		...baseProject("plateia-ingressos"),
		kind: "Events and tickets",
		summary:
			"An events and tickets platform built for a technical challenge, from seat selection to gate validation.",
		problem:
			"Let organizers publish events and customers reserve seats without double booking, complete a simulated purchase and present a verifiable ticket at the gate.",
		solution:
			"The React application serves customers, organizers and gate staff. A Node.js and PostgreSQL API integrates the Ticketmaster catalog, holds temporary reservations, simulates payments and issues QR-code tickets for manual or camera-based validation.",
		engineering: [
			"Reservations hold up to four seats for ten minutes, with PostgreSQL as the source of availability. The deadline frees abandoned purchases, while transactions and seat locks prevent concurrent reservations from taking the same seat.",
			"Payment is simulated, with no real financial transaction. On approval, the API issues one ticket per seat; rejection or expiry returns seats to the catalog. This meets the challenge's flow without integrating a payment provider.",
			"The QR code points to a shareable ticket with an opaque code. Gate validation checks server state to reject reuse and tickets for canceled events.",
		],
		result:
			"An MVP with public repository, ADRs, tests and web demo. There are no real payments or public adoption metrics; the displayed screenshot is historical.",
		imageAlt: "Historical screenshot of Plateia's seat selection interface",
		tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tickets"],
		sourceNote:
			"Sources: Plateia repository README, ADRs and tests, reviewed on October 14, 2026; the public demo was accessible that day. Historical screenshot not yet compared with the current interface.",
	},
];

export function getProjects(locale: Locale = "pt") {
	return locale === "en" ? english : projects;
}

export function getProject(slug: string | undefined, locale: Locale = "pt") {
	return getProjects(locale).find((project) => project.slug === slug);
}
