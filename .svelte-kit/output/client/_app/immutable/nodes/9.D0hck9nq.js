import { s as T, n as $ } from '../chunks/scheduler.DaE3y3Hf.js';
import {
	S as D,
	i as A,
	e as p,
	s as f,
	l as I,
	h as P,
	c as _,
	d as a,
	b as g,
	g as N,
	m as V,
	n as E,
	f as i,
	j as G,
	k as l,
	o as B,
	t as q,
	a as z,
	p as K
} from '../chunks/index.BOC9BbjL.js';
import { G as U } from '../chunks/Gallery.C5J08gKM.js';
function W(C) {
	let s,
		d,
		r,
		v,
		o,
		b = '<span>menu</span>',
		w,
		n,
		H =
			'<ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul>',
		k,
		c,
		L =
			'<ul><li><a href="/work/photography/2022/death-valley">[Death Valley]</a></li> <li><a href="/work/photography/2023/big-sur">[Big Sur]</a></li> <li><a href="/work/photography/2023/hakone-gardens">[Hakone Gardens]</a></li> <li><a href="/work/photography/2023/new-mexico">[New Mexico]</a></li></ul>',
		y,
		h,
		j = '<h1 class="center">New Mexico</h1>',
		x,
		m,
		u,
		M;
	return (
		(u = new U({ props: { images: C[0], rowHeight: 500 } })),
		{
			c() {
				(s = p('link')),
					(d = f()),
					(r = p('input')),
					(v = f()),
					(o = p('label')),
					(o.innerHTML = b),
					(w = f()),
					(n = p('nav')),
					(n.innerHTML = H),
					(k = f()),
					(c = p('nav')),
					(c.innerHTML = L),
					(y = f()),
					(h = p('main')),
					(h.innerHTML = j),
					(x = f()),
					(m = p('div')),
					I(u.$$.fragment),
					this.h();
			},
			l(e) {
				const t = P('svelte-1hjudnz', document.head);
				(s = _(t, 'LINK', { rel: !0, href: !0 })),
					t.forEach(a),
					(d = g(e)),
					(r = _(e, 'INPUT', { type: !0, id: !0, class: !0, title: !0 })),
					(v = g(e)),
					(o = _(e, 'LABEL', { for: !0, 'data-svelte-h': !0 })),
					N(o) !== 'svelte-1bajy75' && (o.innerHTML = b),
					(w = g(e)),
					(n = _(e, 'NAV', { id: !0, class: !0, 'data-svelte-h': !0 })),
					N(n) !== 'svelte-yx3h1m' && (n.innerHTML = H),
					(k = g(e)),
					(c = _(e, 'NAV', { class: !0, 'data-svelte-h': !0 })),
					N(c) !== 'svelte-7drfts' && (c.innerHTML = L),
					(y = g(e)),
					(h = _(e, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
					N(h) !== 'svelte-ts8hp2' && (h.innerHTML = j),
					(x = g(e)),
					(m = _(e, 'DIV', { class: !0 }));
				var S = V(m);
				E(u.$$.fragment, S), S.forEach(a), this.h();
			},
			h() {
				i(s, 'rel', 'stylesheet'),
					i(s, 'href', '/css/gallery.css'),
					i(r, 'type', 'checkbox'),
					i(r, 'id', 'main-navigation-toggle'),
					i(r, 'class', 'btn btn--close'),
					i(r, 'title', 'Toggle main navigation'),
					i(o, 'for', 'main-navigation-toggle'),
					i(n, 'id', 'main-navigation'),
					i(n, 'class', 'nav-main'),
					i(c, 'class', 'top-right-navbar'),
					i(h, 'class', 'page-container'),
					i(m, 'class', 'after-page');
			},
			m(e, t) {
				G(document.head, s),
					l(e, d, t),
					l(e, r, t),
					l(e, v, t),
					l(e, o, t),
					l(e, w, t),
					l(e, n, t),
					l(e, k, t),
					l(e, c, t),
					l(e, y, t),
					l(e, h, t),
					l(e, x, t),
					l(e, m, t),
					B(u, m, null),
					(M = !0);
			},
			p: $,
			i(e) {
				M || (q(u.$$.fragment, e), (M = !0));
			},
			o(e) {
				z(u.$$.fragment, e), (M = !1);
			},
			d(e) {
				e && (a(d), a(r), a(v), a(o), a(w), a(n), a(k), a(c), a(y), a(h), a(x), a(m)), a(s), K(u);
			}
		}
	);
}
function F(C) {
	return [
		[
			{ src: '/portfolio/NewMexico/DSC05860.jpg', width: 6e3, height: 3376 },
			{ src: '/portfolio/NewMexico/DSC05976.jpg', width: 6e3, height: 3376 },
			{ src: '/portfolio/NewMexico/DSC07495.jpg', width: 3376, height: 6e3 },
			{ src: '/portfolio/NewMexico/DSC07527.jpg', width: 6e3, height: 3376 },
			{ src: '/portfolio/NewMexico/DSC07624.jpg', width: 3376, height: 6e3 },
			{ src: '/portfolio/NewMexico/DSC07788.jpg', width: 6e3, height: 3376 },
			{ src: '/portfolio/NewMexico/DSC07982.jpg', width: 6e3, height: 3376 }
		]
	];
}
class R extends D {
	constructor(s) {
		super(), A(this, s, F, W, T, {});
	}
}
export { R as component };
