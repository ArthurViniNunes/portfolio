import { useState } from "react";
import { site } from "../content/site";
import { Link, pageMeta, useCopy } from "../i18n";
export const meta = (args: Parameters<typeof pageMeta>[1]) =>
	pageMeta("contact", args);
export default function Contact() {
	const c = useCopy();
	const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
		"idle",
	);
	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(site.email);
			setCopyState("copied");
		} catch {
			setCopyState("error");
		}
	}
	return (
		<div className="shell page-wrap contact-page">
			<header className="contact-intro">
				<p className="eyebrow">{c.nav.contact}</p>
				<h1>{c.contact.title}</h1>
				<p className="lead">{c.contact.description}</p>
			</header>
			<section className="contact-letter" aria-labelledby="email-title">
				<div className="letter-mark" aria-hidden="true">
					@
				</div>
				<div className="letter-content">
					<h2 id="email-title">{c.contact.email}</h2>
					<a className="email-address" href={`mailto:${site.email}`}>
						{site.email}
					</a>
					<p>{c.contact.hint}</p>
					<div className="actions">
						<a
							className="button primary"
							href={`mailto:${site.email}?subject=${encodeURIComponent(c.contact.subject)}`}
						>
							{c.contact.send}
						</a>
						<button className="button quiet" type="button" onClick={copyEmail}>
							{c.contact.copy}
						</button>
					</div>
					<p className="copy-feedback" role="status">
						{copyState === "copied"
							? c.contact.copied
							: copyState === "error"
								? c.contact.copyError
								: ""}
					</p>
				</div>
			</section>
			<div className="contact-secondary">
				<a href={site.linkedin} target="_blank" rel="noopener noreferrer">
					<span>{c.contact.network}</span>
					<strong>
						LinkedIn <span aria-hidden="true">↗</span>
					</strong>
					<span className="sr-only">{c.common.newTab}</span>
				</a>
				<a href={site.github} target="_blank" rel="noopener noreferrer">
					<span>{c.contact.code}</span>
					<strong>
						GitHub <span aria-hidden="true">↗</span>
					</strong>
					<span className="sr-only">{c.common.newTab}</span>
				</a>
				<div>
					<span>{c.contact.resume}</span>
					<Link to="/resume">
						{c.contact.resumeLink} <span aria-hidden="true">↗</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
