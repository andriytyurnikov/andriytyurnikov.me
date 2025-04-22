<script>
	import { base } from '$app/paths';
</script>

<article class="min-h-dvh w-full p-4 flex items-center justify-center">
	<section class="ui-el-container">
		<h1 class="text-[3rem]">Responsive Layouts</h1>
		<p>Responsive layouts emerge from acceptance of hard constraints:</p>
		<p>
			There is no "spectrum" of devices &mdash; there are distinct categories:
			<br />
			Smartphones, Tablets, Laptops, Desktops.
			<br />
			Accept finger reach limitations.
		</p>

		<h2 class="text-[2.25rem]">Emerging solutions:</h2>
		<p>
			<a href="{base}/mobile-layouts/centered" rel="me">Centered composition</a> (mostly for landing
			pages)
			<br />
			<a href="{base}/mobile-layouts/portrait-feed" rel="me">Portrait-oriented feed</a>
			<br />
			<a href="{base}/mobile-layouts/shell" rel="me">Appliation Shell (responsive NavBar)</a>
			(often image/video driven)
		</p>
	</section>
</article>

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
	@reference "../../../styles/default.css";
	:global(html) {
		background-color: theme(--color-black);
	}

	:global(body) {
		color: theme(--color-white);
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/images/balance.jpg');
		@apply bg-center bg-cover;
	}

	article {
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/images/balance.jpg');
		@apply bg-center bg-cover;
	}

	p {
		@apply mb-6;
	}
</style>
