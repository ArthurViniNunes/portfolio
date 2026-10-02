import { Hero } from "../components/hero";
import { Recommendations } from "../components/recommendations";
import { TrustSection } from "../components/trust";
import { imageUrl, ProjectCard } from "../components/ui";
import { getProjects } from "../content/projects";
import { site } from "../content/site";
import { Link, pageMeta, useCopy, useLocale } from "../i18n";
export const meta = (args: Parameters<typeof pageMeta>[1]) =>
	pageMeta("home", args);
export default function Home() {
	const c = useCopy();
	const projects = getProjects(useLocale());
	return (
		<>
			<Hero>
				<div className="shell hero-grid">
					<div className="hero-copy">
						<p className="hero-introduction">
							{site.name} / {c.common.role}
						</p>
						<h1 id="hero-title">{c.home.title}</h1>
						<p className="lead">{c.home.description}</p>
						<div className="actions">
							<Link className="button primary" to="/work">
								{c.home.work}
							</Link>
							<Link className="button quiet" to="/resume">
								{c.home.resume}
							</Link>
						</div>
					</div>
					<div className="profile-panel">
						<img
							src={imageUrl("foto-perfil.webp")}
							alt={c.common.portrait}
							width="339"
							height="346"
							fetchPriority="high"
						/>
						<div className="profile-caption">
							<div>
								<strong>{site.name}</strong>
								<span>{c.common.role}</span>
							</div>
							<Link to="/about">{c.nav.about}</Link>
						</div>
					</div>
				</div>
			</Hero>
			<section
				className="shell section selected-section"
				aria-labelledby="work-title"
			>
				<div className="section-head">
					<div>
						<p className="eyebrow">{c.home.selected}</p>
						<h2 id="work-title">{c.home.workTitle}</h2>
					</div>
					<Link className="text-link" to="/work">
						{c.common.allProjects}
					</Link>
				</div>
				<ProjectCard project={projects[0]} featured />
				<div className="project-grid">
					{projects.slice(1, 3).map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
				</div>
			</section>
			<TrustSection />
			<Recommendations />
			<section
				className="shell section module-section"
				aria-labelledby="explore-title"
			>
				<div className="section-head">
					<h2 id="explore-title">{c.home.explore}</h2>
				</div>
				<div className="module-list">
					{(["engineering", "learning", "about", "resume"] as const).map(
						(key) => (
							<Link to={`/${key}`} key={key}>
								<strong>{c.nav[key]}</strong>
								<span>
									{key === "resume" ? c.home.resumeDescription : c.home[key]}
								</span>
								<b aria-hidden="true">↗</b>
							</Link>
						),
					)}
				</div>
			</section>
			<section className="contact-band">
				<div className="shell contact-band-inner">
					<h2>{c.home.contact}</h2>
					<Link className="button primary" to="/contact">
						{c.common.talk}
					</Link>
				</div>
			</section>
		</>
	);
}
