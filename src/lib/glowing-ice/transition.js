import { linear } from 'svelte/easing';

function split_css_unit(value) {
	const split = typeof value === 'string' && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return split ? [parseFloat(split[1]), split[2] || 'px'] : [/** @type {number} */ (value), 'px'];
}

export function noop(
	node,
	config = { delay: 0, duration: 0, easing: linear },
	direction_config = { direction: 'both' }
) {
	return {
		delay: config.delay,
		duration: config.duration,
		easing: config.easing,
		css: (t, u) => {
			return ``;
		}
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
