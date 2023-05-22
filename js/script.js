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

window.sr = ScrollReveal({ reset: true });

sr.reveal(".about", { duration: 1000 });
sr.reveal(".skills", { duration: 1500 });
sr.reveal(".projects", { duration: 1500 });
sr.reveal(".contact", { duration: 1500 });
