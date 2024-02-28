<script>
  import { tweened } from 'svelte/motion';
  import { linear, cubicOut } from 'svelte/easing';

  let filter_div;
  let dillation_radius = 10;
  tweened(5, {
		duration: 1000,
		easing: linear,
    interpolate: function(a, b) {
      return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
      };
    }
	});

  // setInterval( 
  //   () => { 
  //     if(filter_div) {
  //       filter_div.style.webkitBackdropFilter = "none";
  //       filter_div.offsetWidth
  //       filter_div.style.webkitBackdropFilter = "url(#pixelate)";
  //     } 
  //   }, 
  //   1000
  // )

  // setInterval( (x) => {dillation_radius += x}, 100, 5)
  // setInterval( (x) => {dillation_radius = -10}, 2000)
</script>

<svg>
  <filter id="pixelate" x="0" y="0" width="100%" height="100%">
    <feFlood x="4" y="4" height="2" width="2"></feFlood>
    <feComposite width="{2*dillation_radius}" height="{2*dillation_radius}"></feComposite>
    <feTile result="a"></feTile>
    <feComposite in="SourceGraphic" in2="a" operator="in"></feComposite>
    <feMorphology operator="dilate" radius="{dillation_radius}"></feMorphology>
  </filter>
</svg>

<div bind:this={filter_div} class="filter"></div>

<style>
  .filter {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none !important;
    pointer-events: none;

    /* -webkit-backdrop-filter: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pixelate' x='0' y='0' width='100%25' height='100%25'%3E%3CfeFlood x='4' y='4' height='2' width='2'%3E%3C/feFlood%3E%3CfeComposite width='%7B2*dillation_radius%7D' height='%7B2*dillation_radius%7D'%3E%3C/feComposite%3E%3CfeTile result='a'%3E%3C/feTile%3E%3CfeComposite in='SourceGraphic' in2='a' operator='in'%3E%3C/feComposite%3E%3CfeMorphology operator='dilate' radius='%7Bdillation_radius%7D'%3E%3C/feMorphology%3E%3C/filter%3E%3C/svg%3E#pixelate"); */
    backdrop-filter: url(#pixelate);
    
    box-shadow: 1px 1px 5px 2px rgb(0 0 0 / 0.1);
    z-index: 100;

    /* Safari? */
    transform: translate(0, 0);
  }

  :global(body) {
    transform: translate3d(0, 0, 0);
    filter: url(#pixelate);
  }
</style>