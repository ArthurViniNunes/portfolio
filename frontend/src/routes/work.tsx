import { useState } from "react";
import { PageIntro, ProjectCard } from "../components/ui";
import { projects } from "../content/projects";

export function meta() {
	return [
		{ title: "Projetos — Arthur Nunes" },
		{
			name: "description",
			content:
				"Projetos de Arthur Nunes com contexto, decisões e fontes para explorar o código.",
		},
	];
}

const skills = ["Todos", "React", "TypeScript", "Node.js", ".NET"] as const;

export default function Work() {
	const [skill, setSkill] = useState<string>("Todos");
	const visible =
		skill === "Todos"
			? projects
			: projects.filter((project) => project.tags.includes(skill));

	return (
		<div className="shell page-wrap">
			<PageIntro
				eyebrow="Projetos"
				title="Trabalhos com decisões à vista."
				description="Cada projeto apresenta o problema, o que foi construído e o que pode ser conferido nas fontes disponíveis."
			/>
			<div className="filter-row">
				<label htmlFor="skill-filter">Filtrar por tecnologia</label>
				<select
					id="skill-filter"
					value={skill}
					onChange={(event) => setSkill(event.target.value)}
				>
					{skills.map((item) => (
						<option key={item}>{item}</option>
					))}
				</select>
				<span aria-live="polite">
					{visible.length} {visible.length === 1 ? "projeto" : "projetos"}
				</span>
			</div>
			<div className="work-list">
				{visible.map((project) => (
					<ProjectCard key={project.slug} project={project} featured />
				))}
			</div>
		</div>
	);
}
