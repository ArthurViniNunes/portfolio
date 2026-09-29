import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { PageIntro } from "../components/ui";
import { type SearchKind, searchContent } from "../content/search";

export function meta() {
	return [
		{ title: "Busca — Arthur Nunes" },
		{
			name: "description",
			content:
				"Busque projetos, documentos de engenharia e informações de carreira neste portfólio.",
		},
	];
}

const kinds: Array<{ label: string; value?: SearchKind }> = [
	{ label: "Todos" },
	{ label: "Projetos", value: "Projeto" },
	{ label: "Engenharia", value: "Engenharia" },
	{ label: "Carreira", value: "Carreira" },
];

export default function Search() {
	const [params, setParams] = useSearchParams();
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => setHydrated(true), []);
	const query = hydrated ? (params.get("q") ?? "").trim() : "";
	const kindParam = hydrated ? params.get("tipo") : null;
	const kind = kinds.find((item) => item.value === kindParam)?.value;
	const results = searchContent(query, kind);

	return (
		<div className="shell page-wrap search-page">
			<PageIntro
				eyebrow="Busca"
				title="Encontre o conteúdo no contexto."
				description="Pesquise títulos, tecnologias e texto de projetos, documentos e informações de carreira."
			/>
			<search>
				<form
					className="search-form"
					method="get"
					action={`${import.meta.env.BASE_URL}search/`}
				>
					<label htmlFor="site-search">O que você procura?</label>
					<div>
						<input
							id="site-search"
							name="q"
							type="search"
							defaultValue={query}
							key={query}
							placeholder="Ex.: testes, React, arquitetura"
						/>
						<button className="button primary" type="submit">
							Buscar
						</button>
					</div>
				</form>
			</search>
			{query && (
				<>
					<fieldset className="search-filters">
						<legend className="sr-only">Filtrar resultados por tipo</legend>
						{kinds.map((item) => (
							<button
								key={item.label}
								type="button"
								aria-pressed={kind === item.value}
								onClick={() =>
									setParams((current) => {
										const next = new URLSearchParams(current);
										if (item.value) next.set("tipo", item.value);
										else next.delete("tipo");
										return next;
									})
								}
							>
								{item.label}
							</button>
						))}
					</fieldset>
					<p className="result-count" aria-live="polite">
						{results.length} {results.length === 1 ? "resultado" : "resultados"}{" "}
						para “{query}”
					</p>
					{results.length > 0 ? (
						<div className="index-list search-results">
							{results.map((entry) => (
								<article key={entry.href}>
									<div>
										<p className="eyebrow">{entry.kind}</p>
										<h2>
											<Link to={entry.href}>{entry.title}</Link>
										</h2>
										<p>{entry.summary}</p>
									</div>
									<Link className="text-link" to={entry.href}>
										Abrir conteúdo ↗
									</Link>
								</article>
							))}
						</div>
					) : (
						<div className="empty-state">
							<h2>Nenhum resultado encontrado</h2>
							<p>
								Tente outra palavra ou selecione “Todos”. Você também pode
								navegar diretamente pelos projetos.
							</p>
							<Link className="text-link" to="/work">
								Ver projetos
							</Link>
						</div>
					)}
				</>
			)}
			{!query && (
				<div className="empty-state">
					<h2>Comece com uma palavra ou tema</h2>
					<p>
						A busca inclui o texto dos projetos e documentos publicados. Estudos
						e experiências ainda não fornecidos não aparecem nos resultados.
					</p>
					<Link className="text-link" to="/work">
						Explorar projetos
					</Link>
				</div>
			)}
		</div>
	);
}
