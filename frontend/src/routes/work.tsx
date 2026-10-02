import { useSearchParams } from "react-router";
import { PageIntro, ProjectCard } from "../components/ui";
import { getProjects } from "../content/projects";
import { pageMeta, useCopy, useHydrated, useLocale } from "../i18n";
export const meta = (args: Parameters<typeof pageMeta>[1]) =>
	pageMeta("work", args);
export default function Work() {
	const c = useCopy();
	const projects = getProjects(useLocale());
	const hydrated = useHydrated();
	const [params, setParams] = useSearchParams();
	const skill = hydrated ? (params.get("tech") ?? "") : "";
	const skills = ["React", "TypeScript", "Node.js", ".NET", "PostgreSQL"];
	const visible = !skills.includes(skill)
		? projects
		: projects.filter((project) => project.tags.includes(skill));
	return (
		<div className="shell page-wrap">
			<PageIntro
				eyebrow={c.nav.work}
				title={c.work.title}
				description={c.work.description}
			/>
			<div className="filter-row">
				<label htmlFor="skill-filter">{c.work.filter}</label>
				<select
					id="skill-filter"
					value={skills.includes(skill) ? skill : ""}
					onChange={(event) =>
						setParams(event.target.value ? { tech: event.target.value } : {})
					}
				>
					<option value="">{c.common.all}</option>
					{skills.map((item) => (
						<option key={item}>{item}</option>
					))}
				</select>
				<span aria-live="polite">
					{visible.length}{" "}
					{visible.length === 1 ? c.common.project : c.common.projects}
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
