/** Device breakpoints (pixels) — matches CSS breakpoints in breakpoints.devices.css */
export const BREAKPOINTS = {
	tablet: 507,
	laptop: 1200,
	desktop: 1537,
	desktop4k: 2049
};

/**
 * Detect device breakpoint from physical screen pixel dimensions.
 * Uses screen size (not viewport) because physical device class doesn't change on resize.
 */
export function getBreakpoint(width, height) {
	const isTabletOrLarger = width >= BREAKPOINTS.tablet && height >= BREAKPOINTS.tablet;
	if (!isTabletOrLarger) return 'mobile';
	if (width >= BREAKPOINTS.desktop4k) return 'desktop4k';
	if (width >= BREAKPOINTS.desktop) return 'desktop';
	if (width >= BREAKPOINTS.laptop) return 'laptop';
	return 'tablet';
}

/** Detect current breakpoint from window.screen dimensions and orientation. */
export function detectBreakpoint() {
	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;
	const isLandscape = viewportWidth >= viewportHeight;

	const screenMin = Math.min(window.screen.width, window.screen.height);
	const screenMax = Math.max(window.screen.width, window.screen.height);
	const screenWidth = isLandscape ? screenMax : screenMin;
	const screenHeight = isLandscape ? screenMin : screenMax;

	return getBreakpoint(screenWidth, screenHeight);
}

export function toDegrees(radians) {
	return (radians * 180) / Math.PI;
}

export function toRadians(degrees) {
	return (degrees * Math.PI) / 180;
}
