/**
 * @param {'light'|'dark'|'system'} themeValue
 */
export function setTheme(themeValue) {
  localStorage.theme = themeValue;
  switch(themeValue) {
    case "light":
      document.documentElement.classList.remove('dark')
      break;
    case "dark":
      document.documentElement.classList.add('dark')
      break;
    case "system":
      if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      break;
  }
  localStorage.theme = themeValue;
}