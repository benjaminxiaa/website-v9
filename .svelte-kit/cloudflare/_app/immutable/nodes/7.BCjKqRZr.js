import { s as T, n as $ } from '../chunks/scheduler.DaE3y3Hf.js';
import {
	S as C,
	i as N,
	e as g,
	s as _,
	l as A,
	h as P,
	c as p,
	d as a,
	b as f,
	g as S,
	m as V,
	n as E,
	f as i,
	j as G,
	k as l,
	o as D,
	t as q,
	a as z,
	p as K
} from '../chunks/index.BOC9BbjL.js';
import { G as U } from '../chunks/Gallery.C5J08gKM.js';
function W(j) {
	let s,
		d,
		r,
		v,
		o,
		x = '<span>menu</span>',
		k,
		n,
		B =
			'<ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul>',
		y,
		m,
		H =
			'<ul><li><a href="/work/photography/2022/death-valley">[Death Valley]</a></li> <li><a href="/work/photography/2023/big-sur">[Big Sur]</a></li> <li><a href="/work/photography/2023/hakone-gardens">[Hakone Gardens]</a></li> <li><a href="/work/photography/2023/new-mexico">[New Mexico]</a></li></ul>',
		w,
		u,
		L = '<h1 class="center">Big Sur</h1>',
		b,
		h,
		c,
		I;
	return (
		(c = new U({ props: { images: j[0], rowHeight: 500 } })),
		{
			c() {
				(s = g('link')),
					(d = _()),
					(r = g('input')),
					(v = _()),
					(o = g('label')),
					(o.innerHTML = x),
					(k = _()),
					(n = g('nav')),
					(n.innerHTML = B),
					(y = _()),
					(m = g('nav')),
					(m.innerHTML = H),
					(w = _()),
					(u = g('main')),
					(u.innerHTML = L),
					(b = _()),
					(h = g('div')),
					A(c.$$.fragment),
					this.h();
			},
			l(e) {
				const t = P('svelte-1hjudnz', document.head);
				(s = p(t, 'LINK', { rel: !0, href: !0 })),
					t.forEach(a),
					(d = f(e)),
					(r = p(e, 'INPUT', { type: !0, id: !0, class: !0, title: !0 })),
					(v = f(e)),
					(o = p(e, 'LABEL', { for: !0, 'data-svelte-h': !0 })),
					S(o) !== 'svelte-1bajy75' && (o.innerHTML = x),
					(k = f(e)),
					(n = p(e, 'NAV', { id: !0, class: !0, 'data-svelte-h': !0 })),
					S(n) !== 'svelte-yx3h1m' && (n.innerHTML = B),
					(y = f(e)),
					(m = p(e, 'NAV', { class: !0, 'data-svelte-h': !0 })),
					S(m) !== 'svelte-7drfts' && (m.innerHTML = H),
					(w = f(e)),
					(u = p(e, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
					S(u) !== 'svelte-fxpl67' && (u.innerHTML = L),
					(b = f(e)),
					(h = p(e, 'DIV', { class: !0 }));
				var M = V(h);
				E(c.$$.fragment, M), M.forEach(a), this.h();
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
					i(m, 'class', 'top-right-navbar'),
					i(u, 'class', 'page-container'),
					i(h, 'class', 'after-page');
			},
			m(e, t) {
				G(document.head, s),
					l(e, d, t),
					l(e, r, t),
					l(e, v, t),
					l(e, o, t),
					l(e, k, t),
					l(e, n, t),
					l(e, y, t),
					l(e, m, t),
					l(e, w, t),
					l(e, u, t),
					l(e, b, t),
					l(e, h, t),
					D(c, h, null),
					(I = !0);
			},
			p: $,
			i(e) {
				I || (q(c.$$.fragment, e), (I = !0));
			},
			o(e) {
				z(c.$$.fragment, e), (I = !1);
			},
			d(e) {
				e && (a(d), a(r), a(v), a(o), a(k), a(n), a(y), a(m), a(w), a(u), a(b), a(h)), a(s), K(c);
			}
		}
	);
}
function F(j) {
	return [
		[
			{ src: '/portfolio/BigSur/Image1.jpg', width: 2048, height: 1365 },
			{ src: '/portfolio/BigSur/Image2.jpg', width: 2048, height: 1365 },
			{ src: '/portfolio/BigSur/Image3.jpg', width: 2048, height: 1365 },
			{ src: '/portfolio/BigSur/Image4.jpg', width: 2048, height: 1365 },
			{ src: '/portfolio/BigSur/Image5.jpg', width: 2048, height: 1365 },
			{ src: '/portfolio/BigSur/Image6.jpg', width: 2048, height: 1365 },
			{ src: '/portfolio/BigSur/Image7.jpg', width: 2048, height: 1365 },
			{ src: '/portfolio/BigSur/Image8.jpg', width: 2048, height: 1365 }
		]
	];
}
class R extends C {
	constructor(s) {
		super(), N(this, s, F, W, T, {});
	}
}
export { R as component };
