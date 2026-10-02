export type Locale = "pt" | "en";

export function localeFromPath(path: string): Locale {
	return /^\/en(?:\/|$|[?#])/.test(path) ? "en" : "pt";
}

export function localizedPath(path: string, locale: Locale): string {
	if (!path.startsWith("/") || path.startsWith("//")) return path;
	const boundary = path.search(/[?#]/);
	const pathname = boundary < 0 ? path : path.slice(0, boundary);
	const suffix = boundary < 0 ? "" : path.slice(boundary);
	const base = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
	return (locale === "en" ? `/en${base === "/" ? "" : base}` : base) + suffix;
}
