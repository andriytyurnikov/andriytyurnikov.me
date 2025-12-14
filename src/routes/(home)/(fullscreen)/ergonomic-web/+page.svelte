<script>
	import { base } from '$app/paths';
	import { browser } from '$app/environment';
	import '../../../../styles/home.css';

	import HeroSection from './HeroSection.svelte';
	import FieldOfViewSection from './FieldOfViewSection.svelte';
	import DeviceFormFactorsSection from './DeviceFormFactorsSection.svelte';

	let breakpoint = $state('mobile');

	$effect(() => {
		if (browser) {
			const update = () => {
				const w = window.innerWidth;
				breakpoint = w >= 1200 ? 'laptop' : w >= 507 ? 'tablet' : 'mobile';
			};
			update();
			window.addEventListener('resize', update);
			return () => window.removeEventListener('resize', update);
		}
	});
</script>

<article class="bg-eigengrau-950 text-eigengrau-50">
	<HeroSection />
	<FieldOfViewSection />

	<DeviceFormFactorsSection />

	<!-- Section 4: Typography -->
	<section class="min-h-dvh flex flex-col items-center justify-center px-6 bg-eigengrau-950">
		<div class="w-full max-w-2xl">
			<h2 class="text-2xl tablet:text-3xl font-light mb-4 text-center">Typography</h2>
			<p class="text-eigengrau-300 text-center mb-8 max-w-prose mx-auto">
				Readable text requires a minimum visual angle. Your eye, not your screen, determines what
				size is comfortable.
			</p>

			<!-- Typography demo -->
			<div class="space-y-6 mb-8">
				<div class="border border-eigengrau-800 rounded-lg p-6">
					<div class="text-eigengrau-500 text-sm mb-2 uppercase tracking-wider">
						Optimized for your device
					</div>
					<p class="typography-demo leading-relaxed">
						This text is sized for comfortable reading at your typical viewing distance. On a phone
						held close, it's smaller in pixels but the same apparent size. On a desktop at arm's
						length, it's larger.
					</p>
				</div>

				<div class="grid grid-cols-3 gap-4 text-center text-sm">
					<div class="bg-eigengrau-900 rounded p-3">
						<div class="text-eigengrau-500">Phone</div>
						<div class="text-eigengrau-300">~30cm</div>
					</div>
					<div class="bg-eigengrau-900 rounded p-3">
						<div class="text-eigengrau-500">Tablet</div>
						<div class="text-eigengrau-300">~40cm</div>
					</div>
					<div class="bg-eigengrau-900 rounded p-3">
						<div class="text-eigengrau-500">Desktop</div>
						<div class="text-eigengrau-300">~60cm</div>
					</div>
				</div>
			</div>

			<p class="text-eigengrau-500 text-lg italic text-center">"Let the eye dictate the size"</p>
		</div>
	</section>

	<!-- Section 5: Handedness -->
	<section class="min-h-dvh flex flex-col px-6 relative">
		<!-- Thumb zone visualization (visible on mobile) -->
		<div class="thumb-zone tablet:hidden"></div>

		<div class="flex-1 flex flex-col items-center justify-center">
			<div class="w-full max-w-2xl">
				<h2 class="text-2xl tablet:text-3xl font-light mb-4 text-center">Handedness</h2>
				<p class="text-eigengrau-300 text-center mb-8 max-w-prose mx-auto">
					On touch devices, your thumb can only reach so far. The bottom of the screen is easy; the
					top is a stretch.
				</p>

				<div class="grid grid-cols-1 tablet:grid-cols-3 gap-4 mb-8">
					<div
						class="bg-saccadic-red-flash-900/30 border border-saccadic-red-flash-700 rounded-lg p-4 text-center"
					>
						<div class="text-saccadic-red-flash-400 text-sm uppercase tracking-wider mb-1">
							Hard to reach
						</div>
						<div class="text-eigengrau-300">Top of screen</div>
					</div>
					<div
						class="bg-hypnotic-gold-900/30 border border-hypnotic-gold-700 rounded-lg p-4 text-center"
					>
						<div class="text-hypnotic-gold-400 text-sm uppercase tracking-wider mb-1">Moderate</div>
						<div class="text-eigengrau-300">Middle zone</div>
					</div>
					<div
						class="bg-hypnotic-green-900/30 border border-hypnotic-green-700 rounded-lg p-4 text-center"
					>
						<div class="text-hypnotic-green-400 text-sm uppercase tracking-wider mb-1">
							Easy to reach
						</div>
						<div class="text-eigengrau-300">Bottom of screen</div>
					</div>
				</div>

				<p class="text-eigengrau-500 text-lg italic text-center">
					"Put controls where hands can reach"
				</p>
			</div>
		</div>

		<!-- Navigation at bottom - demonstrating the principle -->
		<nav class="py-6 flex justify-center tablet:hidden">
			<a
				href="{base}/garage"
				class="bg-eigengrau-900 border border-eigengrau-700 rounded-full px-6 py-3 text-eigengrau-300 hover:bg-eigengrau-800 transition-colors"
			>
				Back to Garage
			</a>
		</nav>
	</section>

	<!-- Section 6: Conclusion -->
	<section class="min-h-dvh flex flex-col items-center justify-center px-6 bg-eigengrau-950">
		<div class="w-full max-w-lg text-center">
			<h2 class="text-2xl tablet:text-3xl font-light mb-8">Four Pillars</h2>

			<ul class="space-y-4 text-left mb-12">
				<li class="flex items-start gap-3">
					<span class="text-eigengrau-500 mt-1">1.</span>
					<span><strong class="text-eigengrau-100">Field of View</strong> — eyes before pixels</span
					>
				</li>
				<li class="flex items-start gap-3">
					<span class="text-eigengrau-500 mt-1">2.</span>
					<span
						><strong class="text-eigengrau-100">Device Form-Factors</strong> — respect physical reality</span
					>
				</li>
				<li class="flex items-start gap-3">
					<span class="text-eigengrau-500 mt-1">3.</span>
					<span
						><strong class="text-eigengrau-100">Typography</strong> — size for the viewing distance</span
					>
				</li>
				<li class="flex items-start gap-3">
					<span class="text-eigengrau-500 mt-1">4.</span>
					<span
						><strong class="text-eigengrau-100">Handedness</strong> — place controls within reach</span
					>
				</li>
			</ul>

			<a
				href="{base}/garage"
				class="inline-block bg-eigengrau-100 text-eigengrau-950 rounded-full px-8 py-3 font-medium hover:bg-eigengrau-200 transition-colors"
			>
				Back to Garage
			</a>
		</div>
	</section>
</article>

<style>
	@reference '../../../../styles/home.css';

	/* Thumb zone gradient overlay */
	.thumb-zone {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: linear-gradient(
			to bottom,
			oklch(66.02% 0.22936 35.403 / 0.15) 0%,
			oklch(88.677% 0.18219 95.33 / 0.1) 50%,
			oklch(87.493% 0.23526 151.02 / 0.15) 100%
		);
	}

	/* Typography demo - size adapts to device */
	.typography-demo {
		font-size: 1rem;
	}

	@media (min-width: 507px) and (min-height: 507px) {
		.typography-demo {
			font-size: 1.125rem;
		}
	}

	@media (min-width: 1200px) {
		.typography-demo {
			font-size: 1.25rem;
		}
	}
</style>
