import { useEffect, useRef } from "react";
import { Link } from "react-router";
import type { Project } from "../content/projects";

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
	return (
		<article className={featured ? "project-card featured" : "project-card"}>
			<Link className="project-visual" to={`/work/${project.slug}`}>
				<img
					src={imageUrl(project.image)}
					alt={project.imageAlt}
					loading="lazy"
				/>
			</Link>
			<div className="project-card-copy">
				<p className="eyebrow">{project.kind}</p>
				<h3>
					<Link to={`/work/${project.slug}`}>{project.title}</Link>
				</h3>
				<p>{project.summary}</p>
				<ul className="tag-list" aria-label="Temas do projeto">
					{project.tags.slice(0, 4).map((tag) => (
						<li key={tag}>{tag}</li>
					))}
				</ul>
				<Link className="text-link" to={`/work/${project.slug}`}>
					Ler projeto <span aria-hidden="true">↗</span>
				</Link>
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
