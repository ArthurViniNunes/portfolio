import { Link } from "react-router";
import { PageIntro } from "../components/ui";

export function meta() {
	return [
		{ title: "Página não encontrada — Arthur Nunes" },
		{
			name: "description",
			content:
				"Este endereço não corresponde a uma página do portfólio. Use a busca ou navegue pelos projetos.",
		},
		{ name: "robots", content: "noindex" },
	];
}

export default function NotFound() {
	return (
		<div className="shell page-wrap">
			<PageIntro
				eyebrow="404"
				title="Esta página não foi encontrada."
				description="O endereço pode ter mudado. Use a busca ou retome a navegação pelos projetos."
			/>
			<div className="actions">
				<Link className="button primary" to="/search">
					Buscar conteúdo
				</Link>
				<Link className="button quiet" to="/work">
					Ver projetos
				</Link>
			</div>
		</div>
	);
}
