<script>
  import { theme } from './stores/theme';
	import { BROWSER } from 'esm-env';
	import { onDestroy } from 'svelte';

  /** @type {HTMLElement} */
  let themeToggleElement;

  function toggle() {
    const upcoming_theme = $theme.current === 'light' ? 'dark' : 'light';

		if (
			upcoming_theme ===
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
		) {
			// Switch the preference to `system`
			$theme.preference = 'system';
		} else {
			// Switch the preference to `light` or `dark`
			$theme.preference = upcoming_theme;
		}

		$theme.current = upcoming_theme;
  }

  /** @param {MediaQueryListEvent} e */
	const cb = (e) =>
		theme.set({ preference: $theme.preference, current: e.matches ? 'dark' : 'light' });

  /** @type {MediaQueryList} */
	let query;

  $: {
		if (!BROWSER) break $;

		query?.removeEventListener('change', cb);

		if ($theme.preference === 'system') {
			query = window.matchMedia('(prefers-color-scheme: dark)');
			query.addEventListener('change', cb);
		}
	}

  onDestroy(() => query?.removeEventListener('change', cb));

  /**
   * @param {Event} evt;
  */
  function handleThemeToggleClick(evt){
    themeToggleElement.classList.remove('elementa-animate-theme-switch');

    toggle()
    
    themeToggleElement.classList.add('elementa-animate-theme-switch');
  }
</script>

<button 
  class="elementa-theme-switch"
  bind:this={themeToggleElement} 
  on:click={(e) => { handleThemeToggleClick(e) }}>

  <svg class="hidden dark:inline-block animate-spin-once w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>

  <svg class="inline-block dark:hidden animate-spin-once w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
</button>