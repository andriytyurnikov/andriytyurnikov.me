<script>
	import { base } from '$app/paths';
</script>

<section
	class="text-yellow-50 min-h-full h-full w-full flex grow flex-1 portrait:flex-col landscape:flex-row place-center items-center justify-evenly"
>
	<div class="w-1/2 portrait:w-full w-[16rem] h-[12rem] flex flex-col justify-center">
		<p class="mx-4 text-[2rem] mb-6 text-center">"The warmth of shared craft"</p>
	</div>
	<div
		class="flex flex-col w-1/2 portrait:w-full landscape:w-[32rem] h-[20rem] tablet:h-[24rem] justify-center place-center items-center"
	>
		Friends in craft:
		<ul class="pl-0 list-disc list-inside !mb-0 md:columns-2 md:gap-x-12 w-full">
			RadialUIs and ZoomUIs:
			<li class="text-blue-100">
				<a
					class="after:content-['_↗']"
					href="https://github.com/tinchox5"
					target="_blank"
					rel="noopener"
				>
					Juan Martin
				</a>
			</li>

			Mobile & AR/VR:
			<li>
				<a
					class="after:content-['_↗']"
					href="https://github.com/ALexanderLonsky"
					target="_blank"
					rel="noopener"
				>
					Alexander Lonsky
				</a>
			</li>

			<li class="text-blue-100">
				<a class="after:content-['_↗']" href="https://alamak.app/" target="_blank" rel="noopener">
					Alamak Oy
				</a>
			</li>

			Web & Ruby on Rails:
			<li class="text-blue-100">
				<a
					class="after:content-['_↗']"
					href="https://verkligheten.github.io/"
					target="_blank"
					rel="noopener"
				>
					Eugene Naumov
				</a>
			</li>

			<li class="text-blue-100">
				<a
					class="after:content-['_↗']"
					href="https://vsnares.github.io/"
					target="_blank"
					rel="noopener"
				>
					Markell Pohosov
				</a>
			</li>

			<li class="text-blue-100">
				<a
					class="after:content-['_↗']"
					href="https://cupatea.github.io/"
					target="_blank"
					rel="noopener"
				>
					Vladyslav Davydenko
				</a>
			</li>
			AKA
			<a class="after:content-['_↗']" href="https://rubakas.com" target="_blank" rel="noopener">
				Rubakas
			</a>
		</ul>
	</div>
</section>

<style>
	@reference "../../../styles/unstyled.css";

	ul li {
		@apply mb-4;
	}

	li a {
		@apply decoration-dashed decoration-1 underline-offset-4;
	}
</style>
