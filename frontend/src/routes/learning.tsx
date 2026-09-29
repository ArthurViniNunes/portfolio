import { EmptyState, PageIntro } from "../components/ui";

export function meta() {
	return [
		{ title: "Aprendizado — Arthur Nunes" },
		{
			name: "description",
			content:
				"Área de estudos técnicos e resolução de problemas de Arthur Nunes.",
		},
	];
}

export default function Learning() {
	return (
		<div className="shell page-wrap">
			<PageIntro
				eyebrow="Aprendizado"
				title="Estudos com problema, caminho e solução."
				description="Esta área reunirá resoluções de algoritmos e notas técnicas organizadas por assunto, com explicações e código próprio."
			/>
			<EmptyState
				title="Nenhum estudo publicado ainda"
				description="Ainda não há estudos de algoritmos fornecidos para esta versão. Quando houver conteúdo verificável, cada estudo terá problema, abordagem, solução e referências."
				to="/engineering"
				action="Ler decisões de engenharia"
			/>
		</div>
	);
}
