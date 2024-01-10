<script>
  import "./../../../app.pcss";
  import "./../../../styles/lib/elementa/elementa.pcss";

  import Ice from './Ice.svelte';

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

  import { blur } from 'svelte/transition';

  /** @type { App.PageData } */
  export let data;
  
  /** @type {import('$lib/types').TransitionRules } */
  const rules = [
    {
      toRouteId:    '/(animated)/ice',
      withType:     'enter',
      transition:   {function: blur, params: { duration: 250 }}
    },
    {
      fromRouteId:  '/(animated)/ice',
      toRouteId:    '/(animated)/ice/inspired-by',
      transition:   {function: blur, params: { duration: 250 }}
    },
    {
      fromRouteId:  '/(animated)/ice/inspired-by',
      toRouteId:    '/(animated)/ice',
      transition:   {function: blur, params: { duration: 250 }}
    }
  ];
</script>



<div class="scena-screen bg-neutral-950 text-sky-300">
  <div class="scena-cover">
    <PixelationOverlay />
    <Ice data={data} rules={rules}>
        <slot/>
    </Ice>
  </div>
</div>

