<article class="text-neutral-50">
	<section class="max-w-[40rem] mx-auto">
		<h1 class="mb-2">NoMoreTopHamburger.com</h1>
		<!-- <h2 class="text-[1.5rem] mb-6">Stop the Top Hamburger Menu Madness</h2> -->

		<p class="text-[1.25rem] mb-4">
			The hamburger menu [☰] at the top of mobile screens is bad design.
		</p>

		<h2 class="text-[1.25rem] mb-2">Why?</h2>

		<ul class="mb-4">
			<li>You can't reach it with your thumb</li>
			<li>It hides navigation options</li>
			<li>It adds unnecessary taps</li>
			<li>It persists only because of lazy design inertia</li>
		</ul>

		<h2 class="text-[1.25rem] mb-2">[Mobile] bottom NavBar is just better:</h2>
		<ul class="mb-4">
			<li>Easy to reach with fingers</li>
			<li>Immediately visible</li>
			<li>Common pattern in native apps</li>
		</ul>

		NoMoreTopHamburger.com<br />
		Made by <a href="https://www.andriytyurnikov.me/">Andriy Tyurnikov</a>
		<br />
		Image by
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
