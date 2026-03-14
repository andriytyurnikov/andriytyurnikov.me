import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getOrientationType, applyOrientation, initOrientationDetection } from './orientation.js';

describe('getOrientationType', () => {
	beforeEach(() => {
		vi.stubGlobal('window', {
			innerWidth: 1024,
			innerHeight: 768,
			screen: { orientation: { type: 'landscape-primary' } }
		});
	});

	afterEach(() => {
		vi.unstubAllGlobals();
	});

	it('returns orientation type from Screen Orientation API', () => {
		expect(getOrientationType()).toBe('landscape-primary');
	});

	it('returns portrait-primary when API reports it', () => {
		window.screen.orientation.type = 'portrait-primary';
		expect(getOrientationType()).toBe('portrait-primary');
	});

	it('returns portrait-secondary when API reports it', () => {
		window.screen.orientation.type = 'portrait-secondary';
		expect(getOrientationType()).toBe('portrait-secondary');
	});

	it('falls back to dimension-based detection when orientation API is missing', () => {
		vi.stubGlobal('window', {
			innerWidth: 768,
			innerHeight: 1024,
			screen: {}
		});
		expect(getOrientationType()).toBe('portrait-primary');
	});

	it('falls back to landscape when width >= height and no API', () => {
		vi.stubGlobal('window', {
			innerWidth: 1024,
			innerHeight: 768,
			screen: {}
		});
		expect(getOrientationType()).toBe('landscape-primary');
	});

	it('returns portrait-primary when window is undefined (SSR)', () => {
		vi.stubGlobal('window', undefined);
		expect(getOrientationType()).toBe('portrait-primary');
	});
});

describe('applyOrientation', () => {
	let root;

	beforeEach(() => {
		root = {
			classList: {
				_classes: new Set(),
				add(cls) {
					this._classes.add(cls);
				},
				remove(...classes) {
					for (const cls of classes) this._classes.delete(cls);
				},
				contains(cls) {
					return this._classes.has(cls);
				}
			},
			dataset: {},
			style: {
				_props: {},
				setProperty(name, value) {
					this._props[name] = value;
				}
			}
		};
		vi.stubGlobal('document', { documentElement: root });
	});

	afterEach(() => {
		vi.unstubAllGlobals();
	});

	it('adds orientation class to document root', () => {
		applyOrientation('landscape-primary');
		expect(root.classList.contains('orientation-landscape-primary')).toBe(true);
	});

	it('removes previous orientation classes', () => {
		root.classList.add('orientation-portrait-primary');
		applyOrientation('landscape-secondary');
		expect(root.classList.contains('orientation-portrait-primary')).toBe(false);
		expect(root.classList.contains('orientation-landscape-secondary')).toBe(true);
	});

	it('sets data-orientation attribute', () => {
		applyOrientation('portrait-secondary');
		expect(root.dataset.orientation).toBe('portrait-secondary');
	});

	it('sets --orientation CSS custom property', () => {
		applyOrientation('landscape-primary');
		expect(root.style._props['--orientation']).toBe('landscape-primary');
	});

	it('does nothing when document is undefined (SSR)', () => {
		vi.stubGlobal('document', undefined);
		expect(() => applyOrientation('portrait-primary')).not.toThrow();
	});
});

describe('initOrientationDetection', () => {
	let orientationListeners;
	let windowListeners;

	beforeEach(() => {
		orientationListeners = {};
		windowListeners = {};

		const root = {
			classList: {
				_classes: new Set(),
				add(cls) {
					this._classes.add(cls);
				},
				remove(...classes) {
					for (const cls of classes) this._classes.delete(cls);
				}
			},
			dataset: {},
			style: {
				setProperty() {}
			}
		};

		vi.stubGlobal('document', { documentElement: root });
		vi.stubGlobal('window', {
			innerWidth: 1024,
			innerHeight: 768,
			screen: {
				orientation: {
					type: 'landscape-primary',
					addEventListener(event, handler) {
						orientationListeners[event] = handler;
					},
					removeEventListener(event, handler) {
						if (orientationListeners[event] === handler) {
							delete orientationListeners[event];
						}
					}
				}
			},
			addEventListener(event, handler) {
				windowListeners[event] = handler;
			},
			removeEventListener(event, handler) {
				if (windowListeners[event] === handler) {
					delete windowListeners[event];
				}
			}
		});
	});

	afterEach(() => {
		vi.unstubAllGlobals();
	});

	it('applies initial orientation on init', () => {
		initOrientationDetection();
		const root = document.documentElement;
		expect(root.classList._classes.has('orientation-landscape-primary')).toBe(true);
	});

	it('subscribes to orientation change events', () => {
		initOrientationDetection();
		expect(orientationListeners['change']).toBeDefined();
		expect(windowListeners['resize']).toBeDefined();
	});

	it('returns a cleanup function that removes listeners', () => {
		const cleanup = initOrientationDetection();
		expect(typeof cleanup).toBe('function');

		cleanup();
		expect(orientationListeners['change']).toBeUndefined();
		expect(windowListeners['resize']).toBeUndefined();
	});

	it('returns noop cleanup when window is undefined (SSR)', () => {
		vi.stubGlobal('window', undefined);
		const cleanup = initOrientationDetection();
		expect(typeof cleanup).toBe('function');
		expect(() => cleanup()).not.toThrow();
	});
});
