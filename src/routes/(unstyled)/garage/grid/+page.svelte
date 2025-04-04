<script>
	import '../../../../styles/unstyled.css';
</script>

<div class="ui-shell--grid">
	<main
		class="bg-slate-500 text-slate-100 ui-shell-main flex flex-col
	        landscape:flex-row
					justify-center"
	>
		<div
			class="bg-slate-600 min-w-[16rem] portrait:max-w-[24rem] min-h-[12rem]
			landscape:min-w-1/3 landscape:w-[16rem] landscape:max-w-1/2

			tablet:landscape:min-w-[16rem] tablet:landscape:max-w-[24rem]

		  flex justify-center self-center items-center"
		>
			Untoucheable Zone
		</div>

		<div
			class="bg-slate-700 w-full landscape:max-w-2/3
			min-h-2/3 landscape:min-h-full landscape:w-[24rem]

		  tablet:!w-[32rem]
				flex
			 justify-center self-center items-center"
		>
			Main Zone
		</div>
	</main>
	<nav class="bg-sky-900 text-slate-200 ui-shell-navbar-slot">NavBar</nav>
</div>
