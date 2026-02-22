<script>
	import { base } from '$app/paths';
	import SEO from '$lib/SEO.svelte';
</script>

<SEO
	title="About"
	description="Web enthusiast and generalist. SvelteKit, Rails, TypeScript, and more."
	path="/about"
/>

<section
	class="text-slate-200 min-h-full h-full w-full flex grow flex-1 portrait:flex-col landscape:flex-row place-center items-center justify-evenly overflow-y-scroll"
>
	<div class="w-1/2 portrait:w-full w-[16rem] h-[12rem] flex flex-col justify-center">
		<p class="mx-4 italic text-[2rem] mb-6 text-center">"Know thyself"</p>
	</div>
	<div
		class="px-6 flex flex-col w-1/2 portrait:w-full landscape:w-[32rem] h-[20rem] tablet:max-h-[24rem] justify-center place-center items-center"
	>
		<h2 class="text-[1.75rem] font-medium mb-6">About me:</h2>
		<div class="grid w-full">
			<div>
				<p class="mb-4">
					Web enthusiast, Generalist, Tweaker.<br />
					Interested in Web, Typography, Interfaces, Systems.
				</p>
				<p>
					Keywords for HR ;)<br /><br />
					<small class="inline-block">
						Heroku, AWS, Docker, Rails, Node.js, SvelteKit, Svelte, React, Bootstrap, Tailwind,
						Ruby, JavaScript, TypeScript, MySQL, PostgreSQL, Redis, ElasticSearch, REST API, GraphQL
					</small>
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	@reference "../../../../styles/home.css";

	a {
		@apply decoration-dashed decoration-1 underline-offset-4;
	}
</style>
