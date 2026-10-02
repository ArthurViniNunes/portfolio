import type { ReactNode } from "react";
import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLocation,
	useRouteError,
} from "react-router";
import { MotionEffects } from "./components/motion";
import { SiteFooter, SiteHeader } from "./components/site-shell";
import { localizedPath } from "./content/locale";
import { motionScript } from "./content/motion";
import { themeScript } from "./content/theme";
import { useCopy, useLocale } from "./i18n";
import "./styles/site.css";

export function Layout({ children }: { children: ReactNode }) {
	const locale = useLocale();
	const location = useLocation();
	return (
		<html
			lang={locale === "pt" ? "pt-BR" : "en"}
			data-theme="light"
			data-motion="paused"
			suppressHydrationWarning
		>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="color-scheme" content="light dark" />
				<script>{themeScript}</script>
				<script>{motionScript}</script>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="alternate"
					hrefLang="pt-BR"
					href={localizedPath(location.pathname, "pt")}
				/>
				<link
					rel="alternate"
					hrefLang="en"
					href={localizedPath(location.pathname, "en")}
				/>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
export default function Root() {
	const c = useCopy();
	const location = useLocation();
	return (
		<>
			<MotionEffects />
			<a className="skip-link" href="#main">
				{c.common.skip}
			</a>
			<SiteHeader key={location.pathname} />
			<main id="main" tabIndex={-1}>
				<Outlet />
			</main>
			<SiteFooter />
		</>
	);
}
export function ErrorBoundary() {
	const error = useRouteError();
	const c = useCopy();
	const locale = useLocale();
	return (
		<main className="shell page-wrap" id="main">
			<h1>
				{isRouteErrorResponse(error) && error.status === 404
					? c.error.title
					: c.error.failure}
			</h1>
			<p>{c.error.retry}</p>
			<a className="text-link" href={localizedPath("/", locale)}>
				{c.common.back}
			</a>
		</main>
	);
}
