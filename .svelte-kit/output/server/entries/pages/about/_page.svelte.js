import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-186illy_START --><link rel="stylesheet" href="/css/about.css"><!-- HEAD_svelte-186illy_END -->`, ""} <input type="checkbox" id="main-navigation-toggle" class="btn btn--close" title="Toggle main navigation"> <label for="main-navigation-toggle" data-svelte-h="svelte-1bajy75"><span>menu</span></label> <nav id="main-navigation" class="nav-main" data-svelte-h="svelte-yx3h1m"><ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul></nav> <main class="page-container" data-svelte-h="svelte-htsthm"><h1 class="center">About Me</h1></main> <div class="after-page" data-svelte-h="svelte-1tr7mw3"><p>Lorem ipsum dolor sit amet diam rebum aliquyam velit. Gubergren justo
    accumsan ut et stet sit dolor consetetur dolore consetetur labore gubergren
    kasd et. Ipsum ipsum sea lorem sadipscing amet adipiscing et eum suscipit
    sed magna dolore eros magna. Ut et sea. Kasd no vel kasd facilisis gubergren
    ut dolor eos.</p></div>`;
});
export {
  Page as default
};
