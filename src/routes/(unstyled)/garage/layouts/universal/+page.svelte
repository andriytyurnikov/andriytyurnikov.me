<script>
  import { assets, base } from '$app/paths';
</script>

<article class="min-h-dvh w-full p-4 flex items-center justify-center">
  <section>
    <h1 class="text-[3.375rem]">Universal layout</h1>
    <p>
      Centered. Both axies.
      <br/>
      <a href="{base}/garage/layouts" rel="me">back to layouts</a>
    </p>
  </section>
</article>

<article class="p-4 ui-el-cover">
  <div></div>
  <section class="ui-el-cover-hero">
    <h2 class="ui-el-center text-[5.0625rem]">Hero</h2>
  </section>
  <div></div>
</article>

<article class="p-4 ui-el-cover">
  <div></div>
  <section class="ui-el-cover-hero">
    <h2 class="ui-el-center text-[5.0625rem]">Плугарі</h2>
  </section>
  <div></div>
</article>

<style>
  @reference "../../../../../styles/unstyled.css";

  :global(html) {
    background-color: theme(--color-black);
  }

  :global(body) {
    color: theme(--color-white);
  }

  article {
    background-image:
      linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url('/images/field.jpg');
    @apply bg-center bg-cover;
  }

  p {
    @apply mb-6;
  }
</style>