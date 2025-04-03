<script>
	import { base } from '$app/paths';
</script>

<section
	class="min-h-full h-full w-full flex grow flex-1 portrait:flex-col landscape:flex-row place-center items-center justify-evenly"
>
	<div class="w-1/2 portrait:w-full w-[16rem] h-[12rem] flex flex-col justify-center">
		<p class="mx-4 text-[2rem] mb-6 text-center">"Work with the garage door up"</p>
	</div>
	<div
		class="flex w-1/2 portrait:w-full landscape:w-[32rem] h-[20rem] tablet:h-[24rem] justify-center place-center items-center"
	>
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
				<a href="{base}/garage/no-more-top-hamburger">🔪 NoMoreTopHamburger.com 🍔</a>
			</li>

			<li class="hidden">
				<a href="{base}/garage/display-horizon">🖥️ Display Horizon 🌅</a> &mdash; screens in field of
				view
			</li>

			<li class="hidden text-cyan-200">
				<a href="{base}/garage/mobile-layouts">📱 Mobile Layouts 🖼️</a> &mdash; steal like an artist
			</li>
		</ul>
	</div>
</section>

<style>
	@reference "../../../styles/unstyled.css";

	ul li {
		@apply mb-4;
	}

	li a {
		@apply decoration-dashed decoration-1 underline-offset-4;
	}
</style>
