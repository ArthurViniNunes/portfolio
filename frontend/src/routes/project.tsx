import { Link, useParams } from "react-router";
import { EmptyState, imageUrl, ReadingProgress } from "../components/ui";
import { getProject, projects } from "../content/projects";

export function meta({ params }: { params: { slug?: string } }) {
	const project = getProject(params.slug);
	return [
		{
			title: project
				? `${project.title} — Arthur Nunes`
				: "Projeto não encontrado — Arthur Nunes",
		},
		{
			name: "description",
			content: project?.summary ?? "Explore os projetos de Arthur Nunes.",
		},
	];
}

export default function ProjectPage() {
	const { slug } = useParams();
	const project = getProject(slug);
	if (!project) {
		return (
			<div className="shell page-wrap">
				<EmptyState
					title="Projeto não encontrado"
					description="Este endereço não corresponde a um projeto publicado."
					to="/work"
					action="Ver projetos"
				/>
			</div>
		);
	}

	const next =
		projects[
			(projects.findIndex((item) => item.slug === project.slug) + 1) %
				projects.length
		];

	return (
		<article className="shell case-page page-wrap">
			<ReadingProgress />
			<nav className="breadcrumbs" aria-label="Caminho">
				<Link to="/work">Projetos</Link>
				<span aria-hidden="true">/</span>
				<span aria-current="page">{project.title}</span>
			</nav>
			<header className="case-intro">
				<p className="eyebrow">
					{project.kind} / {project.status}
				</p>
				<h1>{project.title}</h1>
				<p className="lead">{project.summary}</p>
				<ul className="tag-list" aria-label="Tecnologias e temas">
					{project.tags.map((tag) => (
						<li key={tag}>{tag}</li>
					))}
				</ul>
				{project.repository && (
					<a
						className="button primary"
						href={project.repository}
						target="_blank"
						rel="noopener noreferrer"
					>
						Abrir repositório{" "}
						<span className="sr-only">(abre em nova aba)</span>
					</a>
				)}
			</header>
			<figure className="case-figure">
				<img
					src={imageUrl(project.image)}
					alt={project.imageAlt}
					width="1902"
					height="880"
				/>
				<figcaption>
					Captura do portfólio anterior. A interface pode ter mudado desde
					então.
				</figcaption>
			</figure>
			<div className="reading-layout">
				<nav className="reading-nav" aria-label="Neste projeto">
					<strong>Neste projeto</strong>
					<a href="#overview">Visão geral</a>
					<a href="#problem">Problema</a>
					<a href="#solution">Solução</a>
					{project.engineering.length > 0 && (
						<a href="#engineering">Engenharia</a>
					)}
					<a href="#result">Resultado e fontes</a>
				</nav>
				<div className="prose">
					<section id="overview">
						<h2>Visão geral</h2>
						<p>{project.summary}</p>
					</section>
					<section id="problem">
						<h2>O problema</h2>
						<p>{project.problem}</p>
					</section>
					<section id="solution">
						<h2>A solução</h2>
						<p>{project.solution}</p>
					</section>
					{project.engineering.length > 0 && (
						<section id="engineering">
							<h2>Decisões de engenharia</h2>
							<ul>
								{project.engineering.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</section>
					)}
					<section id="result">
						<h2>Resultado e fontes</h2>
						<p>{project.result}</p>
						<p className="source-note">{project.sourceNote}</p>
						{project.repository && (
							<p>
								<a
									href={project.repository}
									target="_blank"
									rel="noopener noreferrer"
								>
									Conferir código e documentação{" "}
									<span className="sr-only">(abre em nova aba)</span>
								</a>
							</p>
						)}
					</section>
					<div className="case-next">
						<span>Continue explorando</span>
						<Link className="text-link" to={`/work/${next.slug}`}>
							{next.title} ↗
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
}
