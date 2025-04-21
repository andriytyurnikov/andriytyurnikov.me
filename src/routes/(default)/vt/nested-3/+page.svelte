<script>
	import { base } from '$app/paths';
</script>

<div
	style="view-transition-name: sign-in;"
	class="bg-rose-200 h-dvh w-dvw justify-end flex flex-col items-center place-items-center"
>
	<h2>Nested 2</h2>
	<a href="{base}/vt">Back</a>
	<a href="{base}/vt/nested-1">Nested 1</a>
	<h1 class="font-bold text-[1rem] text-center">View Transitions</h1>
</div>

<style>
	@reference "../../../../styles/default.css";
</style>
