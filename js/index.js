import Nav from "./components/nav.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Skills from ".components/skills.js";
import Contact from "./components/contact.js";

document.querySelector("#root").innerHTML = `
  ${Navigation}
  ${Header}
  ${Content}
  ${Footer}
`;