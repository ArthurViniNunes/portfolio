import { PageIntro } from "../components/ui";
import { getEngineering } from "../content/site";
import { Link, pageMeta, useCopy, useLocale } from "../i18n";
export const meta = (args: Parameters<typeof pageMeta>[1]) =>
	pageMeta("engineering", args);
export default function Engineering() {
	const c = useCopy();
	const documents = getEngineering(useLocale());
	return (
		<div className="shell page-wrap">
			<PageIntro
				eyebrow={c.nav.engineering}
				title={c.engineering.title}
				description={c.engineering.description}
			/>
			<div className="index-list">
				{documents.map((doc) => (
					<article key={doc.slug}>
						<div>
							<p className="eyebrow">{c.engineering.portfolio}</p>
							<h2>
								<Link to={`/engineering/${doc.slug}`}>{doc.title}</Link>
							</h2>
							<p>{doc.summary}</p>
							<ul className="tag-list" aria-label={c.common.projectTopics}>
								{doc.tags.map((tag) => (
									<li key={tag}>{tag}</li>
								))}
							</ul>
						</div>
						<Link className="text-link" to={`/engineering/${doc.slug}`}>
							{c.engineering.read}
						</Link>
					</article>
				))}
			</div>
		</div>
	);
}
