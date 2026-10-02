import { useParams } from "react-router";
import { ReadingProgress } from "../components/ui";
import { localeFromPath } from "../content/locale";
import { getEngineering } from "../content/site";
import { Link, pageMeta, useCopy, useLocale } from "../i18n";
import NotFound from "./not-found";
export function meta(
	args: Parameters<typeof pageMeta>[1] & { params: { doc?: string } },
) {
	const doc = getEngineering(localeFromPath(args.location.pathname)).find(
		(item) => item.slug === args.params.doc,
	);
	return doc
		? [
				{ title: `${doc.title} — Arthur Nunes` },
				{ name: "description", content: doc.summary },
			]
		: [...pageMeta("notFound", args), { name: "robots", content: "noindex" }];
}
export default function EngineeringDocument() {
	const c = useCopy();
	const params = useParams();
	const doc = getEngineering(useLocale()).find(
		(item) => item.slug === params.doc,
	);
	if (!doc) return <NotFound />;
	return (
		<article className="shell page-wrap document-page">
			<ReadingProgress />
			<nav className="breadcrumbs" aria-label={c.common.path}>
				<Link to="/engineering">{c.nav.engineering}</Link>
				<span aria-hidden="true">/</span>
				<span aria-current="page">{doc.title}</span>
			</nav>
			<header className="case-intro">
				<p className="eyebrow">
					{c.engineering.decision} / {c.engineering.portfolio}
				</p>
				<h1>{doc.title}</h1>
				<p className="lead">{doc.summary}</p>
			</header>
			<div className="reading-layout">
				<nav className="reading-nav" aria-label={c.engineering.toc}>
					<strong>{c.engineering.toc}</strong>
					{(["context", "choice", "consequences", "evidence"] as const).map(
						(key) => (
							<a key={key} href={`#${key}`}>
								{c.engineering[key]}
							</a>
						),
					)}
				</nav>
				<div className="prose">
					{(["context", "choice", "consequences"] as const).map((key) => (
						<section id={key} key={key}>
							<h2>{c.engineering[key]}</h2>
							<p>{doc[key]}</p>
						</section>
					))}
					<section id="evidence">
						<h2>{c.engineering.evidence}</h2>
						<p>{c.engineering.evidenceText}</p>
						<p>
							<code>{doc.adr}</code>
						</p>
						<a
							href="https://github.com/ArthurViniNunes/portfolio"
							target="_blank"
							rel="noopener noreferrer"
						>
							{c.engineering.source}
							<span className="sr-only">{c.common.newTab}</span>
						</a>
					</section>
					<Link className="text-link" to="/engineering">
						{c.nav.engineering}
					</Link>
				</div>
			</div>
		</article>
	);
}
