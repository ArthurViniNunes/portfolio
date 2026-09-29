import { Link } from "react-router";
import { imageUrl, ProjectCard } from "../components/ui";
import { projects } from "../content/projects";
import { site } from "../content/site";

export function meta() {
	return [
		{ title: "Arthur Nunes — Desenvolvimento Full Stack" },
		{
			name: "description",
			content:
				"Projetos, decisões de engenharia, aprendizado e contato de Arthur Nunes.",
		},
	];
}

export default function Home() {
	return (
		<>
			<section className="hero">
				<div className="hero-backdrop" aria-hidden="true">
					<span className="hero-plane" />
					<span className="hero-ring ring-one" />
					<span className="hero-ring ring-two" />
				</div>
				<div className="shell hero-grid">
					<div className="hero-copy">
						<p className="eyebrow">
							{site.name} / {site.role}
						</p>
						<h1>Produtos web, da interface à arquitetura.</h1>
						<p className="lead">
							Aqui estão projetos, decisões de implementação e caminhos para
							conhecer meu trabalho em diferentes níveis de detalhe.
						</p>
						<div className="actions">
							<Link className="button primary" to="/work">
								Conhecer projetos
							</Link>
							<Link className="button quiet" to="/resume">
								Ver currículo
							</Link>
						</div>
					</div>
					<div className="profile-panel">
						<img
							src={imageUrl("foto-perfil.webp")}
							alt="Retrato de Arthur Nunes"
							width="339"
							height="346"
							fetchPriority="high"
						/>
						<div className="profile-caption">
							<div>
								<strong>{site.name}</strong>
								<span>{site.role}</span>
							</div>
							<Link to="/contact">Contato</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="shell section" aria-labelledby="work-title">
				<div className="section-head">
					<div>
						<p className="eyebrow">Projetos selecionados</p>
						<h2 id="work-title">O trabalho em contexto.</h2>
					</div>
					<Link className="text-link" to="/work">
						Ver todos os projetos
					</Link>
				</div>
				<ProjectCard project={projects[0]} featured />
				<div className="project-grid">
					{projects.slice(1).map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
				</div>
			</section>

			<section
				className="shell section module-section"
				aria-labelledby="explore-title"
			>
				<div className="section-head">
					<div>
						<p className="eyebrow">Outros caminhos</p>
						<h2 id="explore-title">Explore por interesse.</h2>
					</div>
				</div>
				<div className="module-list">
					<Link to="/engineering">
						<strong>Engenharia</strong>
						<span>Decisões e documentação técnica</span>
						<b aria-hidden="true">↗</b>
					</Link>
					<Link to="/learning">
						<strong>Aprendizado</strong>
						<span>Estudos e resolução de problemas</span>
						<b aria-hidden="true">↗</b>
					</Link>
					<Link to="/about">
						<strong>Trajetória</strong>
						<span>Perfil profissional e evolução</span>
						<b aria-hidden="true">↗</b>
					</Link>
					<Link to="/resume">
						<strong>Currículo</strong>
						<span>Resumo para avaliação rápida</span>
						<b aria-hidden="true">↗</b>
					</Link>
				</div>
			</section>

			<section className="contact-band">
				<div className="shell contact-band-inner">
					<div>
						<p className="eyebrow">Contato</p>
						<h2>Vamos conversar sobre o próximo produto.</h2>
					</div>
					<Link className="button primary" to="/contact">
						Entrar em contato
					</Link>
				</div>
			</section>
		</>
	);
}
