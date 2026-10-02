import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { localizedPath } from "../content/locale";
import { site } from "../content/site";
import { Link, useCopy, useLocale } from "../i18n";
import { BrandMark } from "./brand";
import { MotionToggle } from "./motion";
import { Preferences } from "./preferences";

const navigation = [
	{ to: "/", key: "home" },
	{ to: "/work", key: "work" },
	{ to: "/engineering", key: "engineering" },
	{ to: "/learning", key: "learning" },
	{ to: "/about", key: "about" },
	{ to: "/resume", key: "resume" },
	{ to: "/contact", key: "contact" },
] as const;
function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
	const c = useCopy();
	const locale = useLocale();
	return navigation.map(({ to, key }) => (
		<NavLink
			key={to}
			to={localizedPath(to, locale)}
			end={to === "/"}
			onClick={onNavigate}
			className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
		>
			{c.nav[key]}
		</NavLink>
	));
}
export function SiteHeader() {
	const c = useCopy();
	const [open, setOpen] = useState(false);
	const toggleRef = useRef<HTMLButtonElement>(null);
	useEffect(() => {
		if (!open) return;
		const onKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
				toggleRef.current?.focus();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	useEffect(() => {
		const desktop = window.matchMedia("(min-width: 1281px)");
		const close = (event: MediaQueryListEvent) => {
			if (event.matches) setOpen(false);
		};
		desktop.addEventListener("change", close);
		return () => desktop.removeEventListener("change", close);
	}, []);
	return (
		<header className="site-header">
			<div className="shell header-inner">
				<Link
					className="wordmark"
					to="/"
					aria-label={`Arthur Nunes, ${c.nav.home}`}
				>
					<BrandMark />
					<span className="brand-name">Arthur Nunes</span>
				</Link>
				<nav className="desktop-nav" aria-label={c.nav.main}>
					<NavigationLinks />
				</nav>
				<div className="header-tools">
					<Link
						className="search-trigger"
						to="/search"
						aria-label={c.nav.search}
					>
						<svg
							viewBox="0 0 24 24"
							width="20"
							height="20"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.7"
							aria-hidden="true"
						>
							<circle cx="10.5" cy="10.5" r="6.5" />
							<path d="m16 16 5 5" />
						</svg>
						<span>{c.nav.search}</span>
					</Link>
					<Preferences />
					<MotionToggle compact />
					<button
						ref={toggleRef}
						className="menu-toggle"
						type="button"
						aria-expanded={open}
						aria-controls="mobile-nav"
						onClick={() => setOpen((value) => !value)}
					>
						{open ? c.nav.close : c.nav.menu}
					</button>
				</div>
			</div>
			<nav
				className="mobile-nav"
				id="mobile-nav"
				aria-label={c.nav.mobile}
				hidden={!open}
			>
				<NavigationLinks onNavigate={() => setOpen(false)} />
			</nav>
		</header>
	);
}
export function SiteFooter() {
	const c = useCopy();
	return (
		<footer className="site-footer">
			<div className="shell footer-inner">
				<div>
					<Link className="footer-brand" to="/">
						<BrandMark />
						<strong>{site.name}</strong>
					</Link>
					<p>{c.common.footer}</p>
				</div>
				<div className="footer-links">
					<Link to="/contact">{c.nav.contact}</Link>
					<a href={site.github} target="_blank" rel="noopener noreferrer">
						GitHub <span className="sr-only">{c.common.newTab}</span>
					</a>
					<a href={site.linkedin} target="_blank" rel="noopener noreferrer">
						LinkedIn <span className="sr-only">{c.common.newTab}</span>
					</a>
				</div>
			</div>
		</footer>
	);
}
