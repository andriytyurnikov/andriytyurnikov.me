<script>
	import '../../styles/unstyled.css';
	import { base } from '$app/paths';
	import GlowingIce from '$lib/glowing-ice/GlowingIce.svelte';
	import { linear, quadIn } from 'svelte/easing';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';
	import { noop, filterHueRotate, filterInvert, filterContrast } from '$lib/glowing-ice/transition';

	let { children } = $props();

	const rules = [
		{
			withType: 'link',
			toRouteId: '/(navbar)/friends',
			outro: {
				function: fly,
				params: { duration: 450, easing: linear, x: '-100%', opacity: 1 }
			},
			intro: {
				function: fly,
				params: { duration: 450, easing: linear, x: '100%', opacity: 1 }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(navbar)/garage/viewport-typography',
			intro: {
				function: scale,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(navbar)/garage/viewport-typography',
			outro: {
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
		},
		{
			withType: 'link',
			fromRouteId: '/(navbar)/garage/glowing-ice',
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

			<ul
				class="ui-shell-navbar-section ui-shell-navbar-section--central justify-between laptop:justify-start"
			>
				<a class="ui-navbar-item" href="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="ui-navbar-item-icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
						/>
					</svg>

					<span class="ui-navbar-item-label">Home</span>
				</a>

				<a class="ui-navbar-item" href="/garage">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="ui-navbar-item-icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
						/>
					</svg>
					<span class="ui-navbar-item-label">Garage</span>
				</a>

				<a class="ui-navbar-item" href="{base}/friends">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="ui-navbar-item-icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
						/>
					</svg>

					<span class="ui-navbar-item-label">Friends</span>
				</a>

				<a class="ui-navbar-item" href="{base}/business">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="ui-navbar-item-icon size-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
						/>
					</svg>
					<span class="ui-navbar-item-label">Business</span>
				</a>
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
					<!-- <a href="/about" aria-label="notifications">
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
					</a> -->
				</li>
			</ul>
		</div>
	</nav>

	<!-- main content -->
	<main class="ui-shell-main bg-neutral-900 text-neutral-100 flex flex-col flex-1">
		<GlowingIce {rules}>
			<div class="flex flex-col flex-1 justify-stretch grow min-h-full h-full">
				<!--
				<ul class="leading-16 grid grid-cols-2">
  				<li><a href="{base}/garage/glowing-ice/by-effect">By Effect</a></li>
  				<li><a href="{base}/garage/glowing-ice/by-type">By NavigationType</a></li>
  			</ul>
        -->

				{@render children()}
			</div>
		</GlowingIce>
	</main>
</div>

<style>
	@reference "../../styles/unstyled.css";

	main {
		@apply bg-center bg-cover bg-neutral-900 text-neutral-50;
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/garage.jpg');
	}
</style>
