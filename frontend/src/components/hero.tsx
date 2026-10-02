import { type ReactNode, useEffect, useRef } from "react";
import { useCopy } from "../i18n";
import { BrandMark } from "./brand";
import { MotionToggle, useMotion } from "./motion";

export function Hero({ children }: { children: ReactNode }) {
	const surface = useRef<HTMLElement>(null);
	const motion = useMotion();
	const c = useCopy();
	useEffect(() => {
		const element = surface.current;
		if (!element) return;
		let visible = true;
		let frame = 0;
		const update = () => {
			element.dataset.running = String(
				motion === "full" && visible && !document.hidden,
			);
			if (element.dataset.running === "false") {
				cancelAnimationFrame(frame);
				element.style.setProperty("--pointer-x", "0px");
				element.style.setProperty("--pointer-y", "0px");
			}
		};
		const observer = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
			update();
		});
		observer.observe(element);
		const onPointer = (event: PointerEvent) => {
			if (element.dataset.running !== "true" || event.pointerType !== "mouse")
				return;
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const rect = element.getBoundingClientRect();
				element.style.setProperty(
					"--pointer-x",
					`${((event.clientX - rect.left) / rect.width - 0.5) * 64}px`,
				);
				element.style.setProperty(
					"--pointer-y",
					`${((event.clientY - rect.top) / rect.height - 0.5) * 48}px`,
				);
			});
		};
		const reset = () => {
			cancelAnimationFrame(frame);
			element.style.setProperty("--pointer-x", "0px");
			element.style.setProperty("--pointer-y", "0px");
		};
		element.addEventListener("pointermove", onPointer, { passive: true });
		element.addEventListener("pointerleave", reset);
		document.addEventListener("visibilitychange", update);
		update();
		return () => {
			observer.disconnect();
			cancelAnimationFrame(frame);
			element.removeEventListener("pointermove", onPointer);
			element.removeEventListener("pointerleave", reset);
			document.removeEventListener("visibilitychange", update);
		};
	}, [motion]);
	return (
		<section
			ref={surface}
			className="hero"
			data-running="false"
			aria-labelledby="hero-title"
		>
			<div className="hero-art" aria-hidden="true">
				<div className="hero-contours">
					<svg
						viewBox="0 0 1000 800"
						fill="none"
						className="contour-svg"
						aria-hidden="true"
					>
						{Array.from({ length: 24 }, (_, i) => (
							<rect
								key={`contour-${i}`}
								x={160 + i * 9}
								y={80 + i * 9}
								width={620 - i * 14}
								height={620 - i * 14}
								rx={155 - i * 4}
								transform={`rotate(${i * 2 - 24} 500 400)`}
							/>
						))}
					</svg>
				</div>
				<div className="hero-glass glass-one" />
				<div className="hero-glass glass-two" />
				<div className="hero-glyph">
					<BrandMark />
				</div>
				<div className="hero-grain" />
			</div>
			{children}
			<div className="shell hero-bottom">
				<a className="hero-scroll-link" href="#work-title">
					{c.home.selected}
					<span aria-hidden="true">↓</span>
				</a>
				<MotionToggle />
			</div>
		</section>
	);
}
