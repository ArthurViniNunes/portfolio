import { PageIntro } from "../components/ui";
import { getResumes } from "../content/resumes";
import { Link, pageMeta, useCopy, useLocale } from "../i18n";
export const meta = (args: Parameters<typeof pageMeta>[1]) =>
	pageMeta("resume", args);
export default function Resume() {
	const c = useCopy();
	const resumes = getResumes(useLocale());
	return (
		<div className="shell page-wrap resume-page">
			<PageIntro
				eyebrow={c.nav.resume}
				title={c.resume.title}
				description={c.resume.description}
			/>
			<div className="resume-catalog">
				{resumes.map((resume) => (
					<article key={resume.id} id={resume.id} className="resume-card">
						<div className="resume-document" aria-hidden="true">
							<span />
							<span />
							<span />
							<span />
						</div>
						<h2>{resume.title}</h2>
						<p>{resume.summary}</p>
						<ul className="tag-list" aria-label={c.resume.focus}>
							{resume.focus.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
						<a
							className="button quiet"
							href={resume.href}
							aria-describedby={
								resume.status === "placeholder"
									? `${resume.id}-status`
									: undefined
							}
						>
							{c.resume.download}
							<span aria-hidden="true">↗</span>
						</a>
						{resume.status === "placeholder" && (
							<p className="file-status" id={`${resume.id}-status`}>
								{c.resume.pending}
							</p>
						)}
					</article>
				))}
			</div>
			<div className="resume-footnote">
				<p>{c.resume.note}</p>
				<Link className="text-link" to="/contact">
					{c.common.talk}
				</Link>
			</div>
		</div>
	);
}
