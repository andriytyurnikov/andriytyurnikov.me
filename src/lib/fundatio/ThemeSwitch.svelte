<script>
  let theme;
  let isDark;
  let darkLinkEl;

  function handleThemeClick(){
    darkLinkEl.classList.remove('fundatio-animate-theme-switch');
    
    if(document.documentElement.classList.contains('dark')) {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark')
    } else {
      console.log('theme dark');
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark')
    }

    darkLinkEl.classList.add('fundatio-animate-theme-switch');
    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
  }
</script>

<svelte:head>
  <script>
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  </script>
</svelte:head>

<button 
  class="fundatio-theme-switch"
  bind:this={darkLinkEl} 
  on:click={(e) => { handleThemeClick(e) }}>

  <svg class="hidden dark:inline-block animate-spin-once w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>

  <svg class="inline-block dark:hidden animate-spin-once w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
</button>