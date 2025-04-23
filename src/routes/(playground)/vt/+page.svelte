<script>
	import { base } from '$app/paths';
</script>

<div
	style="view-transition-name: fade-through;"
	class="bg-sky-200 h-dvh w-dvw justify-center flex flex-col items-center place-items-center"
>
	<h1 class="font-bold text-[2rem] text-center">View Transitions</h1>

	Container transform (strong relationship - item-to-details)<br />
	<a href="{base}/vt/container-transform">
		<div
			class="inline-block bg-rose-300 p-4 rounded-full"
			style="view-transition-name: container-transform;"
		>
			Container transform
		</div>
	</a>

	Shared Axis(x/y/z - back&next, stepper & wizard, camera)<br />
	Fade through (no strong relationship - navbar destinations!)<br />
	<a href="{base}/vt/fade-through">
		<div class="inline-block bg-yellow-300 p-4 rounded-full">fade through</div>
	</a>
	Fade (separate element +scale)<br />
</div>

<style>
	@reference "../../../styles/default.css";
</style>
