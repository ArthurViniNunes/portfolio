import { brand } from "../content/brand";

export function BrandMark({ className = "" }: { className?: string }) {
	return (
		<svg
			className={`brand-mark ${className}`}
			viewBox={brand.viewBox}
			fill="none"
			aria-hidden="true"
			focusable="false"
		>
			<path
				className="brand-stroke"
				d={brand.stroke}
				stroke="currentColor"
				strokeWidth="7"
				strokeLinecap="round"
				strokeLinejoin="round"
				pathLength="1"
			/>
			<path
				className="brand-bridge"
				d={brand.bridge}
				stroke="currentColor"
				strokeWidth="7"
				strokeLinecap="round"
				pathLength="1"
			/>
		</svg>
	);
}
