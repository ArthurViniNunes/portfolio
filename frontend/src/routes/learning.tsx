import { EmptyState, PageIntro } from "../components/ui";
import { pageMeta, useCopy } from "../i18n";
export const meta = (args: Parameters<typeof pageMeta>[1]) =>
	pageMeta("learning", args);
export default function Learning() {
	const c = useCopy();
	return (
		<div className="shell page-wrap">
			<PageIntro
				eyebrow={c.nav.learning}
				title={c.learning.title}
				description={c.learning.description}
			/>
			<EmptyState
				title={c.learning.empty}
				description={c.learning.emptyText}
				to="/engineering"
				action={c.learning.action}
			/>
		</div>
	);
}
