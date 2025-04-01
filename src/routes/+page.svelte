<script>
	import '../styles/app.css';
	import { base } from '$app/paths';
</script>

<article
	class="text-[1.25rem] gap-0 grid grid-cols-1 grid-rows-2 landscape:grid-cols-2 landscape:grid-rows-1 h-dvh w-dvw bg-neutral-800 text-neutral-100"
>
	<section class="col-span-1 row-span-1 bg-ukraine-blue">
		<div class="p-5 h-full content-center justify-center items-center self-center">
			<div class="flex flex-row content-center justify-center">
				<div class="mr-4">
					<img
						style="clip-path: url(#dyna-squircle-3)"
						class="ui-photo u-photo"
						src="{base}/images/me.png"
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

			<p class="mt-8 text-[1rem] leading-12 text-right">
				<a class="u-email text-white" href="mailto:Andriy.Tyurnikov@gmail.com"
					>Andriy.Tyurnikov@gmail.com</a
				>
				<span class="inline-flex p-2 bg-neutral-800 rounded-sm">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
						/>
					</svg>
				</span>
				<br />
				<a class="u-tel text-white" href="tel:+380-67-106-10-26">+380-67-106-10-26</a>
				<span class="inline-flex p-2 bg-neutral-800 rounded-sm">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
						/>
					</svg>
				</span>
				<br />
			</p>
		</div>
	</section>
	<section class="col-span-1 row-span-1 bg-ukraine-yellow text-black">
		<div class="p-5 h-full content-center justify-center items-center self-center text-center">
			<p class="leading-12">
				<a
					class="u-url rounded-md p-4 bg-ukraine-blue text-white no-underline after:content-['_→']"
					href="{base}/garage"
					rel="me">MY GARAGE</a
				><br /><br />
				<a
					class="ui-link--out u-url text-black"
					href="https://github.com/andriytyurnikov"
					rel="me"
					target="_blank">GitHub</a
				><br />
				<a
					class="ui-link--out u-url text-black"
					href="https://www.linkedin.com/in/andriy-tyurnikov-05672176/"
					rel="me"
					target="_blank">LinkedIn</a
				><br />
				<a
					class="ui-link--out u-url text-black"
					href="https://x.com/AndriyTyurnikov"
					rel="me"
					target="_blank">Twitter/X</a
				><br />
				<a
					class="ui-link--out u-url text-black"
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
	@reference "../styles/app.css";

	:global(html) {
		background-color: theme(--color-blue-800);
		color: theme(--color-white);
	}
</style>
