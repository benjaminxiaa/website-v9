import { s as C, n as L } from '../chunks/scheduler.DaE3y3Hf.js';
import {
	S as A,
	i as I,
	e as c,
	s as p,
	h as N,
	c as _,
	d as a,
	b as d,
	g as k,
	f as s,
	j as P,
	k as l
} from '../chunks/index.BOC9BbjL.js';
function j(H) {
	let n,
		h,
		r,
		f,
		u,
		y = '<span>menu</span>',
		g,
		i,
		M =
			'<ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul>',
		v,
		m,
		T = '<h1 class="center">About Me</h1>',
		b,
		o,
		x = `<p>Lorem ipsum dolor sit amet diam rebum aliquyam velit. Gubergren justo
    accumsan ut et stet sit dolor consetetur dolore consetetur labore gubergren
    kasd et. Ipsum ipsum sea lorem sadipscing amet adipiscing et eum suscipit
    sed magna dolore eros magna. Ut et sea. Kasd no vel kasd facilisis gubergren
    ut dolor eos.</p>`;
	return {
		c() {
			(n = c('link')),
				(h = p()),
				(r = c('input')),
				(f = p()),
				(u = c('label')),
				(u.innerHTML = y),
				(g = p()),
				(i = c('nav')),
				(i.innerHTML = M),
				(v = p()),
				(m = c('main')),
				(m.innerHTML = T),
				(b = p()),
				(o = c('div')),
				(o.innerHTML = x),
				this.h();
		},
		l(e) {
			const t = N('svelte-186illy', document.head);
			(n = _(t, 'LINK', { rel: !0, href: !0 })),
				t.forEach(a),
				(h = d(e)),
				(r = _(e, 'INPUT', { type: !0, id: !0, class: !0, title: !0 })),
				(f = d(e)),
				(u = _(e, 'LABEL', { for: !0, 'data-svelte-h': !0 })),
				k(u) !== 'svelte-1bajy75' && (u.innerHTML = y),
				(g = d(e)),
				(i = _(e, 'NAV', { id: !0, class: !0, 'data-svelte-h': !0 })),
				k(i) !== 'svelte-yx3h1m' && (i.innerHTML = M),
				(v = d(e)),
				(m = _(e, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
				k(m) !== 'svelte-htsthm' && (m.innerHTML = T),
				(b = d(e)),
				(o = _(e, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				k(o) !== 'svelte-1tr7mw3' && (o.innerHTML = x),
				this.h();
		},
		h() {
			s(n, 'rel', 'stylesheet'),
				s(n, 'href', '/css/about.css'),
				s(r, 'type', 'checkbox'),
				s(r, 'id', 'main-navigation-toggle'),
				s(r, 'class', 'btn btn--close'),
				s(r, 'title', 'Toggle main navigation'),
				s(u, 'for', 'main-navigation-toggle'),
				s(i, 'id', 'main-navigation'),
				s(i, 'class', 'nav-main'),
				s(m, 'class', 'page-container'),
				s(o, 'class', 'after-page');
		},
		m(e, t) {
			P(document.head, n),
				l(e, h, t),
				l(e, r, t),
				l(e, f, t),
				l(e, u, t),
				l(e, g, t),
				l(e, i, t),
				l(e, v, t),
				l(e, m, t),
				l(e, b, t),
				l(e, o, t);
		},
		p: L,
		i: L,
		o: L,
		d(e) {
			e && (a(h), a(r), a(f), a(u), a(g), a(i), a(v), a(m), a(b), a(o)), a(n);
		}
	};
}
class E extends A {
	constructor(n) {
		super(), I(this, n, null, j, C, {});
	}
}
export { E as component };
