import { Link } from "react-router";
import { PageIntro } from "../components/ui";
import { engineeringDocuments } from "../content/site";

export function meta() {
	return [
		{ title: "Engenharia — Arthur Nunes" },
		{
			name: "description",
			content:
				"Decisões técnicas e documentação contextual dos projetos e deste portfólio.",
		},
	];
}

export default function Engineering() {
	return (
		<div className="shell page-wrap">
			<PageIntro
				eyebrow="Engenharia"
				title="Decisões que sustentam o produto."
				description="Documentação técnica conectada ao contexto em que cada decisão foi tomada."
			/>
			<div className="index-list">
				{engineeringDocuments.map((document) => (
					<article key={document.slug}>
						<div>
							<p className="eyebrow">Este portfólio / Arquitetura</p>
							<h2>
								<Link to={`/engineering/${document.slug}`}>
									{document.title}
								</Link>
							</h2>
							<p>{document.summary}</p>
						</div>
						<Link className="text-link" to={`/engineering/${document.slug}`}>
							Ler decisão ↗
						</Link>
					</article>
				))}
			</div>
			<p className="section-note">
				Documentos de outros projetos serão incluídos após revisão de suas
				fontes.
			</p>
		</div>
	);
}
