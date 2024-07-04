import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1w6qasl_START --><link rel="stylesheet" href="/css/programming.css"><!-- HEAD_svelte-1w6qasl_END -->`, ""} <input type="checkbox" id="main-navigation-toggle" class="btn btn--close" title="Toggle main navigation"> <label for="main-navigation-toggle" data-svelte-h="svelte-7cm2q6"><span>menu</span></label> <nav id="main-navigation" class="nav-main" data-svelte-h="svelte-1fdby62"><ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul></nav> <main class="page-container" data-svelte-h="svelte-l9j3pt"><h1 class="center">Programming</h1></main> <div class="after-page" data-svelte-h="svelte-1w2fvu9"></div>`;
});
export {
  Page as default
};
