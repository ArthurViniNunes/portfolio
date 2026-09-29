import { Link } from "react-router";
import { EmptyState, imageUrl, PageIntro } from "../components/ui";
import { site } from "../content/site";

export function meta() {
	return [
		{ title: "Sobre — Arthur Nunes" },
		{
			name: "description",
			content:
				"Conheça a atuação de Arthur Nunes e encontre seus projetos e contato.",
		},
	];
}

export default function About() {
	return (
		<div className="shell page-wrap">
			<PageIntro
				eyebrow="Sobre"
				title="Da interface às decisões de engenharia."
				description={`${site.fullName} apresenta aqui projetos desenvolvidos em diferentes stacks e a documentação que ajuda a compreender seu trabalho.`}
			/>
			<div className="about-layout">
				<img
					src={imageUrl("foto-perfil.webp")}
					alt="Retrato de Arthur Nunes"
					width="339"
					height="346"
				/>
				<div className="prose">
					<h2>O que você pode explorar</h2>
					<p>
						Os estudos de caso mostram problemas, implementação e fontes
						disponíveis. A área de Engenharia registra decisões tomadas na
						construção deste próprio portfólio.
					</p>
					<p>
						Para uma avaliação rápida, comece pelos{" "}
						<Link to="/work">projetos</Link>. Para discutir uma oportunidade,
						use a <Link to="/contact">página de contato</Link>.
					</p>
				</div>
			</div>
			<section className="about-timeline" aria-labelledby="timeline-title">
				<h2 id="timeline-title">Trajetória profissional</h2>
				<EmptyState
					title="Experiências em revisão"
					description="Cargos, organizações, períodos e certificações serão publicados quando houver dados atualizados para conferência."
					to="/resume"
					action="Ver resumo profissional"
				/>
			</section>
		</div>
	);
}
