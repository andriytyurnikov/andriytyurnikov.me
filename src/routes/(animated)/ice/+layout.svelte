<script>
  import "./../../../app.pcss";
  import "./../../../styles/lib/elementa/elementa.pcss";

  import GlowingIce from '$lib/glowing-ice/GlowingIce.svelte';
  import { noop, transpect } from '$lib/glowing-ice/transition';

  import PixelationOverlay from "./PixelationOverlay.svelte";

  import { browser, dev, building, version } from '$app/environment';
  import { page, navigating } from '$app/stores';

  import {
    afterNavigate,
    beforeNavigate,
    disableScrollHandling,
    goto,
    invalidate,
    invalidateAll,
    onNavigate,
    preloadCode,
    preloadData
  } from '$app/navigation';

  import { blur, fade } from 'svelte/transition';
  import { filterContrast, filterInvert, filterHueRotate } from '$lib/glowing-ice/transition';
  import { linear, backIn, circInOut, cubicIn, cubicOut } from 'svelte/easing';

  /** @type { App.PageData } */
  export let data;

  /** @type {import('$lib/types').TransitionRules } */
  const rules = [
    // back button
    {
      withType:     'popstate',
      toRouteId:    '/(garage)/garage',
      transition:   {function: noop, params: { duration: 0, easing: linear }}
    },

    // splash animation for every route?
    {
      withType:     'enter',
      transition:   {function: blur, params: { duration: 1250, amount: '64px', easing: linear }}
    },

    {
      withType:     'link',
      fromRouteId:  '/(garage)/garage',
      toRouteId:    '/(animated)/ice',
      transition:   {function: blur, params: { duration: 1250, amount: '64px', easing: linear }}
    },

    {
      withType:     'link',
      transition:   {function: fade, params: { duration: 1250, easing: linear }}
    },

    {
      withType:     'disabled',
      toRouteId:    '/(animated)/ice',
      transition:   {function: blur, params: { duration: 250 }}
    },

    {
      withType:     'disabled',
      fromRouteId:  '/(animated)/ice',
      toRouteId:    '/(animated)/ice/inspired-by',
      transition:   {function: blur, params: { duration: 250 }}
    },

    {
      withType:     'disabled',
      fromRouteId:  '/(animated)/ice/inspired-by',
      toRouteId:    '/(animated)/ice',
      transition:   {function: blur, params: { duration: 250 }}
    }
  ];
</script>



<div class="scena-screen bg-neutral-950 text-sky-300">
  <div class="scena-cover">
    <!-- <PixelationOverlay /> -->
    <GlowingIce data={data} rules={rules}>
      <slot/>
    </GlowingIce>
  </div>
</div>
