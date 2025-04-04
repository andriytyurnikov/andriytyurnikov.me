import { linear } from 'svelte/easing';

function split_css_unit(value) {
	const split = typeof value === 'string' && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return split ? [parseFloat(split[1]), split[2] || 'px'] : [/** @type {number} */ (value), 'px'];
}

export function noop(_node, { duration = 0, delay = 0, easing = (t) => t } = {}) {
	return {
		delay,
		duration,
		easing,
		css: (t, u) => ``
	};
}

export function translate(
	node,
	{ delay = 0, duration = 400, easing = cubic_out, x = 0, y = 0 } = {}
) {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;
	const [x_value, x_unit] = split_css_unit(x);
	const [y_value, y_unit] = split_css_unit(y);
	return {
		delay,
		duration,
		easing,
		css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x_value}${x_unit}, ${(1 - t) * y_value}${y_unit});`
	};
}

export function filterHueRotate(
	node,
	{ delay = 0, duration = 400, easing = linear, amount = '1turn', opacity = 0 } = {}
) {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const f = style.filter === 'none' ? '' : style.filter;
	const od = target_opacity * (1 - opacity);
	const [value, unit] = split_css_unit(amount);
	return {
		delay,
		duration,
		easing,
		css: (_t, u) =>
			`opacity: ${target_opacity - od * u}; filter: ${f} hue-rotate(${u * value}${unit});`
	};
}

export function filterInvert(
	node,
	{ delay = 0, duration = 400, easing = linear, amount = '100%', opacity = 0 } = {}
) {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const f = style.filter === 'none' ? '' : style.filter;
	const od = target_opacity * (1 - opacity);
	const [value, unit] = split_css_unit(amount);
	return {
		delay,
		duration,
		easing,
		css: (_t, u) => `opacity: ${target_opacity - od * u}; filter: ${f} invert(${u * value}${unit});`
	};
}

export function filterContrast(
	node,
	{ delay = 0, duration = 400, easing = linear, start = 1, amount = 2, opacity = 0 } = {}
) {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const f = style.filter === 'none' ? '' : style.filter;

	const od = target_opacity * (1 - opacity);
	const [value, unit] = split_css_unit(amount);
	const cd = value * (1 - start);
	return {
		delay,
		duration,
		easing,
		css: (_t, u) =>
			`opacity: ${target_opacity - od * u}; filter: ${f} contrast(${value - cd * u}${unit});`
	};
}
