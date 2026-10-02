import { PageIntro } from "../components/ui";
import { Link, pageMeta, useCopy } from "../i18n";
export function meta(args: Parameters<typeof pageMeta>[1]) {
	return [
		...pageMeta("notFound", args),
		{ name: "robots", content: "noindex" },
	];
}
export default function NotFound() {
	const c = useCopy();
	return (
		<div className="shell page-wrap">
			<PageIntro
				eyebrow="404"
				title={c.error.title}
				description={c.error.description}
			/>
			<div className="actions">
				<Link to="/" className="button primary">
					{c.common.back}
				</Link>
				<Link to="/search" className="button quiet">
					{c.nav.search}
				</Link>
			</div>
		</div>
	);
}
