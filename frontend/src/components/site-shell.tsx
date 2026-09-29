import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { site } from "../content/site";

const navigation = [
	{ to: "/", label: "Início", end: true },
	{ to: "/work", label: "Projetos" },
	{ to: "/engineering", label: "Engenharia" },
	{ to: "/learning", label: "Aprendizado" },
	{ to: "/about", label: "Sobre" },
	{ to: "/resume", label: "Currículo" },
	{ to: "/contact", label: "Contato" },
] as const;

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
	return navigation.map(({ to, label, ...rest }) => (
		<NavLink
			key={to}
			to={to}
			end={"end" in rest ? rest.end : false}
			onClick={onNavigate}
			className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
		>
			{label}
		</NavLink>
	));
}

export function SiteHeader() {
	const [open, setOpen] = useState(false);
	const toggleRef = useRef<HTMLButtonElement>(null);
	useEffect(() => {
		if (!open) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
				toggleRef.current?.focus();
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open]);
	useEffect(() => {
		const desktop = window.matchMedia("(min-width: 1121px)");
		const closeOnDesktop = (event: MediaQueryListEvent) => {
			if (event.matches) setOpen(false);
		};
		desktop.addEventListener("change", closeOnDesktop);
		return () => desktop.removeEventListener("change", closeOnDesktop);
	}, []);

	return (
		<header className="site-header">
			<div className="shell header-inner">
				<Link className="wordmark" to="/" aria-label="Arthur Nunes, início">
					Arthur Nunes<span aria-hidden="true">.</span>
				</Link>
				<nav className="desktop-nav" aria-label="Navegação principal">
					<NavigationLinks />
				</nav>
				<div className="header-tools">
					<Link
						className="search-trigger"
						to="/search"
						aria-label="Buscar conteúdo"
					>
						<span aria-hidden="true">⌕</span> <span>Buscar</span>
					</Link>
					<button
						ref={toggleRef}
						className="menu-toggle"
						type="button"
						aria-expanded={open}
						aria-controls="mobile-nav"
						onClick={() => setOpen((value) => !value)}
					>
						{open ? "Fechar" : "Menu"}
					</button>
				</div>
			</div>
			<nav
				className="mobile-nav"
				id="mobile-nav"
				aria-label="Navegação móvel"
				hidden={!open}
			>
				<NavigationLinks onNavigate={() => setOpen(false)} />
			</nav>
		</header>
	);
}

export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="shell footer-inner">
				<div>
					<strong>{site.name}</strong>
					<p>Projetos, decisões e aprendizado em um só lugar.</p>
				</div>
				<div className="footer-links">
					<Link to="/contact">Contato</Link>
					<a href={site.github} target="_blank" rel="noopener noreferrer">
						GitHub <span className="sr-only">(abre em nova aba)</span>
					</a>
					<a href={site.linkedin} target="_blank" rel="noopener noreferrer">
						LinkedIn <span className="sr-only">(abre em nova aba)</span>
					</a>
				</div>
			</div>
		</footer>
	);
}
