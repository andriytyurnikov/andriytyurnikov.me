<article class="text-neutral-50 el-cover">
	<section>
		<h1>NoMoreTopHamburger.com</h1>
	</section>

	<section class="el-cover-hero">
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
	</section>

	<section class="text-right text-xs">
		NoMoreTopHamburger.com,
		<br />
		made by
		<a href="https://www.andriytyurnikov.me/">Andriy Tyurnikov</a>, image by
		<a href="https://www.foodiesfeed.com/free-food-photo/beef-burger-slider-with-knife-in-it/"
			>Lidye Petit</a
		>
	</section>
</article>

<style>
	@reference "../../../../styles/unstyled.css";

	:global(section) {
		padding: 1rem;
	}

	article {
		@apply bg-black bg-center bg-cover min-h-dvh;

		background-image:
			linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25)),
			url('/images/burger-with-knife-in-it.jpg');
	}
</style>
