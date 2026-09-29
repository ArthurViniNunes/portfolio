import { Link } from "react-router";
import { ReadingProgress } from "../components/ui";
import { engineeringDocuments } from "../content/site";

const document = engineeringDocuments[0];

export function meta() {
	return [
		{ title: `${document.title} — Arthur Nunes` },
		{ name: "description", content: document.summary },
	];
}

export default function EngineeringDocument() {
	return (
		<article className="shell page-wrap document-page">
			<ReadingProgress />
			<nav className="breadcrumbs" aria-label="Caminho">
				<Link to="/engineering">Engenharia</Link>
				<span aria-hidden="true">/</span>
				<span aria-current="page">Geração estática</span>
			</nav>
			<header className="case-intro">
				<p className="eyebrow">Decisão de arquitetura / Este portfólio</p>
				<h1>{document.title}</h1>
				<p className="lead">{document.summary}</p>
			</header>
			<div className="reading-layout">
				<nav className="reading-nav" aria-label="Nesta decisão">
					<strong>Nesta decisão</strong>
					<a href="#context">Contexto</a>
					<a href="#choice">Escolha</a>
					<a href="#tradeoffs">Consequências</a>
					<a href="#evidence">Evidência</a>
				</nav>
				<div className="prose">
					<section id="context">
						<h2>Contexto</h2>
						<p>{document.body[0]}</p>
					</section>
					<section id="choice">
						<h2>Escolha</h2>
						<p>{document.body[1]}</p>
						<p>{document.body[2]}</p>
					</section>
					<section id="tradeoffs">
						<h2>Consequências</h2>
						<p>
							Cada página pública conhecida entra na lista de pré-renderização.
							Ao adicionar um projeto ou estudo, o build precisa incluir sua
							URL. Esse custo explícito evita páginas públicas vazias até a
							hidratação.
						</p>
						<p>
							Sem servidor em execução, a busca é local e o conteúdo depende de
							um novo build para ser atualizado.
						</p>
					</section>
					<section id="evidence">
						<h2>Evidência</h2>
						<p>
							A configuração está em <code>react-router.config.ts</code>; a
							decisão completa está em{" "}
							<code>
								docs/architecture/adr/ADR-002-static-react-router-and-hosting.md
							</code>{" "}
							no repositório do portfólio.
						</p>
						<a
							href="https://github.com/ArthurViniNunes/portfolio"
							target="_blank"
							rel="noopener noreferrer"
						>
							Abrir código-fonte{" "}
							<span className="sr-only">(abre em nova aba)</span>
						</a>
					</section>
					<div className="case-next">
						<span>Próximo passo</span>
						<Link className="text-link" to="/work">
							Explorar projetos ↗
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
}
