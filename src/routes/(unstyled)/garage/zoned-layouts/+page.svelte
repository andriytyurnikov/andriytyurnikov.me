<script>
	import '../../../../styles/unstyled.css';
</script>

<article class="flex flex-col flex-1">
	<section class="bg-slate-100 min-h-dvh min-w-dvw flex justify-center items-center">
		<div
			class="bg-slate-700 w-full max-w-[24rem] p-4 tablet:p-0 tablet:max-w-[32rem] tablet:w-[32rem] laptop:w-[32rem] h-[20rem] tablet:h-[24rem]"
		>
			Solo
		</div>
	</section>
	<section class="bg-slate-900 h-dvh w-dvw flex justify-center items-center">
		<div
			class="bg-slate-700 w-full w-[24rem] max-w-[32rem] p-4 tablet:p-0 tablet:max-w-[unset] tablet:w-[32rem] laptop:w-[40rem] h-[20rem] tablet:h-[24rem]"
		>
			Solo Wide
		</div>
	</section>

	<section
		class="bg-slate-100 h-dvh w-dvw flex portrait:flex-col landscape:flex-row items-center justify-center"
	>
		<div
			class="bg-slate-500 w-1/2 w-[24rem] portrait:w-full h-[20rem] tablet:!w-[24rem] tablet:!h-[24rem]"
		>
			Duo
		</div>
		<div
			class="bg-slate-600 w-1/2 w-[24rem] portrait:w-full h-[20rem] tablet:!w-[24rem] tablet:!h-[24rem]"
		>
			Duo
		</div>
	</section>

	<section
		class="bg-slate-900 h-dvh w-dvw flex portrait:flex-col landscape:flex-row items-center justify-center"
	>
		<div
			class="bg-slate-600 w-1/2 w-[16rem] portrait:w-full h-[12rem] tablet:!w-[16rem] tablet:!h-[20rem]"
		>
			Duo Minor (absurd)
		</div>
		<div
			class="bg-slate-500 w-1/2 w-[16rem] portrait:w-full h-[12rem] tablet:!w-[16rem] tablet:!h-[20rem]"
		>
			Duo Minor (absurd)
		</div>
	</section>
	<section
		class="bg-slate-100 h-dvh w-dvw flex portrait:flex-col landscape:flex-row items-center justify-center"
	>
		<div
			class="bg-slate-600 w-1/2 w-[16rem] portrait:w-full h-[12rem] tablet:!w-[16rem] tablet:!h-[20rem]"
		>
			Duo Minor
		</div>
		<div
			class="bg-slate-500 w-1/2 w-[24rem] portrait:w-full h-[20rem] tablet:!w-[24rem] tablet:!h-[24rem]"
		>
			Duo
		</div>
	</section>

	<section
		class="bg-slate-900 h-dvh w-dvw flex portrait:flex-col landscape:flex-row items-center justify-center"
	>
		<div
			class="bg-slate-600 w-1/2 w-[24rem] portrait:w-full h-[20rem] tablet:!w-[24rem] tablet:!h-[24rem]"
		>
			Duo
		</div>
		<div
			class="bg-slate-500 w-1/2 w-[16rem] portrait:w-full h-[12rem] tablet:!w-[16rem] tablet:!h-[20rem]"
		>
			Duo Minor
		</div>
	</section>
	<section
		class="bg-slate-100 h-dvh w-dvw flex portrait:flex-col landscape:flex-row items-center justify-center"
	>
		<div class="bg-slate-500 w-1/2 portrait:w-full w-[16rem] h-[12rem] justify-self-start">
			Minor
		</div>
		<div
			class="bg-slate-700 w-1/2 portrait:w-full landscape:w-[32rem] h-[20rem] tablet:h-[24rem] justify-self-end"
		>
			Major
		</div>
	</section>
	<section
		class="bg-slate-900 h-dvh w-dvw flex portrait:flex-col landscape:flex-row items-center justify-center"
	>
		<div class="bg-slate-600 w-1/2 portrait:w-full landscape:w-[32rem] h-[20rem] tablet:h-[24rem]">
			Major
		</div>
		<div class="bg-slate-500 w-1/2 w-[16rem] portrait:w-full h-[12rem] tablet:h-[20rem]">Minor</div>
	</section>
	<section
		class="bg-slate-100 h-dvh w-dvw flex portrait:flex-col landscape:flex-row items-center justify-center"
	>
		<div class="bg-slate-600 w-1/2 portrait:w-full landscape:w-[16rem] h-[20rem] tablet:h-[20rem]">
			Trio
		</div>
		<div class="bg-slate-500 w-1/2 portrait:w-full landscape:w-[16rem] h-[20rem] tablet:h-[20rem]">
			Trio
		</div>
		<div class="bg-slate-400 w-1/2 portrait:w-full landscape:w-[16rem] h-[20rem] tablet:h-[20rem]">
			Trio
		</div>
	</section>
</article>

<style>
	@reference "../../../../styles/unstyled.css";

	:global(html, body) {
		@apply bg-slate-900 text-slate-100;
	}
</style>
