import { btnMenu, buttonMoon, buttonSun } from "./elements.js";

export function Events({ controls }) {
  btnMenu.addEventListener("click", () => {
    controls.toggleMenu();
  });
  buttonMoon.addEventListener("click", () => {
    controls.toggleThemeDark();
  });
  buttonSun.addEventListener("click", () => {
    controls.toggleThemeLight();
  });
}
