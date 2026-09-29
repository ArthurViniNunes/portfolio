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
	sourceNote: string;
	status: "documentado" | "em revisão";
};

export const projects: Project[] = [
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

export function getProject(slug: string | undefined) {
	return projects.find((project) => project.slug === slug);
}
