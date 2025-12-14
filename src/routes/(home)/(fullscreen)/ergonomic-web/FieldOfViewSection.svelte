<!-- Ovals bleed beyond viewport - fixed rem sizes matching visual acuity zones -->
<section
	class="max-h-dvh max-w-dvw flex flex-col items-center justify-center overflow-visible relative z-0"
>
	<!-- Outermost: ~60° peripheral vision -->
	<div
		class="rounded-[50%] border border-dashed border-viridis-800 bg-radial from-viridis-700 via-viridis-800/50 to-viridis-900/25 w-[60rem] min-h-[45rem] flex place-items-center place-content-center"
	>
		<!-- ~40° parafoveal -->
		<div
			class="rounded-[50%] border border-dashed border-viridis-700 bg-radial from-viridis-600 via-viridis-700/50 to-viridis-800/25 w-[40rem] min-h-[30rem] flex place-items-center place-content-center"
		>
			<!-- ~30° near-peripheral -->
			<div
				class="rounded-[50%] border border-dashed border-viridis-600 bg-radial from-viridis-500 via-viridis-600/50 to-viridis-700/25 w-[32rem] min-h-[24rem] flex place-items-center place-content-center"
			>
				<!-- ~20° parafoveal edge -->
				<div
					class="rounded-[50%] border border-dashed border-viridis-500 bg-radial from-viridis-50 via-viridis-400/75 to-viridis-600/25 w-[24rem] h-[18rem] flex place-items-center place-content-center"
				>
					<!-- ~10° foveal - sharpest vision -->
					<div
						class="rounded-[50%] border border-dashed border-viridis-400 bg-radial from-viridis-50 via-viridis-300/50 to-viridis-600/25 w-[16rem] h-[12rem] flex place-items-center place-content-center text-center"
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
