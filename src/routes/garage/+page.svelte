<script>
	import { base } from '$app/paths';
</script>

<div class="text-neutral-50 container laptop:w-[40rem] laptop:max-w-[40rem] mx-auto text-left">
	<!-- <header class="text-left h-32 pt-6 w-full">
		<h1 class="text-left text-2xl font-bold">Garage</h1>
	</header> -->
	<article class="mx-4 py-4 laptop:mx-0">
		<p class="text-[2rem] mb-6">"Work with the garage door up"</p>
		<ul class="text-[1.25rem] leading-[1.875rem]">
			Web UI related:
			<li class="mt-4">
				<a href="{base}/garage/fov-map">🌇 Field of View Map 🗺️</a>
			</li>

			<li>
				<a href="{base}/garage/viewport-typography">👁️ Viewport Typography 🔠</a>
			</li>

			<li class="text-cyan-200">
				<a href="{base}/garage/glowing-ice">✨ Glowing Ice Animations 🧊</a>
			</li>

			<li>
				<a href="{base}/garage/no-more-top-hamburger">🔪 No More Top Hamburger 🍔</a>
			</li>

			<li class="hidden">
				<a href="{base}/garage/display-horizon">🖥️ Display Horizon 🌅</a> &mdash; screens in field of
				view
			</li>

			<li class="hidden text-cyan-200">
				<a href="{base}/garage/mobile-layouts">📱 Mobile Layouts 🖼️</a> &mdash; steal like an artist
			</li>
		</ul>
	</article>
</div>

<style>
	@reference "../../styles/unstyled.css";

	ul li {
		@apply mb-4;
	}

	li a {
		@apply decoration-dashed decoration-1 underline-offset-4;
	}
</style>
