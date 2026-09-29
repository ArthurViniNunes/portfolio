import { PageIntro } from "../components/ui";
import { site } from "../content/site";

export function meta() {
	return [
		{ title: "Contato — Arthur Nunes" },
		{
			name: "description",
			content:
				"Entre em contato com Arthur Nunes por e-mail ou pelas plataformas profissionais.",
		},
	];
}

export default function Contact() {
	return (
		<div className="shell page-wrap contact-page">
			<PageIntro
				eyebrow="Contato"
				title="Vamos conversar."
				description="Para falar sobre uma oportunidade, um projeto ou a implementação deste portfólio, escolha o canal mais conveniente."
			/>
			<div className="contact-options">
				<a href={`mailto:${site.email}`}>
					<span>E-mail</span>
					<strong>{site.email}</strong>
					<b aria-hidden="true">↗</b>
				</a>
				<a href={site.linkedin} target="_blank" rel="noopener noreferrer">
					<span>Rede profissional</span>
					<strong>
						LinkedIn <span className="sr-only">(abre em nova aba)</span>
					</strong>
					<b aria-hidden="true">↗</b>
				</a>
				<a href={site.github} target="_blank" rel="noopener noreferrer">
					<span>Código</span>
					<strong>
						GitHub <span className="sr-only">(abre em nova aba)</span>
					</strong>
					<b aria-hidden="true">↗</b>
				</a>
			</div>
		</div>
	);
}
