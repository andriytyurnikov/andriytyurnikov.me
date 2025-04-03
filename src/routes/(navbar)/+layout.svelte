<script>
	import '../../styles/unstyled.css';
	import GlowingIce from '$lib/glowing-ice/GlowingIce.svelte';
	import { linear, quadIn } from 'svelte/easing';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';
	import { noop, filterHueRotate, filterInvert, filterContrast } from '$lib/glowing-ice/transition';

	let { children } = $props();

	const rules = [
		{
			withType: 'link',
			toRouteId: '/(navbar)/garage/viewport-typography',
			transition: {
				function: scale,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(navbar)/garage/no-more-top-hamburger',
			transition: { function: filterHueRotate, params: { duration: 450, easing: linear } }
		},

		{
			withType: 'link',
			toRouteId: '/(navbar)/garage/glowing-ice',
			transition: { function: blur, params: { duration: 450, amount: '8px', easing: linear } }
		}
	];
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

<div class="ui-shell bg-neutral-900">
	<!-- Responsive NavBar -->
	<nav class="ui-shell-navbar-slot bg-neutral-900">
		<div
			class="ui-shell-navbar justify-between bg-neutral-900/75 backdrop-blur-md text-neutral-100"
		>
			<ul
				class="ui-shell-navbar-section ui-shell-navbar-section--aside justify-self-start items-center"
			>
				<li class="!hidden flex items-stretch pl-6"></li>
			</ul>

			<ul class="ui-shell-navbar-section ui-shell-navbar-section--central">
				<li class="flex grow justify-self-center">
					<a href="/">
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
								d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>

						<!-- Home -->
					</a>
				</li>
				<li class="flex grow justify-self-center">
					<a href="/garage">
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
								d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
							/>
						</svg>
						<!-- Garage -->
					</a>
				</li>
				<li class="flex grow justify-self-center">
					<a href="/friends">
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
								d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
							/>
						</svg>

						<!-- Friends -->
					</a>
				</li>
				<li>&nbsp;</li>
			</ul>

			<ul
				class="ui-shell-navbar-section ui-shell-navbar-section--aside justify-end items-center justify-self-end"
			>
				<li class="!hidden flex">
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
				<li class="!hidden flex">
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
	<main class="ui-shell-main bg-neutral-900 text-neutral-100 flex flex-col flex-1">
		<GlowingIce {rules}>
			<div class="flex flex-col flex-1 justify-stretch grow min-h-full h-full">
				<!-- <ul class="leading-16 grid grid-cols-2">
  				<li><a href="{base}/garage/glowing-ice/by-effect">By Effect</a></li>
  				<li><a href="{base}/garage/glowing-ice/by-type">By NavigationType</a></li>
  			</ul> -->

				{@render children()}
			</div>
		</GlowingIce>
	</main>
</div>

<style>
	@reference "../../styles/unstyled.css";

	.ui-shell-navbar-section li {
		@apply flex grow justify-self-center;
	}

	.ui-shell-navbar-section li a {
		@apply inline-flex items-center size-[4rem] text-center justify-center;
	}

	main {
		@apply bg-center bg-cover bg-neutral-900 text-neutral-50;
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/garage.jpg');
	}

	li {
		@apply self-stretch items-center;
	}

	li a {
		@apply min-h-8 min-w-8 no-underline leading-8 uppercase text-[0.75rem];
	}
</style>
