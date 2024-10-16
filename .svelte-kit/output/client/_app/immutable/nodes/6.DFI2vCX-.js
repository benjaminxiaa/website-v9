import { s as x, n as C } from '../chunks/scheduler.DaE3y3Hf.js';
import {
	S as N,
	i as A,
	e as u,
	s as g,
	l as I,
	h as P,
	c as p,
	d as a,
	b as f,
	g as D,
	m as q,
	n as E,
	f as l,
	j as G,
	k as i,
	o as S,
	t as B,
	a as K,
	p as U
} from '../chunks/index.BOC9BbjL.js';
import { G as W } from '../chunks/Gallery.C5J08gKM.js';
function z(H) {
	let n,
		d,
		r,
		y,
		o,
		L = '<span>menu</span>',
		v,
		s,
		M =
			'<ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul>',
		b,
		h,
		T =
			'<ul><li><a href="/work/photography/2022/death-valley">[Death Valley]</a></li> <li><a href="/work/photography/2023/big-sur">[Big Sur]</a></li> <li><a href="/work/photography/2023/hakone-gardens">[Hakone Gardens]</a></li> <li><a href="/work/photography/2023/new-mexico">[New Mexico]</a></li></ul>',
		k,
		m,
		$ = '<h1 class="center">Death Valley</h1>',
		w,
		_,
		c,
		V;
	return (
		(c = new W({ props: { images: H[0], rowHeight: 500 } })),
		{
			c() {
				(n = u('link')),
					(d = g()),
					(r = u('input')),
					(y = g()),
					(o = u('label')),
					(o.innerHTML = L),
					(v = g()),
					(s = u('nav')),
					(s.innerHTML = M),
					(b = g()),
					(h = u('nav')),
					(h.innerHTML = T),
					(k = g()),
					(m = u('main')),
					(m.innerHTML = $),
					(w = g()),
					(_ = u('div')),
					I(c.$$.fragment),
					this.h();
			},
			l(e) {
				const t = P('svelte-19kdhei', document.head);
				(n = p(t, 'LINK', { rel: !0, href: !0 })),
					t.forEach(a),
					(d = f(e)),
					(r = p(e, 'INPUT', { type: !0, id: !0, class: !0, title: !0 })),
					(y = f(e)),
					(o = p(e, 'LABEL', { for: !0, 'data-svelte-h': !0 })),
					D(o) !== 'svelte-7cm2q6' && (o.innerHTML = L),
					(v = f(e)),
					(s = p(e, 'NAV', { id: !0, class: !0, 'data-svelte-h': !0 })),
					D(s) !== 'svelte-1fdby62' && (s.innerHTML = M),
					(b = f(e)),
					(h = p(e, 'NAV', { class: !0, 'data-svelte-h': !0 })),
					D(h) !== 'svelte-7drfts' && (h.innerHTML = T),
					(k = f(e)),
					(m = p(e, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
					D(m) !== 'svelte-8n7681' && (m.innerHTML = $),
					(w = f(e)),
					(_ = p(e, 'DIV', { class: !0 }));
				var j = q(_);
				E(c.$$.fragment, j), j.forEach(a), this.h();
			},
			h() {
				l(n, 'rel', 'stylesheet'),
					l(n, 'href', '/css/gallery.css'),
					l(r, 'type', 'checkbox'),
					l(r, 'id', 'main-navigation-toggle'),
					l(r, 'class', 'btn btn--close'),
					l(r, 'title', 'Toggle main navigation'),
					l(o, 'for', 'main-navigation-toggle'),
					l(s, 'id', 'main-navigation'),
					l(s, 'class', 'nav-main'),
					l(h, 'class', 'top-right-navbar'),
					l(m, 'class', 'page-container'),
					l(_, 'class', 'after-page');
			},
			m(e, t) {
				G(document.head, n),
					i(e, d, t),
					i(e, r, t),
					i(e, y, t),
					i(e, o, t),
					i(e, v, t),
					i(e, s, t),
					i(e, b, t),
					i(e, h, t),
					i(e, k, t),
					i(e, m, t),
					i(e, w, t),
					i(e, _, t),
					S(c, _, null),
					(V = !0);
			},
			p: C,
			i(e) {
				V || (B(c.$$.fragment, e), (V = !0));
			},
			o(e) {
				K(c.$$.fragment, e), (V = !1);
			},
			d(e) {
				e && (a(d), a(r), a(y), a(o), a(v), a(s), a(b), a(h), a(k), a(m), a(w), a(_)), a(n), U(c);
			}
		}
	);
}
function F(H) {
	return [
		[
			{ src: '/portfolio/DeathValley/b_4132686_autumn_maple.jpg', width: 751, height: 500 },
			{ src: '/portfolio/DeathValley/b_4132709_backyard_moon.jpg', width: 751, height: 500 },
			{
				src: '/portfolio/DeathValley/b_4132717_backyard_moon_greenthing.jpg',
				width: 751,
				height: 500
			},
			{
				src: '/portfolio/DeathValley/b_4132739_deathvalley_mineraldeposits.jpg',
				width: 753,
				height: 500
			},
			{ src: '/portfolio/DeathValley/b_4132752_deathvalley_mooon.jpg', width: 753, height: 500 },
			{ src: '/portfolio/DeathValley/b_4132763_goldenwaves.jpg', width: 753, height: 500 },
			{ src: '/portfolio/DeathValley/b_4132793_redsunset.jpg', width: 751, height: 500 },
			{ src: '/portfolio/DeathValley/b_4132804_sequoia_bigtree.jpg', width: 332, height: 500 }
		]
	];
}
class R extends N {
	constructor(n) {
		super(), A(this, n, F, z, x, {});
	}
}
export { R as component };
