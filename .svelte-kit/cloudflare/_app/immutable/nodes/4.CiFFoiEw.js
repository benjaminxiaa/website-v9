import { s as C, n as L } from '../chunks/scheduler.DaE3y3Hf.js';
import {
	S as A,
	i as I,
	e as o,
	s as p,
	h as N,
	c as _,
	d as a,
	b as h,
	g as b,
	f as l,
	j as P,
	k as n
} from '../chunks/index.BOC9BbjL.js';
function q(y) {
	let i,
		f,
		m,
		v,
		r,
		M = '<span>menu</span>',
		d,
		s,
		x =
			'<ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul>',
		g,
		u,
		H = '<h1 class="center">Contact Me</h1>',
		k,
		c,
		T = '<p>Contact Me: <a href="mailto:me@bxia.net">Here</a></p>';
	return {
		c() {
			(i = o('link')),
				(f = p()),
				(m = o('input')),
				(v = p()),
				(r = o('label')),
				(r.innerHTML = M),
				(d = p()),
				(s = o('nav')),
				(s.innerHTML = x),
				(g = p()),
				(u = o('main')),
				(u.innerHTML = H),
				(k = p()),
				(c = o('div')),
				(c.innerHTML = T),
				this.h();
		},
		l(e) {
			const t = N('svelte-15unbop', document.head);
			(i = _(t, 'LINK', { rel: !0, href: !0 })),
				t.forEach(a),
				(f = h(e)),
				(m = _(e, 'INPUT', { type: !0, id: !0, class: !0, title: !0 })),
				(v = h(e)),
				(r = _(e, 'LABEL', { for: !0, 'data-svelte-h': !0 })),
				b(r) !== 'svelte-1bajy75' && (r.innerHTML = M),
				(d = h(e)),
				(s = _(e, 'NAV', { id: !0, class: !0, 'data-svelte-h': !0 })),
				b(s) !== 'svelte-yx3h1m' && (s.innerHTML = x),
				(g = h(e)),
				(u = _(e, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
				b(u) !== 'svelte-qoziz7' && (u.innerHTML = H),
				(k = h(e)),
				(c = _(e, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				b(c) !== 'svelte-1tfgpfq' && (c.innerHTML = T),
				this.h();
		},
		h() {
			l(i, 'rel', 'stylesheet'),
				l(i, 'href', '/css/contact.css'),
				l(m, 'type', 'checkbox'),
				l(m, 'id', 'main-navigation-toggle'),
				l(m, 'class', 'btn btn--close'),
				l(m, 'title', 'Toggle main navigation'),
				l(r, 'for', 'main-navigation-toggle'),
				l(s, 'id', 'main-navigation'),
				l(s, 'class', 'nav-main'),
				l(u, 'class', 'page-container'),
				l(c, 'class', 'after-page');
		},
		m(e, t) {
			P(document.head, i),
				n(e, f, t),
				n(e, m, t),
				n(e, v, t),
				n(e, r, t),
				n(e, d, t),
				n(e, s, t),
				n(e, g, t),
				n(e, u, t),
				n(e, k, t),
				n(e, c, t);
		},
		p: L,
		i: L,
		o: L,
		d(e) {
			e && (a(f), a(m), a(v), a(r), a(d), a(s), a(g), a(u), a(k), a(c)), a(i);
		}
	};
}
class z extends A {
	constructor(i) {
		super(), I(this, i, null, q, C, {});
	}
}
export { z as component };
