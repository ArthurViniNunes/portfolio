import type { Config } from "@react-router/dev/config";
import { localizedPath } from "./src/content/locale";
import { getProjects } from "./src/content/projects";
import { getEngineering } from "./src/content/site";

const paths = [
	"/",
	"/work",
	"/engineering",
	"/learning",
	"/about",
	"/resume",
	"/contact",
	"/search",
	"/404",
	...getProjects().map((project) => `/work/${project.slug}`),
	...getEngineering().map((doc) => `/engineering/${doc.slug}`),
];
export default {
	appDirectory: "src",
	ssr: false,
	prerender: paths.flatMap((path) => [path, localizedPath(path, "en")]),
} satisfies Config;
