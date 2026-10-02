import { recommendations } from "../content/recommendations";
import { site } from "../content/site";
import { useCopy, useLocale } from "../i18n";

export function Recommendations() {
	const c = useCopy();
	const locale = useLocale();
	return (
		<section
			className="recommendations section shell"
			id="comments"
			aria-labelledby="comments-title"
		>
			<div className="section-head">
				<div>
					<p className="eyebrow">{c.recommendations.label}</p>
					<h2 id="comments-title">{c.recommendations.title}</h2>
				</div>
				<p className="recommendations-intro">{c.recommendations.intro}</p>
			</div>
			<div className="recommendation-grid">
				{recommendations.map((item) => (
					<article
						className="recommendation"
						key={item.id}
						id={`comment-${item.id}`}
					>
						<span className="quote-mark" aria-hidden="true">
							“
						</span>
						<blockquote>
							<p>{item.excerpt[locale]}</p>
						</blockquote>
						{locale === "en" && (
							<p className="translation-note">{c.recommendations.translated}</p>
						)}
						<div className="reviewer">
							<span className="reviewer-initials" aria-hidden="true">
								{item.initials}
							</span>
							<div>
								<a
									href={item.profileUrl}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`${c.recommendations.author} ${item.name} ${c.common.newTab}`}
								>
									{item.name}
								</a>
								<p>{item.role[locale]}</p>
							</div>
						</div>
						<p className="recommendation-context">{item.context[locale]}</p>
						<time dateTime={item.date}>
							{new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en", {
								day: "numeric",
								month: "long",
								year: "numeric",
								timeZone: "UTC",
							}).format(new Date(`${item.date}T12:00:00Z`))}
						</time>
						<details className="recommendation-detail">
							<summary>{c.recommendations.full}</summary>
							<blockquote>
								<p lang={locale === "pt" ? "pt-BR" : "en"}>
									{item.quote[locale]}
								</p>
							</blockquote>
							{locale === "en" && (
								<details>
									<summary>{c.recommendations.original}</summary>
									<blockquote lang="pt-BR">
										<p>{item.quote.pt}</p>
									</blockquote>
								</details>
							)}
						</details>
					</article>
				))}
			</div>
			<a
				className="text-link recommendations-source"
				href={`${site.linkedin}details/recommendations/`}
				target="_blank"
				rel="noopener noreferrer"
			>
				{c.recommendations.source}
				<span className="sr-only"> {c.common.newTab}</span>
			</a>
		</section>
	);
}
