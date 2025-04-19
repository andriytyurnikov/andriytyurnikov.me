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
		class="px-6 flex flex-col w-1/2 portrait:w-full landscape:w-[32rem] h-[20rem] tablet:h-[24rem] justify-center place-center items-center"
	>
		<h2 class="text-[2rem] font-bold mb-6">Friends in craft:</h2>
		<div class="grid landscape:grid-cols-2 tablet:grid-cols-2 w-full">
			<div>
				<h3>Radial and Zoom UIs:</h3>
				<p>
					<a
						class="after:content-['_↗']"
						href="https://github.com/tinchox5"
						target="_blank"
						rel="noopener"
					>
						Juan Martin
					</a>
				</p>

				<h3>Mobile & AR/VR:</h3>
				<p>
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
				<h3>Web & Ruby on Rails:</h3>
				<p>
					<a
						class="after:content-['_↗']"
						href="https://verkligheten.github.io/"
						target="_blank"
						rel="noopener"
					>
						Eugene Naumov
					</a>,
					<a
						class="after:content-['_↗']"
						href="https://cupatea.github.io/"
						target="_blank"
						rel="noopener"
					>
						Vladyslav Davydenko
					</a>,
					<a
						class="after:content-['_↗']"
						href="https://vsnares.github.io/"
						target="_blank"
						rel="noopener"
					>
						Markell Pohosov
					</a>
					<br />
					AKA
					<a
						class="after:content-['_↗']"
						href="https://rubakas.com"
						target="_blank"
						rel="noopener"
					>
						Rubakas
					</a>
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	@reference "../../../styles/unstyled.css";

	h3 {
		@apply mb-4;
	}

	p {
		@apply mb-6 leading-8;
	}

	a {
		@apply decoration-dashed decoration-1 underline-offset-4;
	}
</style>
