import { useSyncExternalStore } from "react";
import { type LinkProps, Link as RouterLink, useLocation } from "react-router";
import { localeFromPath, localizedPath } from "./content/locale";
import { messages } from "./content/messages";

export function useLocale() {
	return localeFromPath(useLocation().pathname);
}

export function useCopy() {
	return messages[useLocale()];
}

const subscribeHydration = () => () => {};
export function useHydrated() {
	return useSyncExternalStore(
		subscribeHydration,
		() => true,
		() => false,
	);
}

export function Link({ to, ...props }: Omit<LinkProps, "to"> & { to: string }) {
	return <RouterLink to={localizedPath(to, useLocale())} {...props} />;
}

export function pageMeta(
	page: keyof typeof messages.pt.meta,
	{ location }: { location: { pathname: string } },
) {
	const entry = messages[localeFromPath(location.pathname)].meta[page];
	return [
		{ title: `${entry[0]} — Arthur Nunes` },
		{ name: "description", content: entry[1] },
	];
}
