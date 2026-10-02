import { describe, it, expect } from 'vitest';
import { ballPositionAt, planBallMotion } from './ball-motion.js';

const options = { collisionZ: 0.04, squashedZ: 0.03, speed: 2, squashDuration: 0.3 };
const rest = 0.54;

/** Sample a plan from start to finish */
function sample(segments, steps = 100) {
	const total = segments.reduce((sum, s) => sum + s.duration, 0);
	return Array.from({ length: steps + 1 }, (_, i) => ballPositionAt(segments, (total * i) / steps));
}

describe('planBallMotion', () => {
	it('travels to the membrane, then squashes', () => {
		const plan = planBallMotion(rest, options.squashedZ, options);
		expect(plan.map((s) => [s.from, s.to])).toEqual([
			[rest, 0.04],
			[0.04, 0.03]
		]);
		expect(plan[0].duration).toBeCloseTo(0.25);
		expect(plan[1].duration).toBeCloseTo(0.3);
	});

	it('unsquashes, then travels back', () => {
		const plan = planBallMotion(options.squashedZ, rest, options);
		expect(plan.map((s) => [s.from, s.to])).toEqual([
			[0.03, 0.04],
			[0.04, rest]
		]);
	});

	it('turns straight back when reversed on the way in', () => {
		const plan = planBallMotion(0.2, rest, options);
		expect(plan.map((s) => [s.from, s.to])).toEqual([[0.2, rest]]);
	});

	it('takes a share of the squash time when reversed mid-squash', () => {
		const plan = planBallMotion(0.035, rest, options);
		expect(plan.map((s) => [s.from, s.to])).toEqual([
			[0.035, 0.04],
			[0.04, rest]
		]);
		expect(plan[0].duration).toBeCloseTo(0.15);
	});

	it('plans nothing when the ball is already there', () => {
		expect(planBallMotion(rest, rest, options)).toEqual([]);
	});

	it('starts where the ball is and moves one way only, from any position', () => {
		for (const from of [0.03, 0.035, 0.04, 0.2, rest]) {
			for (const to of [options.squashedZ, rest]) {
				const plan = planBallMotion(from, to, options);
				if (plan.length === 0) continue;

				const positions = sample(plan).map((p) => p.z);
				expect(positions[0]).toBeCloseTo(from);
				expect(positions.at(-1)).toBeCloseTo(to);
				const sign = Math.sign(to - from);
				for (let i = 1; i < positions.length; i++) {
					expect(Math.sign(positions[i] - positions[i - 1])).not.toBe(-sign);
				}
			}
		}
	});
});

describe('ballPositionAt', () => {
	it('reports done at the end of the plan', () => {
		const plan = planBallMotion(rest, options.squashedZ, options);
		expect(ballPositionAt(plan, 0.1).done).toBe(false);
		expect(ballPositionAt(plan, 1)).toEqual({ z: options.squashedZ, done: true });
	});
});
