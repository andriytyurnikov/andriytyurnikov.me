/** Device breakpoints (pixels) — matches CSS breakpoints in breakpoints.devices.css */
export const BREAKPOINTS = {
	tablet: 507,
	laptop: 1200,
	desktop: 1537,
	desktop4k: 2049
};

/** Physical screen size in centimeters per breakpoint, in landscape orientation */
export const SCREEN_SIZE_CM = {
	mobile: { width: 14, height: 7 }, // ~6" phone
	tablet: { width: 24, height: 18 }, // ~11" tablet
	laptop: { width: 30, height: 19 }, // ~14" laptop
	desktop: { width: 60, height: 34 }, // ~27" monitor
	desktop4k: { width: 70, height: 40 } // ~32" monitor
};

/** Eye-to-screen distance in centimeters per breakpoint */
export const VIEWING_DISTANCE_CM = {
	mobile: 30,
	tablet: 45,
	laptop: 54,
	desktop: 65,
	desktop4k: 70
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

/**
 * Physical height of the viewport in centimeters: the screen's height in the
 * current orientation, scaled by the share of the screen the viewport covers.
 *
 * @param {{ width: number, height: number }} screenCm - Physical screen size, landscape
 * @param {{ width: number, height: number }} screenPx - Screen size in pixels, either orientation
 * @param {{ width: number, height: number }} viewportPx - Viewport size in pixels
 */
export function viewportHeightCm(screenCm, screenPx, viewportPx) {
	const isLandscape = viewportPx.width >= viewportPx.height;
	const screenHeightCm = isLandscape ? screenCm.height : screenCm.width;
	const screenHeightPx = isLandscape
		? Math.min(screenPx.width, screenPx.height)
		: Math.max(screenPx.width, screenPx.height);

	return screenHeightCm * (viewportPx.height / screenHeightPx);
}

export function toDegrees(radians) {
	return (radians * 180) / Math.PI;
}

export function toRadians(degrees) {
	return (degrees * Math.PI) / 180;
}
