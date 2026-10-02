import { describe, it, expect } from 'vitest';
import {
	BREAKPOINTS,
	getBreakpoint,
	SCREEN_SIZE_CM,
	toDegrees,
	toRadians,
	viewportHeightCm
} from './rpov-utils.js';

describe('BREAKPOINTS', () => {
	it('defines expected device thresholds', () => {
		expect(BREAKPOINTS.tablet).toBe(507);
		expect(BREAKPOINTS.laptop).toBe(1200);
		expect(BREAKPOINTS.desktop).toBe(1537);
		expect(BREAKPOINTS.desktop4k).toBe(2049);
	});
});

describe('getBreakpoint', () => {
	it('returns mobile for small screens', () => {
		expect(getBreakpoint(375, 667)).toBe('mobile');
		expect(getBreakpoint(390, 844)).toBe('mobile');
	});

	it('returns mobile when only one dimension exceeds tablet threshold', () => {
		expect(getBreakpoint(600, 400)).toBe('mobile');
		expect(getBreakpoint(400, 600)).toBe('mobile');
	});

	it('returns tablet for mid-size screens', () => {
		expect(getBreakpoint(768, 1024)).toBe('tablet');
		expect(getBreakpoint(507, 507)).toBe('tablet');
	});

	it('returns laptop for laptop-size screens', () => {
		expect(getBreakpoint(1440, 900)).toBe('laptop');
		expect(getBreakpoint(1200, 800)).toBe('laptop');
	});

	it('returns desktop for large screens', () => {
		expect(getBreakpoint(1920, 1080)).toBe('desktop');
		expect(getBreakpoint(1537, 900)).toBe('desktop');
	});

	it('returns desktop4k for ultra-wide screens', () => {
		expect(getBreakpoint(3840, 2160)).toBe('desktop4k');
		expect(getBreakpoint(2049, 1080)).toBe('desktop4k');
	});

	it('handles exact boundary values', () => {
		expect(getBreakpoint(506, 507)).toBe('mobile');
		expect(getBreakpoint(507, 507)).toBe('tablet');
		expect(getBreakpoint(1199, 800)).toBe('tablet');
		expect(getBreakpoint(1200, 800)).toBe('laptop');
		expect(getBreakpoint(1536, 800)).toBe('laptop');
		expect(getBreakpoint(1537, 800)).toBe('desktop');
		expect(getBreakpoint(2048, 800)).toBe('desktop');
		expect(getBreakpoint(2049, 800)).toBe('desktop4k');
	});
});

describe('SCREEN_SIZE_CM', () => {
	it('lists every screen in landscape, wider than tall', () => {
		for (const size of Object.values(SCREEN_SIZE_CM)) {
			expect(size.width).toBeGreaterThan(size.height);
		}
	});
});

describe('viewportHeightCm', () => {
	const phone = SCREEN_SIZE_CM.mobile;
	const portrait = { width: 390, height: 844 };
	const landscape = { width: 844, height: 390 };

	it('gives a full-screen portrait phone its long side', () => {
		expect(viewportHeightCm(phone, portrait, portrait)).toBeCloseTo(14);
	});

	it('gives a full-screen landscape phone its short side', () => {
		expect(viewportHeightCm(phone, landscape, landscape)).toBeCloseTo(7);
	});

	it('does not depend on the orientation the screen reports', () => {
		expect(viewportHeightCm(phone, portrait, landscape)).toBeCloseTo(7);
		expect(viewportHeightCm(phone, landscape, portrait)).toBeCloseTo(14);
	});

	it('scales with the share of the screen the viewport covers', () => {
		const laptop = SCREEN_SIZE_CM.laptop;
		const screen = { width: 1440, height: 900 };
		expect(viewportHeightCm(laptop, screen, { width: 1440, height: 450 })).toBeCloseTo(9.5);
	});
});

describe('toDegrees', () => {
	it('converts radians to degrees', () => {
		expect(toDegrees(0)).toBe(0);
		expect(toDegrees(Math.PI)).toBeCloseTo(180);
		expect(toDegrees(Math.PI / 2)).toBeCloseTo(90);
		expect(toDegrees(Math.PI / 4)).toBeCloseTo(45);
		expect(toDegrees(2 * Math.PI)).toBeCloseTo(360);
	});

	it('handles negative values', () => {
		expect(toDegrees(-Math.PI)).toBeCloseTo(-180);
		expect(toDegrees(-Math.PI / 2)).toBeCloseTo(-90);
	});
});

describe('toRadians', () => {
	it('converts degrees to radians', () => {
		expect(toRadians(0)).toBe(0);
		expect(toRadians(180)).toBeCloseTo(Math.PI);
		expect(toRadians(90)).toBeCloseTo(Math.PI / 2);
		expect(toRadians(45)).toBeCloseTo(Math.PI / 4);
		expect(toRadians(360)).toBeCloseTo(2 * Math.PI);
	});

	it('handles negative values', () => {
		expect(toRadians(-180)).toBeCloseTo(-Math.PI);
		expect(toRadians(-90)).toBeCloseTo(-Math.PI / 2);
	});

	it('round-trips with toDegrees', () => {
		const values = [0, 30, 45, 60, 90, 120, 180, 270, 360];
		for (const deg of values) {
			expect(toDegrees(toRadians(deg))).toBeCloseTo(deg);
		}
	});
});
