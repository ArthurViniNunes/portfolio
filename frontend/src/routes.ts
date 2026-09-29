import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
	index("./routes/home.tsx"),
	route("work", "./routes/work.tsx"),
	route("work/:slug", "./routes/project.tsx"),
	route("engineering", "./routes/engineering.tsx"),
	route("engineering/static-generation", "./routes/engineering-document.tsx"),
	route("learning", "./routes/learning.tsx"),
	route("about", "./routes/about.tsx"),
	route("resume", "./routes/resume.tsx"),
	route("contact", "./routes/contact.tsx"),
	route("search", "./routes/search.tsx"),
	route("404", "./routes/not-found.tsx"),
	route("*", "./routes/catchall.tsx"),
] satisfies RouteConfig;
