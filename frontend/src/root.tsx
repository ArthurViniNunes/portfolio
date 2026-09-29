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
import { SiteFooter, SiteHeader } from "./components/site-shell";
import "./styles/site.css";

export function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-BR">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="color-scheme" content="light" />
				<link rel="icon" href={`${import.meta.env.BASE_URL}favicon.ico`} />
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
	const location = useLocation();
	return (
		<>
			<a className="skip-link" href="#main">
				Pular para o conteúdo
			</a>
			<SiteHeader key={location.pathname} />
			<main id="main">
				<Outlet />
			</main>
			<SiteFooter />
		</>
	);
}

export function ErrorBoundary() {
	const error = useRouteError();
	const message =
		isRouteErrorResponse(error) && error.status === 404
			? "Esta página não foi encontrada."
			: "Não foi possível carregar esta página.";

	return (
		<div className="shell page-wrap">
			<h1>{message}</h1>
			<p>Use o menu para continuar a navegação ou volte ao início.</p>
			<a className="text-link" href={import.meta.env.BASE_URL}>
				Voltar ao início
			</a>
		</div>
	);
}
