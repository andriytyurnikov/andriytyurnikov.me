<script>
	import { base } from '$app/paths';
	import SEO from '$lib/SEO.svelte';
</script>

<SEO
	title="Garage"
	description="Experiments and tools: ergonomic typography, mobile-first layouts, field of view."
	path="/garage"
/>

<section
	class="text-slate-200 min-h-full h-full w-full flex grow flex-1 portrait:flex-col landscape:flex-row place-center items-center justify-evenly"
>
	<div class="w-1/2 portrait:w-full w-[16rem] h-[12rem] flex flex-col justify-center">
		<p class="mx-4 italic text-[2rem] mb-6 text-center">"Work with the garage door up"</p>
	</div>
	<div
		class="flex flex-col w-1/2 portrait:w-full landscape:w-[32rem] h-[20rem] tablet:max-h-[24rem] justify-center place-center items-center"
	>
		<h2 class="text-[1.75rem] font-medium mb-6">Web, UI/UX related:</h2>
		<ul class="text-[1.25rem] leading-[1.875rem]">
			<li class="mt-4">
				<a href="{base}/garage/fov-map">🌇 Field of View Map 🗺️</a>
			</li>

			<li>
				<a href="{base}/garage/ergonomic-typography">👁️ Ergonomic Typography 🔠</a>
			</li>

			<li>
				<a href="{base}/garage/no-more-top-hamburger">🔪 NoMoreTopHamburger.com 🍔</a>
			</li>

			<li>
				<a href="{base}/garage/mobile-first-layouts">📱 Mobile-first Layouts 🖼️</a>
			</li>

			<li class="text-cyan-200">
				<a href="{base}/garage/glowing-ice">✨ Glowing Ice Animations 🧊</a>
			</li>

			<li>
				<a
					rel="me"
					target="_blank"
					class="ui-link-out u-url after:content-['_↗']"
					href="https://rubygems.org/gems/clamo">📣 Clamo 💎</a
				> : Ruby via JSON-RPC.
			</li>
		</ul>
	</div>
</section>

<style>
	@reference "../../../../styles/home.css";

	ul li {
		@apply mb-4;
	}

	li a {
		@apply decoration-dashed decoration-1 underline-offset-4;
	}
</style>
