import { s as T, n as $ } from '../chunks/scheduler.DaE3y3Hf.js';
import {
	S as D,
	i as N,
	e as p,
	s as f,
	l as A,
	h as I,
	c as _,
	d as a,
	b as g,
	g as C,
	m as P,
	n as V,
	f as n,
	j as E,
	k as l,
	o as B,
	t as q,
	a as z,
	p as K
} from '../chunks/index.BOC9BbjL.js';
import { G as U } from '../chunks/Gallery.C5J08gKM.js';
function W(G) {
	let s,
		d,
		r,
		k,
		o,
		L = '<span>menu</span>',
		v,
		i,
		j =
			'<ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul>',
		y,
		m,
		x =
			'<ul><li><a href="/work/photography/2022/death-valley">[Death Valley]</a></li> <li><a href="/work/photography/2023/big-sur">[Big Sur]</a></li> <li><a href="/work/photography/2023/hakone-gardens">[Hakone Gardens]</a></li> <li><a href="/work/photography/2023/new-mexico">[New Mexico]</a></li></ul>',
		H,
		h,
		M = '<h1 class="center">Hakone Gardens</h1>',
		w,
		c,
		u,
		b;
	return (
		(u = new U({ props: { images: G[0], rowHeight: 500 } })),
		{
			c() {
				(s = p('link')),
					(d = f()),
					(r = p('input')),
					(k = f()),
					(o = p('label')),
					(o.innerHTML = L),
					(v = f()),
					(i = p('nav')),
					(i.innerHTML = j),
					(y = f()),
					(m = p('nav')),
					(m.innerHTML = x),
					(H = f()),
					(h = p('main')),
					(h.innerHTML = M),
					(w = f()),
					(c = p('div')),
					A(u.$$.fragment),
					this.h();
			},
			l(e) {
				const t = I('svelte-1hjudnz', document.head);
				(s = _(t, 'LINK', { rel: !0, href: !0 })),
					t.forEach(a),
					(d = g(e)),
					(r = _(e, 'INPUT', { type: !0, id: !0, class: !0, title: !0 })),
					(k = g(e)),
					(o = _(e, 'LABEL', { for: !0, 'data-svelte-h': !0 })),
					C(o) !== 'svelte-1bajy75' && (o.innerHTML = L),
					(v = g(e)),
					(i = _(e, 'NAV', { id: !0, class: !0, 'data-svelte-h': !0 })),
					C(i) !== 'svelte-yx3h1m' && (i.innerHTML = j),
					(y = g(e)),
					(m = _(e, 'NAV', { class: !0, 'data-svelte-h': !0 })),
					C(m) !== 'svelte-7drfts' && (m.innerHTML = x),
					(H = g(e)),
					(h = _(e, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
					C(h) !== 'svelte-1b4asdf' && (h.innerHTML = M),
					(w = g(e)),
					(c = _(e, 'DIV', { class: !0 }));
				var S = P(c);
				V(u.$$.fragment, S), S.forEach(a), this.h();
			},
			h() {
				n(s, 'rel', 'stylesheet'),
					n(s, 'href', '/css/gallery.css'),
					n(r, 'type', 'checkbox'),
					n(r, 'id', 'main-navigation-toggle'),
					n(r, 'class', 'btn btn--close'),
					n(r, 'title', 'Toggle main navigation'),
					n(o, 'for', 'main-navigation-toggle'),
					n(i, 'id', 'main-navigation'),
					n(i, 'class', 'nav-main'),
					n(m, 'class', 'top-right-navbar'),
					n(h, 'class', 'page-container'),
					n(c, 'class', 'after-page');
			},
			m(e, t) {
				E(document.head, s),
					l(e, d, t),
					l(e, r, t),
					l(e, k, t),
					l(e, o, t),
					l(e, v, t),
					l(e, i, t),
					l(e, y, t),
					l(e, m, t),
					l(e, H, t),
					l(e, h, t),
					l(e, w, t),
					l(e, c, t),
					B(u, c, null),
					(b = !0);
			},
			p: $,
			i(e) {
				b || (q(u.$$.fragment, e), (b = !0));
			},
			o(e) {
				z(u.$$.fragment, e), (b = !1);
			},
			d(e) {
				e && (a(d), a(r), a(k), a(o), a(v), a(i), a(y), a(m), a(H), a(h), a(w), a(c)), a(s), K(u);
			}
		}
	);
}
function F(G) {
	return [
		[
			{ src: '/portfolio/HakoneGardens/DSC05110.jpg', width: 2048, height: 1365 },
			{ src: '/portfolio/HakoneGardens/DSC05124.jpg', width: 2048, height: 1365 },
			{ src: '/portfolio/HakoneGardens/DSC05132.jpg', width: 1365, height: 2048 },
			{ src: '/portfolio/HakoneGardens/DSC05145.jpg', width: 1365, height: 2048 },
			{ src: '/portfolio/HakoneGardens/DSC05183.jpg', width: 2048, height: 1365 },
			{ src: '/portfolio/HakoneGardens/DSC05193.jpg', width: 2048, height: 1365 },
			{ src: '/portfolio/HakoneGardens/DSC05282.jpg', width: 1365, height: 2048 }
		]
	];
}
class R extends D {
	constructor(s) {
		super(), N(this, s, F, W, T, {});
	}
}
export { R as component };
