<script>
	import { base } from '$app/paths';
</script>

<article
	class="min-h-dvh min-w-dvw
        grid
        grid-cols-1
        grid-rows-[1fr_var(--ui-navbar-size)_0px]

        landscape:grid-cols-[1fr_24rem_1fr]
        landscape:grid-rows-1

        tablet:grid-cols-[1fr_24rem_1fr]
        tablet:grid-rows-1

        landscape:tablet:grid-cols-[1fr_32rem_1fr]
        landscape:tablet:grid-rows-1

        laptop:grid-rows-1
        "
>
	<nav
		class="row-2
		      landscape:row-1
		      landscape:min-h-full

					tablet:row-1

					bg-stone-600/75"
	>
		Navigation Slot (Sidebar in landscape orientation)
	</nav>
	<main
		class="row-1 row-1
	        landscape:min-h-full
					landscape:w-[24rem]

					tablet:row-1
					landscape:tablet:w-[32rem]

					laptop:w-[32rem]

					bg-stone-800/75"
	>
		<div class="flex flex-col h-full w-full justify-center items-center">
			<p>
				Main zone:
				<br />
				Content (images ans videos) section
				<br />
				<a href="{base}/garage/mobile-first-layouts" rel="me">back to layouts</a>
			</p>
		</div>
	</main>
	<aside
		class="hidden
		      landscape:block
		      tablet:block

					bg-stone-400/75"
	>
		Optional Secondary zone
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
