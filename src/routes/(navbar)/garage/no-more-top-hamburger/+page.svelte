<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
		rel="stylesheet"
	/>

	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<article
	class="text-neutral-50 p-4 flex flex-col flex-grow flex-1 grow min-h-full h-full items-center justify-center"
>
	<!-- <section class="flex flex-col flex-grow flex-1"> -->
	<div class="w-full max-w-[40rem] mx-auto">
		<p class="text-[1.25rem] mb-2">
			The hamburger menu [☰] at the top of mobile screens is bad design.
		</p>

		<ul class="mb-4">
			<li>You can't reach it with your thumb</li>
			<li>It hides navigation options</li>
			<li>It adds unnecessary taps</li>
		</ul>

		<h2 class="text-[1.25rem] mb-2">[Mobile] bottom Navigation Bar is just better:</h2>
		<ul class="mb-0">
			<li>Easy to reach with fingers</li>
			<li>Immediately visible</li>
			<li>Common pattern in native apps</li>
		</ul>
	</div>
	<!-- </section> -->
</article>

<style>
	@reference "../../../../styles/app.css";

	article {
		@apply bg-black bg-center bg-cover;

		background-image:
			linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25)),
			url('/images/burger-with-knife-in-it.jpg');
	}
</style>
