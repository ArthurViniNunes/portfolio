import type { Config } from "@react-router/dev/config";

const paths = [
	"/",
	"/work",
	"/work/home-expense-control",
	"/work/kanban-realtime",
	"/work/plateia-ingressos",
	"/engineering",
	"/engineering/static-generation",
	"/learning",
	"/about",
	"/resume",
	"/contact",
	"/search",
	"/404",
];

export default {
	appDirectory: "src",
	ssr: false,
	prerender: paths,
} satisfies Config;
