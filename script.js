import { Controls } from "./js/controls.js";
import { Events } from "./js/events.js";
import {
  body,
  btnMenu,
  btnOpen,
  btnClose,
  buttonMoon,
  buttonSun,
  nav,
} from "./js/elements.js";

const controls = Controls({
  body,
  nav,
  buttonMoon,
  buttonSun,
  btnOpen,
  btnMenu,
  btnClose,
});

Events({ controls });
