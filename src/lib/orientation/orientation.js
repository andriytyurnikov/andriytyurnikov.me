/*
 * SCREEN ORIENTATION API → CSS
 * ============================
 *
 * Exposes device orientation to CSS via class, data-attribute, and CSS custom property.
 * Enables ergonomic layouts that respond to how the device is held.
 *
 * Orientation types:
 * - portrait-primary    (normal portrait)
 * - portrait-secondary  (upside-down portrait)
 * - landscape-primary   (rotated one way)
 * - landscape-secondary (rotated other way)
 *
 * Injection (all three for maximum flexibility):
 * - Class: <html class="orientation-landscape-primary">
 * - Data attr: <html data-orientation="landscape-primary">
 * - CSS var: --orientation: landscape-primary
 *
 * Default: "portrait-primary" when API not available (most common case).
 *
 * See Tailwind dark mode pattern for similar approach.
 */

/**
 * Get current orientation type from Screen Orientation API
 * @returns {string} orientation type or 'portrait-primary' as fallback
 */
export function getOrientationType() {
	if (typeof window === 'undefined') return 'portrait-primary';

	const orientation = window.screen?.orientation;
	if (orientation?.type) {
		return orientation.type;
	}

	// Fallback: infer from window dimensions
	return window.innerHeight > window.innerWidth ? 'portrait-primary' : 'landscape-primary';
}

/**
 * Apply orientation to document root element
 * @param {string} orientationType
 */
export function applyOrientation(orientationType) {
	if (typeof document === 'undefined') return;

	const root = document.documentElement;

	// Remove previous orientation classes
	root.classList.remove(
		'orientation-portrait-primary',
		'orientation-portrait-secondary',
		'orientation-landscape-primary',
		'orientation-landscape-secondary'
	);

	// Add current orientation class
	root.classList.add(`orientation-${orientationType}`);

	// Set data attribute
	root.dataset.orientation = orientationType;

	// Set CSS custom property
	root.style.setProperty('--orientation', orientationType);
}

/**
 * Initialize orientation detection and subscribe to changes
 * @returns {() => void} cleanup function
 */
export function initOrientationDetection() {
	if (typeof window === 'undefined') return () => {};

	// Apply initial orientation
	applyOrientation(getOrientationType());

	// Listen for orientation changes
	const handleChange = () => {
		applyOrientation(getOrientationType());
	};

	// Screen Orientation API
	if (window.screen?.orientation) {
		window.screen.orientation.addEventListener('change', handleChange);
	}

	// Fallback: resize event (for browsers without full API support)
	window.addEventListener('resize', handleChange);

	// Return cleanup function
	return () => {
		if (window.screen?.orientation) {
			window.screen.orientation.removeEventListener('change', handleChange);
		}
		window.removeEventListener('resize', handleChange);
	};
}
