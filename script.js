import { Controls } from "./js/controls.js";
import { Events } from "./js/events.js";
import {
  body,
  nav,
  btnMenu,
  btnOpen,
  btnClose,
  buttonMoon,
  buttonSun,
} from "./js/elements.js";

const controls = Controls({
  body, buttonMoon, buttonSun
})

Events({controls})

