import { useEffect, useRef } from "react";
import type { Project } from "../content/projects";
import { Link, useCopy } from "../i18n";

export function imageUrl(name: string) {
	return `${import.meta.env.BASE_URL}images/${name}`;
}

export function ReadingProgress() {
	const line = useRef<HTMLDivElement>(null);
	useEffect(() => {
		let frame = 0;
		const update = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const range =
					document.documentElement.scrollHeight - window.innerHeight;
				const value = range > 0 ? Math.min(1, window.scrollY / range) : 1;
				if (line.current) line.current.style.transform = `scaleX(${value})`;
			});
		};
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		update();
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, []);
	return <div ref={line} className="reading-progress" aria-hidden="true" />;
}

export function PageIntro({
	eyebrow,
	title,
	description,
}: {
	eyebrow?: string;
	title: string;
	description: string;
}) {
	return (
		<header className="page-intro">
			{eyebrow && <p className="eyebrow">{eyebrow}</p>}
			<h1>{title}</h1>
			<p className="lead">{description}</p>
		</header>
	);
}

export function ProjectCard({
	project,
	featured = false,
}: {
	project: Project;
	featured?: boolean;
}) {
	const c = useCopy();
	return (
		<article className={featured ? "project-card featured" : "project-card"}>
			<Link
				className="project-visual"
				to={`/work/${project.slug}`}
				aria-label={`${c.common.readProject}: ${project.title}`}
				data-motion-enter
			>
				<img
					src={imageUrl(project.image)}
					alt={project.imageAlt}
					loading="lazy"
				/>
			</Link>
			<div className="project-card-copy">
				<p className="eyebrow">{featured ? c.home.featured : project.kind}</p>
				<h3>
					<Link to={`/work/${project.slug}`}>{project.title}</Link>
				</h3>
				<p>{project.summary}</p>
				<ul className="tag-list" aria-label={c.common.projectTopics}>
					{project.tags.slice(0, 4).map((tag) => (
						<li key={tag}>{tag}</li>
					))}
				</ul>
				<div className="project-card-actions">
					<Link
						className={featured ? "button primary" : "text-link"}
						to={`/work/${project.slug}`}
						aria-label={`${c.common.readProject}: ${project.title}`}
					>
						{c.common.readProject} <span aria-hidden="true">↗</span>
					</Link>
					{featured && project.demo && (
						<a
							className="text-link"
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
						>
							{c.project.demo}
							<span className="sr-only"> {c.common.newTab}</span>
						</a>
					)}
				</div>
			</div>
		</article>
	);
}

export function EmptyState({
	title,
	description,
	to,
	action,
}: {
	title: string;
	description: string;
	to: string;
	action: string;
}) {
	return (
		<div className="empty-state">
			<h2>{title}</h2>
			<p>{description}</p>
			<Link className="text-link" to={to}>
				{action}
			</Link>
		</div>
	);
}
