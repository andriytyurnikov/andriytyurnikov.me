<script>
	import { base } from '$app/paths';
</script>

<div class="text-neutral-50 container laptop:w-[40rem] laptop:max-w-[40rem] mx-auto text-left">
	<!-- <header class="text-left h-32 pt-6 w-full">
		<h1 class="text-left text-2xl font-bold">Garage</h1>
	</header> -->
	<article class="mx-4 laptop:mx-0">
		<ul class="text-[1.25rem] leading-[2.5rem]">
			<li class="text-cyan-200">
				<a href="{base}/garage/glowing-ice">✨ Glowing Ice 🧊</a> &mdash; route transitions for SvelteKit
			</li>

			<li class="text-sky-200">
				<a href="{base}/garage/viewport-type">👁️ Viewport Type 🔠</a> &mdash; responsive font size calculator
			</li>

			<li class="text-fuchsia-200">
				<a href="{base}/garage/display-horizon">🖥️ Display Horizon 🌅</a> &mdash; screens in field of
				view
			</li>

			<li class="text-yellow-200">
				<a href="{base}/garage/no-more-top-hamburger">🔪 No More Top Hamburger 🍔</a> &mdash; abandon
				hamburger menu
			</li>

			<hr class="mt-4 mb-6 border-cyan-200" />

			<li class="text-purple-200">
				<a href="{base}/garage/fov-map">🌇 Field of View Map 🗺️</a> &mdash; in the eye of the beholder
			</li>

			<li class="text-cyan-200">
				<a href="{base}/garage/mobile-layouts">📱 Mobile Layouts 🖼️</a> &mdash; steal like an artist
			</li>
		</ul>
	</article>
</div>

<style>
	@reference "../../styles/unstyled.css";

	li a {
		@apply decoration-dashed decoration-1 underline-offset-4;
	}
</style>
