<script>
	import { base } from '$app/paths';
</script>

<article class="min-h-dvh w-full flex flex-col items-stretch bg-stone-950">
	<nav
		class="bg-stone-600/75 h-(--navbar-size) order-3 w-full fixed bottom-0 laptop:w-[calc((100%-28rem)/2)] laptop:h-full laptop:left-0"
	>
		<p class="text-2xl">Navigation Zone</p>
	</nav>
	<main
		class="bg-stone-800/75 flex-1 order-2 mb-(--navbar-size) laptop:mb-0 laptop:mx-[calc((100%-28rem)/2)]"
	>
		<div class="flex flex-col flex-1 items-center justify-center">
			<section>
				<h1 class="text-[2.25rem]">Portrait-oriented content feed</h1>
				<p>
					Content (images ans videos) section
					<br />
					<a href="{base}/garage/mobile-first-layouts" rel="me">back to layouts</a>
				</p>
			</section>
		</div>
	</main>
	<aside
		class="bg-stone-200/75 text-stone-950 h-[9rem] order-1 laptop:w-[calc((100%-28rem)/2)] laptop:h-full laptop:right-0 laptop:fixed"
	>
		<p class="text-2xl">Secondary/Optional Zone</p>
	</aside>
</article>

<style>
	@reference "../../../../../../styles/home.css";

	article {
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/balance.jpg');
		@apply bg-center bg-cover;
	}

	p {
		@apply mb-6;
	}
</style>
