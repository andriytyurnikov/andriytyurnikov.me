<script>
	import { base } from '$app/paths';
</script>

<div class="bg-sky-200 h-dvh w-dvw justify-center flex flex-col items-center place-items-center">
	<h1 class="font-bold text-[2rem] text-center">View Transitions</h1>
	<a href="{base}/vt/nested-1">Nested 1</a>
	<a href="{base}/vt/nested-2">Nested 2</a>
	<a href="{base}/vt/nested-3">
		<div class="inline-block" style="view-transition-name: sign-in;">Nested hero</div>
	</a>

	Relative motion<br />
	Container transform (strong relationship - item-to-details)<br />
	Shared Axis(x/y/z - back&next, stepper & wizard, camera)<br />
	Fade through (no strong relationship - navbar destinations!)<br />
	Fade (separate element +scale)<br />
</div>

<style>
	@reference "../../../styles/default.css";
</style>
