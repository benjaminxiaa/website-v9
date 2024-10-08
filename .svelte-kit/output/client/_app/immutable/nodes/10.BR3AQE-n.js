import { s as C, n as b } from '../chunks/scheduler.DaE3y3Hf.js';
import {
	S as P,
	i as w,
	e as _,
	s as p,
	h as A,
	c as o,
	d as a,
	b as h,
	g as L,
	f as l,
	j as I,
	k as s
} from '../chunks/index.BOC9BbjL.js';
function N(y) {
	let i,
		f,
		m,
		v,
		r,
		T = '<span>menu</span>',
		d,
		n,
		H =
			'<ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul>',
		g,
		u,
		M = '<h1 class="center">Programming</h1>',
		k,
		c,
		x = '';
	return {
		c() {
			(i = _('link')),
				(f = p()),
				(m = _('input')),
				(v = p()),
				(r = _('label')),
				(r.innerHTML = T),
				(d = p()),
				(n = _('nav')),
				(n.innerHTML = H),
				(g = p()),
				(u = _('main')),
				(u.innerHTML = M),
				(k = p()),
				(c = _('div')),
				(c.innerHTML = x),
				this.h();
		},
		l(e) {
			const t = A('svelte-1w6qasl', document.head);
			(i = o(t, 'LINK', { rel: !0, href: !0 })),
				t.forEach(a),
				(f = h(e)),
				(m = o(e, 'INPUT', { type: !0, id: !0, class: !0, title: !0 })),
				(v = h(e)),
				(r = o(e, 'LABEL', { for: !0, 'data-svelte-h': !0 })),
				L(r) !== 'svelte-7cm2q6' && (r.innerHTML = T),
				(d = h(e)),
				(n = o(e, 'NAV', { id: !0, class: !0, 'data-svelte-h': !0 })),
				L(n) !== 'svelte-1fdby62' && (n.innerHTML = H),
				(g = h(e)),
				(u = o(e, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
				L(u) !== 'svelte-l9j3pt' && (u.innerHTML = M),
				(k = h(e)),
				(c = o(e, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				L(c) !== 'svelte-1w2fvu9' && (c.innerHTML = x),
				this.h();
		},
		h() {
			l(i, 'rel', 'stylesheet'),
				l(i, 'href', '/css/programming.css'),
				l(m, 'type', 'checkbox'),
				l(m, 'id', 'main-navigation-toggle'),
				l(m, 'class', 'btn btn--close'),
				l(m, 'title', 'Toggle main navigation'),
				l(r, 'for', 'main-navigation-toggle'),
				l(n, 'id', 'main-navigation'),
				l(n, 'class', 'nav-main'),
				l(u, 'class', 'page-container'),
				l(c, 'class', 'after-page');
		},
		m(e, t) {
			I(document.head, i),
				s(e, f, t),
				s(e, m, t),
				s(e, v, t),
				s(e, r, t),
				s(e, d, t),
				s(e, n, t),
				s(e, g, t),
				s(e, u, t),
				s(e, k, t),
				s(e, c, t);
		},
		p: b,
		i: b,
		o: b,
		d(e) {
			e && (a(f), a(m), a(v), a(r), a(d), a(n), a(g), a(u), a(k), a(c)), a(i);
		}
	};
}
class E extends P {
	constructor(i) {
		super(), w(this, i, null, N, C, {});
	}
}
export { E as component };
