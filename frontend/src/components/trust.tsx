import { profile } from "../content/profile";
import { Link, useLocale } from "../i18n";

export function TrustSection() {
	const copy = profile[useLocale()];
	return (
		<section className="trust-section shell" aria-labelledby="trust-title">
			<h2 id="trust-title">{copy.proofTitle}</h2>
			<div className="trust-grid">
				{copy.proof.map((item) => (
					<article key={item.to}>
						<h3>{item.title}</h3>
						<p>{item.text}</p>
						<Link className="text-link" to={item.to}>
							{item.action}
						</Link>
					</article>
				))}
			</div>
		</section>
	);
}
