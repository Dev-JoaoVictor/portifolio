export function Controls({
  buttonMoon,
  buttonSun,
  body,
  btnClose,
  btnOpen,
  nav
}) {
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
  function toggleMenu() {
    nav.classList.toggle("active");
    btnOpen.classList.toggle("hidden");
    btnClose.classList.toggle("hidden");
  }
  return {
    toggleThemeDark,
    toggleThemeLight,
    toggleMenu,
  };
}
