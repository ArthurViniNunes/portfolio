import { Link } from "react-router";
import { PageIntro } from "../components/ui";
import { projects } from "../content/projects";
import { site } from "../content/site";

export function meta() {
	return [
		{ title: "Currículo — Arthur Nunes" },
		{
			name: "description",
			content: "Resumo profissional, projetos e contato de Arthur Nunes.",
		},
	];
}

export default function Resume() {
	return (
		<div className="shell page-wrap resume-page">
			<PageIntro
				eyebrow="Currículo"
				title={site.fullName}
				description="Resumo profissional baseado nos projetos públicos disponíveis nesta versão."
			/>
			<div className="resume-contact">
				<span>{site.role}</span>
				<a href={`mailto:${site.email}`}>{site.email}</a>
				<a href={site.linkedin} target="_blank" rel="noopener noreferrer">
					LinkedIn <span className="sr-only">(abre em nova aba)</span>
				</a>
			</div>
			<section>
				<h2>Projetos com documentação pública</h2>
				<div className="index-list">
					{projects
						.filter((project) => project.repository)
						.map((project) => (
							<article key={project.slug}>
								<div>
									<h3>
										<Link to={`/work/${project.slug}`}>{project.title}</Link>
									</h3>
									<p>{project.summary}</p>
									<ul className="tag-list" aria-label="Tecnologias do projeto">
										{project.tags.slice(0, 4).map((tag) => (
											<li key={tag}>{tag}</li>
										))}
									</ul>
								</div>
								<Link className="text-link" to={`/work/${project.slug}`}>
									Ver projeto ↗
								</Link>
							</article>
						))}
				</div>
			</section>
			<section className="resume-note">
				<h2>Experiência e formação</h2>
				<p>
					O histórico profissional, a formação e um PDF atualizado ainda não
					foram fornecidos. Esta página não apresenta datas, cargos ou download
					sem confirmação.
				</p>
				<Link className="text-link" to="/contact">
					Entrar em contato ↗
				</Link>
			</section>
		</div>
	);
}
