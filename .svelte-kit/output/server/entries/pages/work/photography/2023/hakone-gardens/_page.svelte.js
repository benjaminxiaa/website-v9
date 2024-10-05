import {
	c as create_ssr_component,
	v as validate_component
} from '../../../../../../chunks/ssr.js';
import { G as Gallery } from '../../../../../../chunks/Gallery.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const images = [
		{
			src: '/portfolio/HakoneGardens/DSC05110.jpg',
			width: 2048,
			height: 1365
		},
		{
			src: '/portfolio/HakoneGardens/DSC05124.jpg',
			width: 2048,
			height: 1365
		},
		{
			src: '/portfolio/HakoneGardens/DSC05132.jpg',
			width: 1365,
			height: 2048
		},
		{
			src: '/portfolio/HakoneGardens/DSC05145.jpg',
			width: 1365,
			height: 2048
		},
		{
			src: '/portfolio/HakoneGardens/DSC05183.jpg',
			width: 2048,
			height: 1365
		},
		{
			src: '/portfolio/HakoneGardens/DSC05193.jpg',
			width: 2048,
			height: 1365
		},
		{
			src: '/portfolio/HakoneGardens/DSC05282.jpg',
			width: 1365,
			height: 2048
		}
	];
	return `${(($$result.head += `<!-- HEAD_svelte-1hjudnz_START --><link rel="stylesheet" href="/css/gallery.css"><!-- HEAD_svelte-1hjudnz_END -->`), '')} <input type="checkbox" id="main-navigation-toggle" class="btn btn--close" title="Toggle main navigation"> <label for="main-navigation-toggle" data-svelte-h="svelte-1bajy75"><span>menu</span></label> <nav id="main-navigation" class="nav-main" data-svelte-h="svelte-yx3h1m"><ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul></nav> <nav class="top-right-navbar" data-svelte-h="svelte-7drfts"><ul><li><a href="/work/photography/2022/death-valley">[Death Valley]</a></li> <li><a href="/work/photography/2023/big-sur">[Big Sur]</a></li> <li><a href="/work/photography/2023/hakone-gardens">[Hakone Gardens]</a></li> <li><a href="/work/photography/2023/new-mexico">[New Mexico]</a></li></ul></nav> <main class="page-container" data-svelte-h="svelte-1b4asdf"><h1 class="center">Hakone Gardens</h1></main> <div class="after-page">${validate_component(Gallery, 'Gallery').$$render($$result, { images, rowHeight: 500 }, {}, {})}</div>`;
});
export { Page as default };
