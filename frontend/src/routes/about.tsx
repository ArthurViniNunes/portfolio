import { BrandMark } from "../components/brand";
import { Recommendations } from "../components/recommendations";
import { imageUrl } from "../components/ui";
import { profile } from "../content/profile";
import { Link, pageMeta, useCopy, useLocale } from "../i18n";
export const meta = (args: Parameters<typeof pageMeta>[1]) =>
	pageMeta("about", args);
export default function About() {
	const c = useCopy();
	const biography = profile[useLocale()];
	return (
		<>
			<div className="shell page-wrap about-page">
				<header className="about-intro">
					<div>
						<p className="eyebrow">{c.nav.about}</p>
						<h1>{c.about.title}</h1>
						<p className="lead">{biography.intro}</p>
						<nav
							className="about-jump-links"
							aria-label={biography.pageNavigation}
						>
							{Object.entries(biography.sections).map(([id, label]) => (
								<a key={id} href={`#${id}`}>
									{label}
								</a>
							))}
						</nav>
						<Link className="text-link" to="/contact">
							{c.common.talk}
						</Link>
					</div>
					<figure className="about-portrait" data-motion-enter>
						<BrandMark className="portrait-signature" />
						<img
							src={imageUrl("foto-perfil.webp")}
							alt={c.common.portrait}
							width="339"
							height="346"
						/>
						<figcaption>{c.about.caption}</figcaption>
					</figure>
				</header>
				<section className="about-story" aria-labelledby="story-title">
					<h2 id="story-title">{biography.storyTitle}</h2>
					<div className="prose">
						<p>{biography.story}</p>
						<p>{biography.story2}</p>
					</div>
				</section>
				<section
					className="journey-section"
					id="journey"
					aria-labelledby="journey-title"
				>
					<div>
						<p className="eyebrow">{biography.education}</p>
						<h2 id="journey-title">{biography.journeyTitle}</h2>
					</div>
					<ol className="journey-list">
						{biography.journey.map((item) => (
							<li key={item.organization}>
								<time dateTime={item.start}>{item.period}</time>
								<h3>{item.organization}</h3>
								<p className="journey-role">{item.role}</p>
								<p>{item.text}</p>
							</li>
						))}
					</ol>
				</section>
				<section
					className="about-story interests-section"
					id="interests"
					aria-labelledby="interests-title"
				>
					<h2 id="interests-title">{biography.interestsTitle}</h2>
					<p>{biography.interestsText}</p>
				</section>
				<section
					className="collaboration-section"
					aria-labelledby="collaboration-title"
				>
					<h2 id="collaboration-title">{biography.collaborationTitle}</h2>
					<div className="collaboration-grid">
						{biography.collaboration.map((item) => (
							<article key={item.source}>
								<h3>{item.title}</h3>
								<p>{item.text}</p>
								<a className="text-link" href={`#comment-${item.source}`}>
									{biography.readRecommendation}
								</a>
							</article>
						))}
					</div>
				</section>
				<section className="about-focus" aria-labelledby="focus-title">
					<h2 id="focus-title">{c.about.focusTitle}</h2>
					<div className="focus-grid">
						{c.about.focus.map((item) => (
							<article key={item.link}>
								<h3>{item.title}</h3>
								<p>{item.text}</p>
								<Link to={item.link} className="text-link">
									{item.action}
								</Link>
							</article>
						))}
					</div>
				</section>
			</div>
			<Recommendations />
			<section className="contact-band">
				<div className="shell contact-band-inner">
					<h2>{biography.closing}</h2>
					<Link className="button primary" to="/contact">
						{c.common.talk}
					</Link>
				</div>
			</section>
		</>
	);
}
