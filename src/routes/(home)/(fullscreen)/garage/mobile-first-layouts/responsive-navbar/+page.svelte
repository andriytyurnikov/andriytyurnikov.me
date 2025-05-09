<script>
	import { base } from '$app/paths';
</script>

<div class="ui-shell--grid min-h-dvh">
	<main
		class="bg-sky-300 text-slate-200 ui-shell-main flex flex-col
	        landscape:flex-row
					justify-center"
	>
		<div
			class="h-full w-full flex
			 justify-center self-center items-center"
		>
			<div class="min-w-[20rem]">
				Main Zone
				<br />
				<a href="{base}/garage/mobile-first-layouts" rel="me">back to layouts</a>
			</div>
		</div>
	</main>
	<nav class="bg-slate-900 text-slate-200 ui-shell-navbar-slot justify-center items-center">
		<div class="h-full leading-16 text-center">Nav Bar Slot</div>
	</nav>
</div>

<style>
	@reference "../../../../../../styles/home.css";

	main {
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/images/balance.jpg');
		@apply bg-center bg-cover text-neutral-50;
	}

	li {
		@apply self-stretch items-center;
	}

	li a {
		@apply min-h-8 min-w-8;
	}
</style>
