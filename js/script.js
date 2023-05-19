import { Controls } from "./controls.js";
import { Events } from "./events.js";
import {
  body,
  btnMenu,
  btnOpen,
  btnClose,
  buttonMoon,
  buttonSun,
  nav,
} from "./elements.js";

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
