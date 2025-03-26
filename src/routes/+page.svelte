<script>
	import '../styles/app.css';
	import { base } from '$app/paths';
</script>

<div
	class="ui-container h-card flex flex-grow flex-col h-full w-full content-center justify-center items-center self-center"
>
	<!-- Profile photo (optional) -->
	<img
		style="clip-path: url(#dyna-squircle-3)"
		class="ui-photo u-photo"
		src="{base}/images/me.png"
		alt="Andriy Tyurnikov"
	/>

	<!-- Name + Homepage link combined -->
	<a class="p-name u-url" href="https://andriytyurnikov.me">Andriy Tyurnikov</a>
	<br />

	<!-- Role/Job title -->
	<p class="p-job-title">Web<sup>1,2,3</sup> Developer</p>
	<br />

	<!-- Location (can be as specific as you want) -->
	<p class="p-locality">Kyiv</p>
	<p class="p-country-name">Ukraine</p>
	<br />

	<!-- Social profiles -->
	<a class="ui-link--out u-url" href="https://github.com/andriytyurnikov" rel="me" target="_blank"
		>GitHub</a
	>
	<a
		class="ui-link--out u-url"
		href="https://www.linkedin.com/in/andriy-tyurnikov-05672176/"
		rel="me"
		target="_blank">LinkedIn</a
	>
	<a class="ui-link--out u-url" href="https://x.com/AndriyTyurnikov" rel="me" target="_blank"
		>Twitter/X</a
	>
	<a class="ui-link--out u-url" href="https://t.me/AndriyTyurnikov/" rel="me" target="_blank"
		>Telegram</a
	>
	<br />

	<!-- Contact methods -->
	<a class="u-email" href="mailto:Andriy.Tyurnikov@gmail.com">Andriy.Tyurnikov@gmail.com</a>
	<a class="u-tel" href="tel:+380-67-106-10-26">+380-67-106-10-26</a>

	<!-- Organization (keep hidden) -->
	<p class="p-org hidden">Rubakas</p>

	<a class="u-url px-2 bg-amber-500 !text-black after:content-['_→']" href="{base}/garage" rel="me"
		>MY GARAGE</a
	>
	<br />
</div>

<div style="height: 0; width: 0;" aria-hidden="true">
	<svg height="0" width="0" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<clipPath clipPathUnits="objectBoundingBox" id="dyna-squircle">
				<path
					d="M 0, 0.5
                Q 0,0 0.5,0
                T 1, 0.5 0.5, 1 0,0.5"
				/>
			</clipPath>

			<clipPath clipPathUnits="objectBoundingBox" id="dyna-squircle-2">
				<path
					d="M 0,.5
                C 0,0  0,0  .5,0
                S 1,0  1,.5  1,1 .5,1  0,1  0,.5"
				/>
			</clipPath>

			<clipPath clipPathUnits="objectBoundingBox" id="dyna-squircle-3">
				<path
					d="M 0,.5
                Q 0,0  0.5,0
                T 1,.5 .5,1 0,.5"
				/>
			</clipPath>

			<filter id="gauss">
				<feGaussianBlur in="SourceGraphic" stdDeviation="0" />
			</filter>
		</defs>
	</svg>
</div>

<style>
	@reference "../styles/app.css";

	:global(html) {
		background-color: theme(--color-blue-800);
		color: theme(--color-white);
	}

	a {
		color: theme(--color-white);
	}
</style>
