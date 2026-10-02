import { cubicIn, cubicOut, linear } from 'svelte/easing';

/**
 * @typedef {{ from: number, to: number, duration: number, ease: (t: number) => number }} Segment
 */

/**
 * Plan a move of the ball's center along z, from where it is now to `to`.
 *
 * Outside the collision zone the ball travels at a constant `speed`. Inside it,
 * between `collisionZ` (touching the membrane) and `squashedZ` (fully squashed),
 * it eases over `squashDuration`, or over the matching share of it for a
 * partial squash. Because a plan starts from the current position, a click can
 * reverse the ball mid-flight.
 *
 * @param {number} from
 * @param {number} to
 * @param {{ collisionZ: number, squashedZ: number, speed: number, squashDuration: number }} options
 * @returns {Segment[]}
 */
export function planBallMotion(from, to, { collisionZ, squashedZ, speed, squashDuration }) {
	/** @param {number} a @param {number} b */
	const squashTime = (a, b) => (squashDuration * Math.abs(b - a)) / (collisionZ - squashedZ);

	/** @type {Segment[]} */
	const segments = [];

	if (to < from) {
		// Toward the membrane: travel until the ball touches it, then squash
		if (from > collisionZ) {
			const end = Math.max(to, collisionZ);
			segments.push({ from, to: end, duration: (from - end) / speed, ease: linear });
		}
		const start = Math.min(from, collisionZ);
		if (to < start) {
			segments.push({ from: start, to, duration: squashTime(start, to), ease: cubicOut });
		}
	} else if (to > from) {
		// Away from the membrane: unsquash until the ball leaves it, then travel
		if (from < collisionZ) {
			const end = Math.min(to, collisionZ);
			segments.push({ from, to: end, duration: squashTime(from, end), ease: cubicIn });
		}
		const start = Math.max(from, collisionZ);
		if (to > start) {
			segments.push({ from: start, to, duration: (to - start) / speed, ease: linear });
		}
	}

	return segments;
}

/**
 * Where the ball is `elapsed` seconds into a non-empty plan, and whether the plan is over.
 *
 * @param {Segment[]} segments
 * @param {number} elapsed
 */
export function ballPositionAt(segments, elapsed) {
	for (const { from, to, duration, ease } of segments) {
		if (elapsed < duration) {
			return { z: from + (to - from) * ease(elapsed / duration), done: false };
		}
		elapsed -= duration;
	}
	return { z: segments[segments.length - 1].to, done: true };
}
