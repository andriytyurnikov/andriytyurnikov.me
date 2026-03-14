<script>
	import { page } from '$app/state';
</script>

<section class="h-full w-full flex flex-col grow flex-1 justify-center items-center">
	<h1 class="text-[3rem] font-black mb-2">{page.status}</h1>
	<p>{page.error?.message}</p>
</section>
