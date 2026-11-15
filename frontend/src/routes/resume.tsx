import { PageIntro } from "../components/ui";
import { getResumes } from "../content/resumes";
import { Link, pageMeta, useCopy, useLocale } from "../i18n";
export const meta = (args: Parameters<typeof pageMeta>[1]) =>
	pageMeta("resume", args);
export default function Resume() {
	const c = useCopy();
	const locale = useLocale();
	const resumes = getResumes(locale);
	return (
		<div className="shell page-wrap resume-page">
			<PageIntro
				eyebrow={c.nav.resume}
				title={c.resume.title}
				description={c.resume.description}
			/>
			<div className="resume-catalog">
				{resumes.map((resume) => {
					const isAvailable = resume.status === "available";
					const action = (
						<>
							{c.resume.download}
							<span aria-hidden="true">↗</span>
						</>
					);
					return (
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
							{isAvailable ? (
								<a
									className="button quiet"
									href={resume.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									{action}
								</a>
							) : (
								<button
									className="button quiet"
									type="button"
									disabled
									aria-describedby={`${resume.id}-status`}
								>
									{action}
								</button>
							)}
							{!isAvailable && (
								<p className="file-status" id={`${resume.id}-status`}>
									{c.resume.pending}
								</p>
							)}
						</article>
					);
				})}
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
