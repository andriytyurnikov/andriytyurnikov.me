<script>
	import '../../styles/home.css';
	import { base } from '$app/paths';
</script>

<article
	class="bg-black text-[1.25rem] gap-0 grid grid-cols-1 grid-rows-2 landscape:grid-cols-2 landscape:grid-rows-1 h-dvh w-dvw text-slate-200-200"
>
	<section class="col-span-1 row-span-1 bg-sky-700">
		<div class="p-4 h-full content-center justify-center items-center self-center">
			<div class="flex flex-col content-center">
				<div class="mb-8 flex flex-row justify-center">
					<div class="mr-4">
						<img
							style="clip-path: url(#dyna-squircle-3)"
							class="ui-photo u-photo"
							src="{base}/images/me_ghibli.png"
							alt="Andriy Tyurnikov"
						/>
					</div>
					<div class="leading-8">
						<p class="p-name">Andriy Tyurnikov</p>
						<p class="p-job-title">Web Developer</p>
						<p>
							in <span class="p-locality">Kyiv</span>,<span class="p-country-name">Ukraine</span>
						</p>
					</div>
				</div>

				<div
					class="text-[1rem] content-center justify-center items-center self-center flex flex-col leading-8 text-right"
				>
					<a
						class="u-email text-white decoration-dashed px-4"
						href="mailto:Andriy.Tyurnikov@gmail.com">Andriy.Tyurnikov@gmail.com</a
					>
					<a class="u-tel text-white px-4" href="tel:+380-67-106-10-26">+380-67-106-10-26</a>
				</div>
			</div>
		</div>
	</section>
	<section class="col-span-1 row-span-1 bg-sky-700 text-black">
		<div class="p-4 h-full content-center justify-center items-center self-center text-center">
			<p class="leading-8">
				<a
					data-sveltekit-preload-data
					class="mb-4 cursor-pointer inline-block active:translate-y-1 hover:bg-yellow-300 u-url rounded-md px-4 py-2 bg-yellow-400 text-black no-underline after:content-['_→']"
					href="{base}/garage"
					rel="me">MY GARAGE</a
				><br />
				<a
					class="ui-link--out u-url text-slate-200"
					href="https://github.com/andriytyurnikov"
					rel="me"
					target="_blank">GitHub</a
				><br />
				<a
					class="ui-link--out u-url text-slate-200"
					href="https://www.linkedin.com/in/andriy-tyurnikov-05672176/"
					rel="me"
					target="_blank">LinkedIn</a
				><br />
				<a
					class="ui-link--out u-url text-slate-200"
					href="https://x.com/AndriyTyurnikov"
					rel="me"
					target="_blank">Twitter/X</a
				><br />
				<a
					class="ui-link--out u-url text-slate-200"
					href="https://t.me/AndriyTyurnikov/"
					rel="me"
					target="_blank">Telegram</a
				>
			</p>
		</div>
	</section>
</article>

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
	@reference "../../styles/home.css";

	a {
		@apply decoration-dashed decoration-1 underline-offset-4;
	}
</style>
