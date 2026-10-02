import { useSearchParams } from "react-router";
import { PageIntro } from "../components/ui";
import { localizedPath } from "../content/locale";
import { type SearchKind, searchContent } from "../content/search";
import { Link, pageMeta, useCopy, useHydrated, useLocale } from "../i18n";
export const meta = (args: Parameters<typeof pageMeta>[1]) =>
	pageMeta("search", args);
export default function Search() {
	const c = useCopy();
	const locale = useLocale();
	const hydrated = useHydrated();
	const [params, setParams] = useSearchParams();
	const query = hydrated ? (params.get("q") ?? "").trim() : "";
	const kinds: SearchKind[] = ["project", "engineering", "career"];
	const rawKind = hydrated ? params.get("tipo") : null;
	const kind = kinds.find((item) => item === rawKind);
	const results = searchContent(query, kind, locale);
	return (
		<div className="shell page-wrap search-page">
			<PageIntro
				eyebrow={c.nav.search}
				title={c.search.title}
				description={c.search.description}
			/>
			<search>
				<form
					className="search-form"
					method="get"
					action={localizedPath("/search", locale)}
				>
					<label htmlFor="site-search">{c.search.label}</label>
					<div>
						<input
							id="site-search"
							name="q"
							type="search"
							key={query}
							defaultValue={query}
							placeholder={c.search.placeholder}
						/>
						<button className="button primary" type="submit">
							{c.search.button}
						</button>
					</div>
				</form>
			</search>
			<noscript>
				<p className="section-note">{c.search.noJs}</p>
			</noscript>
			{query ? (
				<>
					<fieldset className="search-filters">
						<legend className="sr-only">{c.search.filter}</legend>
						{[undefined, ...kinds].map((item) => (
							<button
								key={item ?? "all"}
								type="button"
								aria-pressed={kind === item}
								onClick={() =>
									setParams((current) => {
										const next = new URLSearchParams(current);
										if (item) next.set("tipo", item);
										else next.delete("tipo");
										return next;
									})
								}
							>
								{item ? c.search.kinds[item] : c.common.all}
							</button>
						))}
					</fieldset>
					<p className="result-count" aria-live="polite">
						{results.length} {c.search.count} “{query}”
					</p>
					<Link to="/search" className="text-link">
						{c.search.clear}
					</Link>
					{results.length ? (
						<div className="index-list search-results">
							{results.map((entry) => (
								<article key={entry.href}>
									<div>
										<p className="eyebrow">{c.search.kinds[entry.kind]}</p>
										<h2>
											<Link to={entry.href}>{entry.title}</Link>
										</h2>
										<p>{entry.summary}</p>
									</div>
									<Link className="text-link" to={entry.href}>
										{c.common.open}
									</Link>
								</article>
							))}
						</div>
					) : (
						<div className="empty-state">
							<h2>{c.search.none}</h2>
							<p>{c.search.noneText}</p>
							<Link className="text-link" to="/work">
								{c.common.allProjects}
							</Link>
						</div>
					)}
				</>
			) : (
				<div className="empty-state">
					<h2>{c.search.start}</h2>
					<p>{c.search.startText}</p>
					<Link className="text-link" to="/work">
						{c.common.allProjects}
					</Link>
				</div>
			)}
		</div>
	);
}
