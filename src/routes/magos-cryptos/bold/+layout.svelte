<script>
	import '../../../styles/magos-cryptos.css';
	import { base } from '$app/paths';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Saira:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>

	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="ui-shell">
	<!-- Responsive NavBar -->
	<nav class="ui-shell-navbar-slot">
		<div class="ui-shell-navbar justify-between bg-gray-950/75 backdrop-blur-md text-gray-100">
			<ul
				class="ui-shell-navbar-section ui-shell-navbar-section--aside justify-self-start items-center"
			>
				<li
					class="flex items-stretch pl-6 font-cinzel-decorative font-bold text-[1.75rem] tracking-widest"
				>
					BOLD
				</li>
			</ul>

			<ul class="ui-shell-navbar-section ui-shell-navbar-section--central">
				<li class="flex grow justify-self-center"><a href="{base}/bold">Dashboard</a></li>
				<li class="flex grow justify-self-center">
					<a href="{base}/bold/borrow">Borrow</a>
				</li>
				<li class="flex grow justify-self-center">
					<a href="{base}/bold/multiply">Multiply</a>
				</li>
				<li class="flex grow justify-self-center"><a href="{base}/bold/earn">Earn</a></li>
				<li class="flex grow justify-self-center"><a href="{base}/bold/stake">Stake</a></li>
			</ul>

			<ul
				class="ui-shell-navbar-section ui-shell-navbar-section--aside justify-end items-center justify-self-end"
			>
				<li class="flex">
					<a href="/" aria-label="profile" class="align-bottom">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
							/>
						</svg>
					</a>
				</li>
			</ul>
		</div>
	</nav>

	<!-- main content -->
	<main class="ui-shell-main text-neutral-950 flex flex-col justify-stretch">
		{@render children()}
	</main>
</div>

<style>
	@reference "../../../styles/magos-cryptos.css";

	:global(html, body) {
		@apply bg-gray-950;
	}

	main {
		@apply text-gray-50;
	}

	li {
		@apply self-stretch items-center;
	}

	li a {
		@apply min-h-8 min-w-8;
	}
</style>
