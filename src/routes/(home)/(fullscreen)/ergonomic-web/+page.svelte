<script>
	import { base } from '$app/paths';
	import { browser } from '$app/environment';
	import '../../../../styles/home.css';

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

<article class="bg-eigengrau-950 text-macula-100">
	<!-- Section 1: Hero -->
	<section class="min-h-dvh flex flex-col items-center justify-center px-6">
		<h1 class="text-4xl tablet:text-5xl laptop:text-6xl font-light tracking-wide text-center mb-4">
			Ergonomic Web
		</h1>
		<p class="text-xl tablet:text-2xl text-macula-200 text-center max-w-prose">
			A page that practices what it preaches
		</p>
		<p class="text-macula-400 mt-8 text-center max-w-md">
			The web should adapt to humans, not the other way around. Scroll to explore four principles
			that make interfaces feel natural.
		</p>
		<div class="mt-12 text-macula-500 animate-bounce">
			<span class="text-2xl">&#8595;</span>
		</div>
	</section>

	<!-- Section 2: Field of View -->
	<section
		class="min-h-dvh flex flex-col items-center justify-center bg-eigengrau-900 overflow-hidden"
	>
		<!-- Nested ellipses with 4:3 aspect ratio (matching human FOV shape) -->
		<div
			class="rounded-[50%] border border-dashed border-eigengrau-700 bg-radial from-eigengrau-800 via-eigengrau-850/50 to-eigengrau-900/25 w-[20rem] h-[15rem] tablet:w-[36rem] tablet:h-[27rem] laptop:w-[48rem] laptop:h-[36rem] flex place-items-center place-content-center"
		>
			<span class="absolute top-2 tablet:top-4 text-eigengrau-500 text-xs opacity-50">peripheral</span>
			<div
				class="rounded-[50%] border border-dashed border-eigengrau-600 bg-radial from-eigengrau-700 via-eigengrau-800/50 to-eigengrau-850/25 w-[66%] h-[66%] flex place-items-center place-content-center relative"
			>
				<span class="absolute top-2 text-eigengrau-400 text-sm opacity-70">parafoveal</span>
				<div
					class="rounded-[50%] border border-dashed border-eigengrau-500 bg-radial from-macula-900/30 via-eigengrau-700/50 to-eigengrau-800/25 w-[70%] h-[70%] flex place-items-center place-content-center relative"
				>
					<span class="absolute top-1 text-macula-600 text-xs">near-peripheral</span>
					<div
						class="rounded-[50%] border border-dashed border-macula-700 bg-radial from-macula-200/20 via-macula-400/10 to-transparent w-[65%] h-[65%] flex place-items-center place-content-center relative"
					>
						<span class="absolute top-0 text-macula-500 text-xs">foveal</span>
						<!-- Center content - where eyes focus -->
						<div class="text-center px-4 max-w-[90%]">
							<h2 class="text-xl tablet:text-2xl font-light mb-2 text-macula-100">Field of View</h2>
							<p class="text-macula-300 text-sm tablet:text-base mb-3">
								Vision is sharpest here. Detail fades outward.
							</p>
							<p class="text-macula-500 text-sm italic">"Center the essential"</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Section 3: Device Form-Factors -->
	<section class="min-h-dvh flex flex-col items-center justify-center px-6">
		<div class="w-full max-w-2xl">
			<h2 class="text-2xl tablet:text-3xl font-light mb-4 text-center">Device Form-Factors</h2>
			<p class="text-macula-200 text-center mb-8 max-w-prose mx-auto">
				A CSS pixel on your phone is not the same size as on your monitor. Physical dimensions
				matter.
			</p>

			<!-- Breakpoint indicator -->
			<div class="flex justify-center gap-4 mb-8">
				<div
					class="px-4 py-2 rounded border transition-colors duration-300"
					class:bg-macula-100={breakpoint === 'mobile'}
					class:text-eigengrau-950={breakpoint === 'mobile'}
					class:border-macula-100={breakpoint === 'mobile'}
					class:border-eigengrau-700={breakpoint !== 'mobile'}
				>
					mobile
				</div>
				<div
					class="px-4 py-2 rounded border transition-colors duration-300"
					class:bg-macula-100={breakpoint === 'tablet'}
					class:text-eigengrau-950={breakpoint === 'tablet'}
					class:border-macula-100={breakpoint === 'tablet'}
					class:border-eigengrau-700={breakpoint !== 'tablet'}
				>
					tablet
				</div>
				<div
					class="px-4 py-2 rounded border transition-colors duration-300"
					class:bg-macula-100={breakpoint === 'laptop'}
					class:text-eigengrau-950={breakpoint === 'laptop'}
					class:border-macula-100={breakpoint === 'laptop'}
					class:border-eigengrau-700={breakpoint !== 'laptop'}
				>
					laptop+
				</div>
			</div>

			<!-- Responsive demo box -->
			<div
				class="device-demo border border-eigengrau-700 rounded-lg p-4 tablet:p-6 laptop:p-8 transition-all duration-300"
			>
				<div
					class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 tablet:gap-6 laptop:gap-8"
				>
					<div class="bg-eigengrau-800 rounded p-4 text-center">
						<div class="text-3xl mb-2">1</div>
						<div class="text-macula-400 text-sm">column on mobile</div>
					</div>
					<div class="bg-eigengrau-800 rounded p-4 text-center">
						<div class="text-3xl mb-2">2</div>
						<div class="text-macula-400 text-sm">columns on tablet</div>
					</div>
					<div class="bg-eigengrau-800 rounded p-4 text-center tablet:col-span-2 laptop:col-span-1">
						<div class="text-3xl mb-2">3</div>
						<div class="text-macula-400 text-sm">columns on laptop</div>
					</div>
				</div>
			</div>

			<p class="text-macula-400 text-lg italic text-center mt-8">
				"Design for physical reality, not pixel counts"
			</p>
		</div>
	</section>

	<!-- Section 4: Typography -->
	<section class="min-h-dvh flex flex-col items-center justify-center px-6 bg-eigengrau-900">
		<div class="w-full max-w-2xl">
			<h2 class="text-2xl tablet:text-3xl font-light mb-4 text-center">Typography</h2>
			<p class="text-macula-200 text-center mb-8 max-w-prose mx-auto">
				Readable text requires a minimum visual angle. Your eye, not your screen, determines what
				size is comfortable.
			</p>

			<!-- Typography demo -->
			<div class="space-y-6 mb-8">
				<div class="border border-eigengrau-700 rounded-lg p-6">
					<div class="text-macula-400 text-sm mb-2 uppercase tracking-wider">
						Optimized for your device
					</div>
					<p class="typography-demo leading-relaxed">
						This text is sized for comfortable reading at your typical viewing distance. On a phone
						held close, it's smaller in pixels but the same apparent size. On a desktop at arm's
						length, it's larger.
					</p>
				</div>

				<div class="grid grid-cols-3 gap-4 text-center text-sm">
					<div class="bg-eigengrau-800 rounded p-3">
						<div class="text-macula-400">Phone</div>
						<div class="text-macula-200">~30cm</div>
					</div>
					<div class="bg-eigengrau-800 rounded p-3">
						<div class="text-macula-400">Tablet</div>
						<div class="text-macula-200">~40cm</div>
					</div>
					<div class="bg-eigengrau-800 rounded p-3">
						<div class="text-macula-400">Desktop</div>
						<div class="text-macula-200">~60cm</div>
					</div>
				</div>
			</div>

			<p class="text-macula-400 text-lg italic text-center">"Let the eye dictate the size"</p>
		</div>
	</section>

	<!-- Section 5: Handedness -->
	<section class="min-h-dvh flex flex-col px-6 relative">
		<!-- Thumb zone visualization (visible on mobile) -->
		<div class="thumb-zone tablet:hidden"></div>

		<div class="flex-1 flex flex-col items-center justify-center">
			<div class="w-full max-w-2xl">
				<h2 class="text-2xl tablet:text-3xl font-light mb-4 text-center">Handedness</h2>
				<p class="text-macula-200 text-center mb-8 max-w-prose mx-auto">
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
						<div class="text-macula-300">Top of screen</div>
					</div>
					<div
						class="bg-hypnotic-gold-900/30 border border-hypnotic-gold-700 rounded-lg p-4 text-center"
					>
						<div class="text-hypnotic-gold-400 text-sm uppercase tracking-wider mb-1">Moderate</div>
						<div class="text-macula-300">Middle zone</div>
					</div>
					<div
						class="bg-hypnotic-green-900/30 border border-hypnotic-green-700 rounded-lg p-4 text-center"
					>
						<div class="text-hypnotic-green-400 text-sm uppercase tracking-wider mb-1">
							Easy to reach
						</div>
						<div class="text-macula-300">Bottom of screen</div>
					</div>
				</div>

				<p class="text-macula-400 text-lg italic text-center">
					"Put controls where hands can reach"
				</p>
			</div>
		</div>

		<!-- Navigation at bottom - demonstrating the principle -->
		<nav class="py-6 flex justify-center tablet:hidden">
			<a
				href="{base}/garage"
				class="bg-eigengrau-800 border border-eigengrau-600 rounded-full px-6 py-3 text-macula-200 hover:bg-eigengrau-700 transition-colors"
			>
				Back to Garage
			</a>
		</nav>
	</section>

	<!-- Section 6: Conclusion -->
	<section class="min-h-dvh flex flex-col items-center justify-center px-6 bg-eigengrau-900">
		<div class="w-full max-w-lg text-center">
			<h2 class="text-2xl tablet:text-3xl font-light mb-8">Four Pillars</h2>

			<ul class="space-y-4 text-left mb-12">
				<li class="flex items-start gap-3">
					<span class="text-macula-500 mt-1">1.</span>
					<span><strong class="text-macula-100">Field of View</strong> — center the essential</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="text-macula-500 mt-1">2.</span>
					<span
						><strong class="text-macula-100">Device Form-Factors</strong> — respect physical dimensions</span
					>
				</li>
				<li class="flex items-start gap-3">
					<span class="text-macula-500 mt-1">3.</span>
					<span
						><strong class="text-macula-100">Typography</strong> — size for the viewing distance</span
					>
				</li>
				<li class="flex items-start gap-3">
					<span class="text-macula-500 mt-1">4.</span>
					<span><strong class="text-macula-100">Handedness</strong> — place controls within reach</span
					>
				</li>
			</ul>

			<a
				href="{base}/garage"
				class="inline-block bg-macula-100 text-eigengrau-950 rounded-full px-8 py-3 font-medium hover:bg-macula-200 transition-colors"
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
