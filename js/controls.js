export function Controls({buttonMoon,buttonSun,body}) {
  function toggleThemeLight() {
    body.classList.add("light");
    buttonMoon.classList.remove("hidden");
    buttonSun.classList.add("hidden");
  }
  function toggleThemeDark() {
    body.classList.remove("light");
    buttonMoon.classList.add("hidden");
    buttonSun.classList.remove("hidden");
  }
  return {
    toggleThemeDark,
    toggleThemeLight,
  };
}
