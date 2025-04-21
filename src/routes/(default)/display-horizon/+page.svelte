<script>
	import '../../../styles/default.css';
	import { base } from '$app/paths';
</script>

<article class="px-4 laptop:px-0 max-w-[40rem] mx-auto bg-inferno-900 text-inferno-200 min-h-dvh">
	<section>
		<h1 class="font-bold text-[2.25rem] text-center">Display Horizon</h1>
		<p class="text-center">Screens in human Field of View</p>
	</section>

	<section class="mb-6">
		<div class="w-[20rem] h-[15rem] bg-inferno-800 mx-auto"></div>
		<fieldset class="mb-4">
			<div class="grid grid-flow-row gap-2 grid-cols-3 grid-rows-2">
				<div class="col-span-3">
					<label for="zoom-level-range" class="block font-medium">Zoom magnification</label>
				</div>
				<div class="col-span-2">
					<div
						class="flex items-center rounded-md px-3 outline-1 -outline-offset-1 outline-inferno-700 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-inferno-400"
					>
						<input
							type="range"
							name="zoom-level-range"
							id="zoom-level-range"
							class="block min-w-0 grow py-2.5 pr-3 pl-1 text-base placeholder:text-inferno-400 focus:outline-inferno-400 active:outline-inferno-400 bg-inferno-950"
							placeholder="1.00"
						/>
					</div>
				</div>
				<div class="col-span-1">
					<div
						class="flex items-center rounded-md px-3 outline-1 -outline-offset-1 outline-inferno-700 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-inferno-400"
					>
						<input
							type="text"
							name="zoom-level"
							id="zoom-level"
							class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-inferno-100 placeholder:text-inferno-600 focus:outline-none"
							placeholder="1.00"
							aria-describedby="zoom-level-description"
						/>
						<div
							id="zoom-level-description"
							class="shrink-0 text-base text-inferno-200 select-none"
						>
							X
						</div>
					</div>
				</div>
			</div>
		</fieldset>

		<fieldset class="mb-4">
			<legend>[Device presets]</legend>
		</fieldset>

		<fieldset class="mb-4">
			<legend>[screen position and size]</legend>

			<div class="grid gap-2 grid-flow-row grid-cols-6">
				<div class="col-span-3">
					<label for="distance-range" class="block font-medium">viewing distance</label>
				</div>

				<div class="col-span-2">
					<div
						class="flex items-center rounded-md px-3 outline-1 -outline-offset-1 outline-inferno-700 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-inferno-400"
					>
						<input
							type="text"
							name="distance-mm"
							id="distance-mm"
							class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-inferno-100 placeholder:text-inferno-400 focus:outline-none"
							placeholder="0.00"
							aria-describedby="height-mm-description"
						/>
						<div
							id="distance-mm-description"
							class="shrink-0 text-base text-inferno-200 select-none"
						>
							mm
						</div>
					</div>
				</div>
			</div>

			<div class="grid gap-2 grid-flow-row grid-cols-6">
				<div class="col-span-2">
					<label for="width-range" class="block font-medium"> width </label>
				</div>

				<div class="col-span-2">
					<div
						class="flex items-center rounded-md px-3 outline-1 -outline-offset-1 outline-inferno-700 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-inferno-400"
					>
						<input
							type="text"
							name="width-mm"
							id="width-mm"
							class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-inferno-100 placeholder:text-inferno-400 focus:outline-none"
							placeholder="0.00"
							aria-describedby="width-mm-description"
						/>
						<div id="width-mm-description" class="shrink-0 text-base text-inferno-200 select-none">
							mm
						</div>
					</div>
				</div>
			</div>

			<div class="grid gap-2 grid-flow-row grid-cols-6">
				<div class="col-span-2">
					<label for="height" class="block font-medium">height</label>
				</div>
				<div class="col-span-2">
					<div
						class="flex items-center rounded-md px-3 outline-1 -outline-offset-1 outline-inferno-700 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-inferno-400"
					>
						<input
							type="text"
							name="height-mm"
							id="height-mm"
							class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base placeholder:text-inferno-400 focus:outline-none"
							placeholder="0.00"
							aria-describedby="height-mm-description"
						/>
						<div id="height-mm-description" class="shrink-0 text-base text-inferno-200 select-none">
							mm
						</div>
					</div>
				</div>
			</div>
		</fieldset>
	</section>

	<section>
		<a href="{base}/garage">Back</a>
	</section>
</article>
