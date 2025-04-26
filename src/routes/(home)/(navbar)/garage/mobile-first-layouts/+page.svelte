<script>
	import { base } from '$app/paths';
</script>

<section class="ui-el-container">
	<h1 class="text-[2.25rem]">Mobile-first Layouts</h1>
	<p class="text-balance">
		Mobile-first responsive layouts emerge from acceptance of hard constraints:
	</p>
	<p>
		There is no "spectrum" of devices &mdash; there are distinct categories:
		<br />
		Smartphones, Tablets, Laptops, Desktops.
		<br />
		Accept finger reach limitations.
	</p>

	<h2 class="text-[2.25rem]">Emerging solutions:</h2>
	<p>
		<a href="{base}/garage/mobile-first-layouts/responsive-navbar" rel="me">Responsive NavBar</a>
		<br />
		<a href="{base}/garage/mobile-first-layouts/portrait-feed" rel="me">Portrait feed</a>
		(often image/video driven)
		<br />
		<a href="{base}/garage/mobile-first-layouts/cover" rel="me">Cover</a>
		(mostly for landing pages)<br />
		<!-- <a href="{base}/garage/mobile-first-layouts/long-side-halves" rel="me">Long side halves</a>
		<br />
		<a href="{base}/garage/mobile-first-layouts/long-side-thirds" rel="me">Long side thirds</a>
		<br /> -->
	</p>
</section>

<!--article class="min-h-dvh w-full p-4 flex items-center justify-center">
	<section class="ui-el-container flex flex-col flex-1 min-h-full">
		<h1 class="text-[2.25rem] mb-8">Primitives from the<br /> "Every Layout" book</h1>
		<div
			class="flex-1 w-full min-h-full items-stretch grid grid-rows-4 grid-cols-3 tablet:landscape:grid-rows-3 tablet:landscape:grid-cols-4 laptop:grid-rows-3 laptop:grid-cols-4"
		>
			<div class="h-24">01 Stack</div>
			<div>02 Box</div>
			<div>03 Center</div>
			<div>04 Cluster</div>
			<div>05 Sidebar</div>
			<div>06 Switcher</div>
			<div>07 Cover</div>
			<div>08 Grid</div>
			<div>09 Frame</div>
			<div>10 Reel</div>
			<div>11 Imposter</div>
			<div>12 Icon</div>
		</div>
	</section>
</article-->

<style>
	@reference "../../../../../styles/home.css";

	p {
		@apply mb-6;
	}
</style>
