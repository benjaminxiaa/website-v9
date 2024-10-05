import { s as w, n as b } from '../chunks/scheduler.DaE3y3Hf.js';
import {
	S as C,
	i as P,
	e as h,
	s as p,
	h as I,
	c as u,
	d as t,
	b as _,
	g as y,
	f as s,
	j as A,
	k as n
} from '../chunks/index.BOC9BbjL.js';
function N(M) {
	let i,
		f,
		r,
		v,
		o,
		L = '<span>menu</span>',
		d,
		l,
		x =
			'<ul class="menu"><li class="menu__item"><a class="menu__link" href="/">Home</a></li> <li class="menu__item"><span class="menu__link menu__parent">Work</span> <ul class="submenu"><li class="menu__item"><a class="menu__link" href="/work/photography">Photography</a></li> <li class="menu__item"><a class="menu__link" href="/work/programming">Programming</a></li></ul></li> <li class="menu__item"><a class="menu__link" href="/about">About</a></li> <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li></ul>',
		g,
		c,
		T = '<h1 class="center">Photography</h1>',
		k,
		m,
		H =
			'<div class="after-page"><h2>2022</h2> <span><a class="link" href="/work/photography/2022/death-valley">death valley</a></span> <br/> <h2>2023</h2> <span><a class="link" href="/work/photography/2023/big-sur">big sur</a></span> <span><a class="link" href="/work/photography/2023/hakone-gardens">hakone gardens</a></span> <span><a class="link" href="/work/photography/2023/new-mexico">new mexico</a></span> <br/> <h2>2024</h2> <p>In Progress</p></div>';
	return {
		c() {
			(i = h('link')),
				(f = p()),
				(r = h('input')),
				(v = p()),
				(o = h('label')),
				(o.innerHTML = L),
				(d = p()),
				(l = h('nav')),
				(l.innerHTML = x),
				(g = p()),
				(c = h('main')),
				(c.innerHTML = T),
				(k = p()),
				(m = h('div')),
				(m.innerHTML = H),
				this.h();
		},
		l(e) {
			const a = I('svelte-9rm4df', document.head);
			(i = u(a, 'LINK', { rel: !0, href: !0 })),
				a.forEach(t),
				(f = _(e)),
				(r = u(e, 'INPUT', { type: !0, id: !0, class: !0, title: !0 })),
				(v = _(e)),
				(o = u(e, 'LABEL', { for: !0, 'data-svelte-h': !0 })),
				y(o) !== 'svelte-7cm2q6' && (o.innerHTML = L),
				(d = _(e)),
				(l = u(e, 'NAV', { id: !0, class: !0, 'data-svelte-h': !0 })),
				y(l) !== 'svelte-1fdby62' && (l.innerHTML = x),
				(g = _(e)),
				(c = u(e, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
				y(c) !== 'svelte-ync6on' && (c.innerHTML = T),
				(k = _(e)),
				(m = u(e, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				y(m) !== 'svelte-tcv549' && (m.innerHTML = H),
				this.h();
		},
		h() {
			s(i, 'rel', 'stylesheet'),
				s(i, 'href', '/css/photography.css'),
				s(r, 'type', 'checkbox'),
				s(r, 'id', 'main-navigation-toggle'),
				s(r, 'class', 'btn btn--close'),
				s(r, 'title', 'Toggle main navigation'),
				s(o, 'for', 'main-navigation-toggle'),
				s(l, 'id', 'main-navigation'),
				s(l, 'class', 'nav-main'),
				s(c, 'class', 'page-container'),
				s(m, 'class', 'outer-container');
		},
		m(e, a) {
			A(document.head, i),
				n(e, f, a),
				n(e, r, a),
				n(e, v, a),
				n(e, o, a),
				n(e, d, a),
				n(e, l, a),
				n(e, g, a),
				n(e, c, a),
				n(e, k, a),
				n(e, m, a);
		},
		p: b,
		i: b,
		o: b,
		d(e) {
			e && (t(f), t(r), t(v), t(o), t(d), t(l), t(g), t(c), t(k), t(m)), t(i);
		}
	};
}
class S extends C {
	constructor(i) {
		super(), P(this, i, null, N, w, {});
	}
}
export { S as component };
