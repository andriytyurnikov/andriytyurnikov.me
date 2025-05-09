<script>
	import { base } from '$app/paths';
</script>

<section
	class="text-slate-200 min-h-full h-full w-full flex grow flex-1 portrait:flex-col landscape:flex-row place-center items-center justify-evenly overflow-y-scroll"
>
	<div class="w-1/2 portrait:w-full w-[16rem] h-[12rem] flex flex-col justify-center">
		<p class="mx-4 italic text-[2rem] mb-6 text-center">"The warmth of shared craft"</p>
	</div>
	<div
		class="px-6 flex flex-col w-1/2 portrait:w-full landscape:w-[32rem] h-[20rem] tablet:max-h-[24rem] justify-center place-center items-center"
	>
		<h2 class="text-[1.75rem] font-medium mb-6">Friends in craft:</h2>
		<div class="grid grid-cols-2 gap-4 landscape:grid-cols-2 tablet:grid-cols-2 w-full">
			<div>
				<h3 class="font-medium text-[1.25rem]">Radial and Zoom UIs:</h3>
				<p class="mb-4">
					<a
						class="after:content-['_↗']"
						href="https://github.com/tinchox5"
						target="_blank"
						rel="noopener"
					>
						Juan Martin
					</a>
				</p>

				<h3 class="font-medium text-[1.25rem]">Mobile & AR/VR:</h3>
				<p class="mb-4">
					<a
						class="after:content-['_↗']"
						href="https://github.com/ALexanderLonsky"
						target="_blank"
						rel="noopener"
					>
						Alexander Lonsky
					</a>
				</p>
			</div>
			<div>
				<h3 class="font-medium text-[1.25rem]">Web<sup>3</sup> and DeFi:</h3>
				<p class="mb-4">
					<a
						class="after:content-['_↗']"
						href="https://magoscryptos.dev"
						target="_blank"
						rel="noopener"
					>
						Magos Cryptos
					</a>
				</p>

				<h3 class="font-medium text-[1.25rem]">Ruby on Rails:</h3>
				<p class="mb-4">
					<a
						class="after:content-['_↗']"
						href="https://verkligheten.github.io/"
						target="_blank"
						rel="noopener"
					>
						Eugene Naumov
					</a>,<br />
					<a
						class="after:content-['_↗']"
						href="https://cupatea.github.io/"
						target="_blank"
						rel="noopener"
					>
						Vladyslav Davydenko
					</a>,<br />
					<a
						class="after:content-['_↗']"
						href="https://vsnares.github.io/"
						target="_blank"
						rel="noopener"
					>
						Markell Pohosov
					</a>
					<br />
					<!-- AKA
					<a
						class="after:content-['_↗']"
						href="https://rubakas.com"
						target="_blank"
						rel="noopener"
					>
						Rubakas
					</a> -->
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
