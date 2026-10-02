import { useSyncExternalStore } from "react";
import { Link as RouterLink, useLocation } from "react-router";
import { localizedPath } from "../content/locale";
import { useCopy, useHydrated, useLocale } from "../i18n";

function subscribe(callback: () => void) {
	const onStorage = (event: StorageEvent) => {
		if (event.key !== "portfolio-theme" && event.key !== null) return;
		document.documentElement.dataset.theme =
			event.newValue === "dark" ? "dark" : "light";
		callback();
	};
	window.addEventListener("portfolio-theme", callback);
	window.addEventListener("storage", onStorage);
	return () => {
		window.removeEventListener("portfolio-theme", callback);
		window.removeEventListener("storage", onStorage);
	};
}

export function Preferences() {
	const c = useCopy();
	const locale = useLocale();
	const location = useLocation();
	const hydrated = useHydrated();
	const theme = useSyncExternalStore(
		subscribe,
		() => document.documentElement.dataset.theme ?? "light",
		() => "light",
	);
	const nextLocale = locale === "pt" ? "en" : "pt";
	const nextUrl =
		localizedPath(location.pathname, nextLocale) +
		(hydrated ? location.search + location.hash : "");
	const toggleTheme = () => {
		const next = theme === "dark" ? "light" : "dark";
		document.documentElement.dataset.theme = next;
		try {
			localStorage.setItem("portfolio-theme", next);
		} catch {
			/* The in-page preference still works without storage. */
		}
		window.dispatchEvent(new Event("portfolio-theme"));
	};
	return (
		<div className="preferences">
			<RouterLink
				className="preference-button language-switch"
				to={nextUrl}
				lang={nextLocale === "en" ? "en" : "pt-BR"}
				hrefLang={nextLocale === "en" ? "en" : "pt-BR"}
				aria-label={
					locale === "pt" ? "Switch to English" : "Mudar para português"
				}
				preventScrollReset
			>
				{nextLocale.toUpperCase()}
			</RouterLink>
			<button
				className="preference-button theme-switch"
				type="button"
				onClick={toggleTheme}
				aria-label={theme === "dark" ? c.common.lightTheme : c.common.theme}
				aria-pressed={theme === "dark"}
			>
				<svg
					className="theme-moon"
					viewBox="0 0 24 24"
					width="20"
					height="20"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.6"
					aria-hidden="true"
				>
					<path d="M20.8 13.2A9 9 0 0 1 10.8 3a9 9 0 1 0 10 10.2Z" />
				</svg>
				<svg
					className="theme-sun"
					viewBox="0 0 24 24"
					width="20"
					height="20"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.6"
					aria-hidden="true"
				>
					<circle cx="12" cy="12" r="4" />
					<path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2" />
				</svg>
			</button>
		</div>
	);
}
