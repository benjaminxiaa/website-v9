import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-15unbop_START --><link rel="stylesheet" href="/css/contact.css"><!-- HEAD_svelte-15unbop_END -->`, ""} <input type="checkbox" id="main-navigation-toggle" class="btn btn--close" title="Toggle main navigation"> <label for="main-navigation-toggle" data-svelte-h="svelte-1bajy75"><span>menu</span></label> <nav id="main-navigation" class="nav-main" data-svelte-h="svelte-yx3h1m"><ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul></nav> <main class="page-container" data-svelte-h="svelte-qoziz7"><h1 class="center">Contact Me</h1></main> <div class="after-page" data-svelte-h="svelte-1tfgpfq"><p>Contact Me: <a href="mailto:me@bxia.net">Here</a></p></div>`;
});
export {
  Page as default
};
