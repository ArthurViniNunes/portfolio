import { useParams } from "react-router";
import { EmptyState, imageUrl, ReadingProgress } from "../components/ui";
import { localeFromPath } from "../content/locale";
import { messages } from "../content/messages";
import { getProject, getProjects } from "../content/projects";
import { Link, type pageMeta, useCopy, useLocale } from "../i18n";
export function meta(
	args: Parameters<typeof pageMeta>[1] & { params: { slug?: string } },
) {
	const locale = localeFromPath(args.location.pathname);
	const project = getProject(args.params.slug, locale);
	return project
		? [
				{ title: `${project.title} — Arthur Nunes` },
				{ name: "description", content: project.summary },
			]
		: [
				{ title: `${messages[locale].project.missing} — Arthur Nunes` },
				{ name: "robots", content: "noindex" },
			];
}
export default function ProjectPage() {
	const { slug } = useParams();
	const locale = useLocale();
	const c = useCopy();
	const projects = getProjects(locale);
	const project = getProject(slug, locale);
	if (!project)
		return (
			<div className="shell page-wrap">
				<EmptyState
					title={c.project.missing}
					description={c.project.missingText}
					to="/work"
					action={c.common.allProjects}
				/>
			</div>
		);
	const next =
		projects[
			(projects.findIndex((item) => item.slug === project.slug) + 1) %
				projects.length
		];
	return (
		<article className="shell case-page page-wrap">
			<ReadingProgress />
			<nav className="breadcrumbs" aria-label={c.common.path}>
				<Link to="/work">{c.nav.work}</Link>
				<span aria-hidden="true">/</span>
				<span aria-current="page">{project.title}</span>
			</nav>
			<header className="case-intro">
				<p className="eyebrow">
					{project.kind} /{" "}
					{project.status === "documentado"
						? c.project.documented
						: c.project.review}
				</p>
				<h1>{project.title}</h1>
				<p className="lead">{project.summary}</p>
				<ul className="tag-list" aria-label={c.common.projectTopics}>
					{project.tags.map((tag) => (
						<li key={tag}>{tag}</li>
					))}
				</ul>
				<div className="case-actions">
					{project.repository && (
						<a
							className="button primary"
							href={project.repository}
							target="_blank"
							rel="noopener noreferrer"
						>
							{c.common.source}
							<span className="sr-only">{c.common.newTab}</span>
						</a>
					)}
					{project.demo && (
						<a
							className="button quiet"
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
						>
							{c.project.demo}
							<span className="sr-only">{c.common.newTab}</span>
						</a>
					)}
				</div>
			</header>
			<figure className="case-figure">
				<img src={imageUrl(project.image)} alt={project.imageAlt} />
				<figcaption>
					{project.imageSource === "repository"
						? c.project.repositoryImage
						: c.project.historical}
				</figcaption>
			</figure>
			<div className="reading-layout">
				<nav className="reading-nav" aria-label={c.project.toc}>
					<strong>{c.project.toc}</strong>
					{(["overview", "problem", "solution"] as const).map((key) => (
						<a key={key} href={`#${key}`}>
							{c.project[key]}
						</a>
					))}
					{project.engineering.length > 0 && (
						<a href="#engineering">{c.project.engineering}</a>
					)}
					<a href="#result">{c.project.result}</a>
				</nav>
				<div className="prose">
					<section id="overview">
						<h2>{c.project.overview}</h2>
						<p>{project.summary}</p>
						{project.team && (
							<>
								<h3 className="contribution-heading">{c.project.scope}</h3>
								<p>{project.team}</p>
							</>
						)}
					</section>
					<section id="problem">
						<h2>{c.project.problem}</h2>
						<p>{project.problem}</p>
					</section>
					<section id="solution">
						<h2>{c.project.solution}</h2>
						<p>{project.solution}</p>
					</section>
					{project.engineering.length > 0 && (
						<section id="engineering">
							<h2>{c.project.engineering}</h2>
							<ul>
								{project.engineering.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</section>
					)}
					<section id="result">
						<h2>{c.project.result}</h2>
						<p>{project.result}</p>
						<p className="source-note">{project.sourceNote}</p>
						{project.repository && (
							<p>
								<a
									href={project.repository}
									target="_blank"
									rel="noopener noreferrer"
								>
									{c.project.source}
									<span className="sr-only">{c.common.newTab}</span>
								</a>
							</p>
						)}
					</section>
					<div className="case-next">
						<span>{c.common.next}</span>
						<Link className="text-link" to={`/work/${next.slug}`}>
							{next.title} ↗
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
}
