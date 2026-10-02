import { useEffect, useSyncExternalStore } from "react";
import { useLocation } from "react-router";
import { type MotionMode, resolveMotion } from "../content/motion";
import { useCopy } from "../i18n";

function readPreference() {
	try {
		return localStorage.getItem("portfolio-motion");
	} catch {
		return null;
	}
}
function snapshot(): MotionMode {
	const mode = document.documentElement.dataset.motion;
	return mode === "full" || mode === "reduced" ? mode : "paused";
}
function subscribe(callback: () => void) {
	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
	const sync = () => {
		document.documentElement.dataset.motion = resolveMotion(
			readPreference(),
			reduced.matches,
		);
		callback();
	};
	const storage = (event: StorageEvent) => {
		if (event.key === "portfolio-motion" || event.key === null) sync();
	};
	reduced.addEventListener("change", sync);
	window.addEventListener("storage", storage);
	window.addEventListener("portfolio-motion", callback);
	return () => {
		reduced.removeEventListener("change", sync);
		window.removeEventListener("storage", storage);
		window.removeEventListener("portfolio-motion", callback);
	};
}
export function useMotion() {
	return useSyncExternalStore(subscribe, snapshot, (): MotionMode => "paused");
}

export function MotionToggle({ compact = false }: { compact?: boolean }) {
	const mode = useMotion();
	const c = useCopy();
	const label =
		mode === "reduced"
			? c.motion.reduced
			: mode === "full"
				? c.motion.pause
				: c.motion.play;
	const toggle = () => {
		const next = mode === "full" ? "paused" : "full";
		document.documentElement.dataset.motion = next;
		try {
			localStorage.setItem("portfolio-motion", next);
		} catch {
			/* Session-only preference remains usable. */
		}
		window.dispatchEvent(new Event("portfolio-motion"));
	};
	return (
		<button
			className={
				compact ? "preference-button motion-preference" : "motion-toggle"
			}
			type="button"
			onClick={toggle}
			disabled={mode === "reduced"}
			aria-label={label}
			title={label}
			aria-pressed={mode !== "full"}
		>
			<svg
				viewBox="0 0 24 24"
				width="18"
				height="18"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.7"
				aria-hidden="true"
			>
				{mode === "full" ? (
					<path d="M8 5v14M16 5v14" />
				) : (
					<path d="m8 4 11 8-11 8Z" />
				)}
			</svg>
			{!compact && <span>{label}</span>}
		</button>
	);
}

// Each media element animates once on entry. Content stays visible without JS.
export function MotionEffects() {
	const mode = useMotion();
	const { pathname } = useLocation();
	useEffect(() => {
		if (mode !== "full") return;
		const animations = new Set<Animation>();
		const elements = document.querySelectorAll<HTMLElement>(
			"[data-motion-enter]",
		);
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					observer.unobserve(entry.target);
					const animation = entry.target.animate(
						[
							{ transform: "translateY(30px) scale(.97)", opacity: 0.65 },
							{ transform: "translateY(0) scale(1)", opacity: 1 },
						],
						{ duration: 650, easing: "cubic-bezier(.2,.7,.2,1)" },
					);
					animations.add(animation);
					animation.onfinish = () => animations.delete(animation);
				}
			},
			{ threshold: 0.12 },
		);
		for (const element of elements) observer.observe(element);
		const visibility = () => {
			for (const animation of animations)
				document.hidden ? animation.pause() : animation.play();
		};
		document.addEventListener("visibilitychange", visibility);
		return () => {
			observer.disconnect();
			for (const animation of animations) animation.cancel();
			document.removeEventListener("visibilitychange", visibility);
		};
	}, [mode, pathname]);
	return null;
}
