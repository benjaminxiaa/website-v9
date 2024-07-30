import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { G as Gallery } from "../../../../../../chunks/Gallery.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [
    {
      src: "/portfolio/DeathValley/b_4132686_autumn_maple.jpg",
      width: 751,
      height: 500
    },
    {
      src: "/portfolio/DeathValley/b_4132709_backyard_moon.jpg",
      width: 751,
      height: 500
    },
    {
      src: "/portfolio/DeathValley/b_4132717_backyard_moon_greenthing.jpg",
      width: 751,
      height: 500
    },
    {
      src: "/portfolio/DeathValley/b_4132739_deathvalley_mineraldeposits.jpg",
      width: 753,
      height: 500
    },
    {
      src: "/portfolio/DeathValley/b_4132752_deathvalley_mooon.jpg",
      width: 753,
      height: 500
    },
    {
      src: "/portfolio/DeathValley/b_4132763_goldenwaves.jpg",
      width: 753,
      height: 500
    },
    {
      src: "/portfolio/DeathValley/b_4132793_redsunset.jpg",
      width: 751,
      height: 500
    },
    {
      src: "/portfolio/DeathValley/b_4132804_sequoia_bigtree.jpg",
      width: 332,
      height: 500
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-19kdhei_START --><link rel="stylesheet" href="/css/gallery.css"><!-- HEAD_svelte-19kdhei_END -->`, ""} <input type="checkbox" id="main-navigation-toggle" class="btn btn--close" title="Toggle main navigation"> <label for="main-navigation-toggle" data-svelte-h="svelte-7cm2q6"><span>menu</span></label> <nav id="main-navigation" class="nav-main" data-svelte-h="svelte-1fdby62"><ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul></nav> <nav class="top-right-navbar" data-svelte-h="svelte-7drfts"><ul><li><a href="/work/photography/2022/death-valley">[Death Valley]</a></li> <li><a href="/work/photography/2023/big-sur">[Big Sur]</a></li> <li><a href="/work/photography/2023/hakone-gardens">[Hakone Gardens]</a></li> <li><a href="/work/photography/2023/new-mexico">[New Mexico]</a></li></ul></nav> <main class="page-container" data-svelte-h="svelte-8n7681"><h1 class="center">Death Valley</h1></main> <div class="after-page">${validate_component(Gallery, "Gallery").$$render($$result, { images, rowHeight: 500 }, {}, {})}</div>`;
});
export {
  Page as default
};
