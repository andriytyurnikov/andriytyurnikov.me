<!-- Ovals bleed beyond viewport - fixed rem sizes matching visual acuity zones -->
<section
	class="bg-eigengrau max-h-dvh max-w-dvw flex flex-col items-center justify-center overflow-y-visible overflow-x-clip relative z-[2]"
>
	<!-- Outermost: ~60° peripheral vision -->
	<div
		class="rounded-[50%] bg-radial from-viridis-700 via-viridis-800/20 to-viridis-900/10 w-[60rem] min-h-[45rem] flex place-items-center place-content-center"
	>
		<!-- ~40° parafoveal -->
		<div
			class="rounded-[50%] bg-radial from-viridis-600 via-viridis-700/20 to-viridis-800/10 w-[40rem] min-h-[30rem] flex place-items-center place-content-center"
		>
			<!-- ~30° near-peripheral -->
			<div
				class="rounded-[50%] bg-radial from-viridis-500 via-viridis-600/20 to-viridis-700/10 w-[32rem] min-h-[24rem] flex place-items-center place-content-center"
			>
				<!-- ~20° parafoveal edge -->
				<div
					class="rounded-[50%] bg-radial from-viridis-50 via-viridis-400/20 to-viridis-600/10 w-[24rem] h-[18rem] flex place-items-center place-content-center"
				>
					<!-- ~10° foveal - sharpest vision -->
					<div
						class="rounded-[50%] bg-radial from-viridis-50 via-viridis-300/20 to-viridis-600/10 w-[16rem] h-[12rem] flex place-items-center place-content-center text-center"
					>
						<div class="px-4">
							<h2 class="text-xl font-light mb-2 text-viridis-950">Field of View</h2>
							<p class="text-viridis-900 text-sm mb-2">Sharpest vision follows your gaze.</p>
							<p class="text-viridis-800 text-xs italic">"Place the essential where eyes land"</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
