import { s as y, n as g } from '../chunks/scheduler.DaE3y3Hf.js';
import {
	S as H,
	i as M,
	e as c,
	s as d,
	h as C,
	c as o,
	d as a,
	b as v,
	g as k,
	f as n,
	j,
	k as r
} from '../chunks/index.BOC9BbjL.js';
function A(T) {
	let s,
		_,
		i,
		h,
		m,
		b = '<span>menu</span>',
		p,
		l,
		x =
			'<ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul>',
		f,
		u,
		L = '<h1 class="center">Benjamin Xia</h1>';
	return {
		c() {
			(s = c('link')),
				(_ = d()),
				(i = c('input')),
				(h = d()),
				(m = c('label')),
				(m.innerHTML = b),
				(p = d()),
				(l = c('nav')),
				(l.innerHTML = x),
				(f = d()),
				(u = c('main')),
				(u.innerHTML = L),
				this.h();
		},
		l(e) {
			const t = C('svelte-xkjfg4', document.head);
			(s = o(t, 'LINK', { rel: !0, href: !0 })),
				t.forEach(a),
				(_ = v(e)),
				(i = o(e, 'INPUT', { type: !0, id: !0, class: !0, title: !0 })),
				(h = v(e)),
				(m = o(e, 'LABEL', { for: !0, 'data-svelte-h': !0 })),
				k(m) !== 'svelte-1u5hc09' && (m.innerHTML = b),
				(p = v(e)),
				(l = o(e, 'NAV', { id: !0, class: !0, 'data-svelte-h': !0 })),
				k(l) !== 'svelte-jtcr8' && (l.innerHTML = x),
				(f = v(e)),
				(u = o(e, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
				k(u) !== 'svelte-1pamu53' && (u.innerHTML = L),
				this.h();
		},
		h() {
			n(s, 'rel', 'stylesheet'),
				n(s, 'href', '/css/index.css'),
				n(i, 'type', 'checkbox'),
				n(i, 'id', 'main-navigation-toggle'),
				n(i, 'class', 'btn btn--close'),
				n(i, 'title', 'Toggle main navigation'),
				n(m, 'for', 'main-navigation-toggle'),
				n(l, 'id', 'main-navigation'),
				n(l, 'class', 'nav-main'),
				n(u, 'class', 'page-container');
		},
		m(e, t) {
			j(document.head, s),
				r(e, _, t),
				r(e, i, t),
				r(e, h, t),
				r(e, m, t),
				r(e, p, t),
				r(e, l, t),
				r(e, f, t),
				r(e, u, t);
		},
		p: g,
		i: g,
		o: g,
		d(e) {
			e && (a(_), a(i), a(h), a(m), a(p), a(l), a(f), a(u)), a(s);
		}
	};
}
class I extends H {
	constructor(s) {
		super(), M(this, s, null, A, y, {});
	}
}
export { I as component };
