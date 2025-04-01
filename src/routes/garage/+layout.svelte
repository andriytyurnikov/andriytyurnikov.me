<script>
	let { children } = $props();
	import '../../styles/unstyled.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
		rel="stylesheet"
	/>

	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="ui-shell">
	<!-- Responsive NavBar -->
	<nav class="ui-shell-navbar-slot">
		<div
			class="ui-shell-navbar justify-between bg-neutral-900/75 backdrop-blur-md text-neutral-100"
		>
			<ul
				class="ui-shell-navbar-section ui-shell-navbar-section--aside justify-self-start items-center"
			>
				<li class="hidden flex items-stretch pl-6">Title</li>
			</ul>

			<ul class="ui-shell-navbar-section ui-shell-navbar-section--central">
				<li class="flex grow justify-self-center"><a href="/">Home</a></li>
				<li class="flex grow justify-self-center"><a href="/garage">Garage</a></li>
				<li class="flex grow justify-self-center"><a href="/garage/friends">Friends</a></li>
				<li class="flex grow justify-self-center"><a href="/contact">Follow me</a></li>
			</ul>

			<ul
				class="ui-shell-navbar-section ui-shell-navbar-section--aside justify-end items-center justify-self-end"
			>
				<li class="hidden flex">
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
				<li class="hidden flex">
					<a href="/about" aria-label="notifications">
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
								d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
							/>
						</svg>
					</a>
				</li>
			</ul>
		</div>
	</nav>

	<!-- main content -->
	<main class="ui-shell-main bg-neutral-300 text-neutral-950">
		{@render children()}
	</main>
</div>

<style>
	@reference "../../styles/unstyled.css";

	main {
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/images/garage.jpg');
		@apply bg-center bg-cover text-neutral-50;
	}

	li {
		@apply self-stretch items-center;
	}

	li a {
		@apply min-h-8 min-w-8 no-underline leading-8;
	}
</style>
