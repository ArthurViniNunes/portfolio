export type MotionMode = "full" | "paused" | "reduced";
export function resolveMotion(
	preference: string | null,
	reduced: boolean,
): MotionMode {
	return reduced ? "reduced" : preference === "paused" ? "paused" : "full";
}
export const motionScript = `try{document.documentElement.dataset.motion=matchMedia('(prefers-reduced-motion: reduce)').matches?'reduced':localStorage.getItem('portfolio-motion')==='paused'?'paused':'full'}catch{document.documentElement.dataset.motion=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches?'reduced':'full'}`;
