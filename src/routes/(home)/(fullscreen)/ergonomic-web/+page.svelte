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

<article class="bg-eigengrau-950 text-eigengrau-50">
	<!-- Section 1: Hero -->
	<section
		class="min-h-dvh flex flex-col items-center justify-center px-6 relative z-10 bg-transparent"
	>
		<h1 class="text-4xl tablet:text-5xl laptop:text-6xl font-light tracking-wide text-center mb-4">
			Ergonomic Web
		</h1>
		<p class="text-xl tablet:text-2xl text-eigengrau-100 text-center max-w-prose">
			A page that practices what it preaches
		</p>
		<p class="text-eigengrau-200 mt-8 text-center max-w-md">
			The web should adapt to humans, not the other way around. Scroll to explore four principles
			that make interfaces feel natural.
		</p>
		<div class="mt-12 text-eigengrau-300 animate-bounce">
			<span class="text-2xl">&#8595;</span>
		</div>
	</section>

	<!-- Section 2: Field of View -->
	<!-- Ovals bleed beyond viewport - fixed rem sizes matching visual acuity zones -->
	<section
		class="max-h-dvh max-w-dvw flex flex-col items-center justify-center overflow-visible relative z-0"
	>
		<!-- Outermost: ~60° peripheral vision -->
		<div
			class="rounded-[50%] border border-dashed border-viridis-800 bg-radial from-viridis-700 via-viridis-800/50 to-viridis-900/25 w-[60rem] min-h-[45rem] flex place-items-center place-content-center"
		>
			<!-- ~40° parafoveal -->
			<div
				class="rounded-[50%] border border-dashed border-viridis-700 bg-radial from-viridis-600 via-viridis-700/50 to-viridis-800/25 w-[40rem] min-h-[30rem] flex place-items-center place-content-center"
			>
				<!-- ~30° near-peripheral -->
				<div
					class="rounded-[50%] border border-dashed border-viridis-600 bg-radial from-viridis-500 via-viridis-600/50 to-viridis-700/25 w-[32rem] min-h-[24rem] flex place-items-center place-content-center"
				>
					<!-- ~20° parafoveal edge -->
					<div
						class="rounded-[50%] border border-dashed border-viridis-500 bg-radial from-viridis-50 via-viridis-400/75 to-viridis-600/25 w-[24rem] h-[18rem] flex place-items-center place-content-center"
					>
						<!-- ~10° foveal - sharpest vision -->
						<div
							class="rounded-[50%] border border-dashed border-viridis-400 bg-radial from-viridis-50 via-viridis-300/50 to-viridis-600/25 w-[16rem] h-[12rem] flex place-items-center place-content-center text-center"
						>
							<div class="px-4">
								<h2 class="text-xl font-light mb-2 text-viridis-950">Field of View</h2>
								<p class="text-viridis-900 text-sm mb-2">Sharpest vision follows your gaze.</p>
								<p class="text-viridis-800 text-xs italic">"Place the essential where eyes land"</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Section 3: Device Form-Factors -->
	<section
		class="min-h-dvh flex flex-col items-center justify-center px-6 relative z-10 bg-transparent"
	>
		<div class="w-full max-w-2xl">
			<h2 class="text-2xl tablet:text-3xl font-light mb-4 text-center">Device Form-Factors</h2>
			<p class="text-eigengrau-300 text-center mb-8 max-w-prose mx-auto">
				A CSS pixel on your phone is not the same size as on your monitor. Physical dimensions
				matter.
			</p>

			<!-- Breakpoint indicator -->
			<div class="flex justify-center gap-4 mb-8">
				<div
					class="px-4 py-2 rounded border transition-colors duration-300"
					class:bg-eigengrau-100={breakpoint === 'mobile'}
					class:text-eigengrau-950={breakpoint === 'mobile'}
					class:border-eigengrau-100={breakpoint === 'mobile'}
					class:border-eigengrau-800={breakpoint !== 'mobile'}
				>
					mobile
				</div>
				<div
					class="px-4 py-2 rounded border transition-colors duration-300"
					class:bg-eigengrau-100={breakpoint === 'tablet'}
					class:text-eigengrau-950={breakpoint === 'tablet'}
					class:border-eigengrau-100={breakpoint === 'tablet'}
					class:border-eigengrau-800={breakpoint !== 'tablet'}
				>
					tablet
				</div>
				<div
					class="px-4 py-2 rounded border transition-colors duration-300"
					class:bg-eigengrau-100={breakpoint === 'laptop'}
					class:text-eigengrau-950={breakpoint === 'laptop'}
					class:border-eigengrau-100={breakpoint === 'laptop'}
					class:border-eigengrau-800={breakpoint !== 'laptop'}
				>
					laptop+
				</div>
			</div>

			<!-- Responsive demo box -->
			<div
				class="device-demo border border-eigengrau-800 rounded-lg p-4 tablet:p-6 laptop:p-8 transition-all duration-300"
			>
				<div
					class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 tablet:gap-6 laptop:gap-8"
				>
					<div class="bg-eigengrau-900 rounded p-4 text-center">
						<div class="text-3xl mb-2">1</div>
						<div class="text-eigengrau-500 text-sm">column on mobile</div>
					</div>
					<div class="bg-eigengrau-900 rounded p-4 text-center">
						<div class="text-3xl mb-2">2</div>
						<div class="text-eigengrau-500 text-sm">columns on tablet</div>
					</div>
					<div class="bg-eigengrau-900 rounded p-4 text-center tablet:col-span-2 laptop:col-span-1">
						<div class="text-3xl mb-2">3</div>
						<div class="text-eigengrau-500 text-sm">columns on laptop</div>
					</div>
				</div>
			</div>

			<p class="text-eigengrau-500 text-lg italic text-center mt-8">
				"Design for physical reality, not pixel counts"
			</p>
		</div>
	</section>

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
					<span
						><strong class="text-eigengrau-100">Field of View</strong> — center the essential</span
					>
				</li>
				<li class="flex items-start gap-3">
					<span class="text-eigengrau-500 mt-1">2.</span>
					<span
						><strong class="text-eigengrau-100">Device Form-Factors</strong> — respect physical dimensions</span
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
