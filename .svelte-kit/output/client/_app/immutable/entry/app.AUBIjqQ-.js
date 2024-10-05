const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'../nodes/0.Ce88la69.js',
			'../chunks/scheduler.DaE3y3Hf.js',
			'../chunks/index.BOC9BbjL.js',
			'../nodes/1.I5MlykRt.js',
			'../chunks/entry.Bt16qeqp.js',
			'../nodes/2.Crw5cB1Q.js',
			'../nodes/3.Dkq1fPou.js',
			'../nodes/4.CiFFoiEw.js',
			'../nodes/5.sBRsVE09.js',
			'../nodes/6.DFI2vCX-.js',
			'../chunks/Gallery.C5J08gKM.js',
			'../assets/Gallery.BqwnsGb-.css',
			'../nodes/7.BCjKqRZr.js',
			'../nodes/8.BvIHF-TM.js',
			'../nodes/9.D0hck9nq.js',
			'../nodes/10.BR3AQE-n.js'
		])
) => i.map((i) => d[i]);
import { s as N, d as B, o as U, e as I, t as z } from '../chunks/scheduler.DaE3y3Hf.js';
import {
	S as W,
	i as j,
	s as F,
	v as d,
	b as G,
	k as b,
	a as g,
	w as A,
	t as w,
	d as E,
	e as H,
	c as J,
	m as K,
	f as O,
	x as h,
	q as Q,
	r as X,
	u as Y,
	y as D,
	z as y,
	l as R,
	n as T,
	o as P,
	p as L
} from '../chunks/index.BOC9BbjL.js';
const Z = 'modulepreload',
	M = function (a, e) {
		return new URL(a, e).href;
	},
	V = {},
	p = function (e, n, i) {
		let r = Promise.resolve();
		if (n && n.length > 0) {
			const _ = document.getElementsByTagName('link'),
				t = document.querySelector('meta[property=csp-nonce]'),
				o = (t == null ? void 0 : t.nonce) || (t == null ? void 0 : t.getAttribute('nonce'));
			r = Promise.all(
				n.map((s) => {
					if (((s = M(s, i)), s in V)) return;
					V[s] = !0;
					const f = s.endsWith('.css'),
						l = f ? '[rel="stylesheet"]' : '';
					if (!!i)
						for (let k = _.length - 1; k >= 0; k--) {
							const v = _[k];
							if (v.href === s && (!f || v.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${s}"]${l}`)) return;
					const u = document.createElement('link');
					if (
						((u.rel = f ? 'stylesheet' : Z),
						f || ((u.as = 'script'), (u.crossOrigin = '')),
						(u.href = s),
						o && u.setAttribute('nonce', o),
						document.head.appendChild(u),
						f)
					)
						return new Promise((k, v) => {
							u.addEventListener('load', k),
								u.addEventListener('error', () => v(new Error(`Unable to preload CSS for ${s}`)));
						});
				})
			);
		}
		return r
			.then(() => e())
			.catch((_) => {
				const t = new Event('vite:preloadError', { cancelable: !0 });
				if (((t.payload = _), window.dispatchEvent(t), !t.defaultPrevented)) throw _;
			});
	},
	oe = {};
function $(a) {
	let e, n, i;
	var r = a[1][0];
	function _(t, o) {
		return { props: { data: t[3], form: t[2] } };
	}
	return (
		r && ((e = y(r, _(a))), a[12](e)),
		{
			c() {
				e && R(e.$$.fragment), (n = d());
			},
			l(t) {
				e && T(e.$$.fragment, t), (n = d());
			},
			m(t, o) {
				e && P(e, t, o), b(t, n, o), (i = !0);
			},
			p(t, o) {
				if (o & 2 && r !== (r = t[1][0])) {
					if (e) {
						D();
						const s = e;
						g(s.$$.fragment, 1, 0, () => {
							L(s, 1);
						}),
							A();
					}
					r
						? ((e = y(r, _(t))),
							t[12](e),
							R(e.$$.fragment),
							w(e.$$.fragment, 1),
							P(e, n.parentNode, n))
						: (e = null);
				} else if (r) {
					const s = {};
					o & 8 && (s.data = t[3]), o & 4 && (s.form = t[2]), e.$set(s);
				}
			},
			i(t) {
				i || (e && w(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && g(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && E(n), a[12](null), e && L(e, t);
			}
		}
	);
}
function x(a) {
	let e, n, i;
	var r = a[1][0];
	function _(t, o) {
		return { props: { data: t[3], $$slots: { default: [ee] }, $$scope: { ctx: t } } };
	}
	return (
		r && ((e = y(r, _(a))), a[11](e)),
		{
			c() {
				e && R(e.$$.fragment), (n = d());
			},
			l(t) {
				e && T(e.$$.fragment, t), (n = d());
			},
			m(t, o) {
				e && P(e, t, o), b(t, n, o), (i = !0);
			},
			p(t, o) {
				if (o & 2 && r !== (r = t[1][0])) {
					if (e) {
						D();
						const s = e;
						g(s.$$.fragment, 1, 0, () => {
							L(s, 1);
						}),
							A();
					}
					r
						? ((e = y(r, _(t))),
							t[11](e),
							R(e.$$.fragment),
							w(e.$$.fragment, 1),
							P(e, n.parentNode, n))
						: (e = null);
				} else if (r) {
					const s = {};
					o & 8 && (s.data = t[3]), o & 8215 && (s.$$scope = { dirty: o, ctx: t }), e.$set(s);
				}
			},
			i(t) {
				i || (e && w(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && g(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && E(n), a[11](null), e && L(e, t);
			}
		}
	);
}
function ee(a) {
	let e, n, i;
	var r = a[1][1];
	function _(t, o) {
		return { props: { data: t[4], form: t[2] } };
	}
	return (
		r && ((e = y(r, _(a))), a[10](e)),
		{
			c() {
				e && R(e.$$.fragment), (n = d());
			},
			l(t) {
				e && T(e.$$.fragment, t), (n = d());
			},
			m(t, o) {
				e && P(e, t, o), b(t, n, o), (i = !0);
			},
			p(t, o) {
				if (o & 2 && r !== (r = t[1][1])) {
					if (e) {
						D();
						const s = e;
						g(s.$$.fragment, 1, 0, () => {
							L(s, 1);
						}),
							A();
					}
					r
						? ((e = y(r, _(t))),
							t[10](e),
							R(e.$$.fragment),
							w(e.$$.fragment, 1),
							P(e, n.parentNode, n))
						: (e = null);
				} else if (r) {
					const s = {};
					o & 16 && (s.data = t[4]), o & 4 && (s.form = t[2]), e.$set(s);
				}
			},
			i(t) {
				i || (e && w(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && g(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && E(n), a[10](null), e && L(e, t);
			}
		}
	);
}
function S(a) {
	let e,
		n = a[6] && q(a);
	return {
		c() {
			(e = H('div')), n && n.c(), this.h();
		},
		l(i) {
			e = J(i, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var r = K(e);
			n && n.l(r), r.forEach(E), this.h();
		},
		h() {
			O(e, 'id', 'svelte-announcer'),
				O(e, 'aria-live', 'assertive'),
				O(e, 'aria-atomic', 'true'),
				h(e, 'position', 'absolute'),
				h(e, 'left', '0'),
				h(e, 'top', '0'),
				h(e, 'clip', 'rect(0 0 0 0)'),
				h(e, 'clip-path', 'inset(50%)'),
				h(e, 'overflow', 'hidden'),
				h(e, 'white-space', 'nowrap'),
				h(e, 'width', '1px'),
				h(e, 'height', '1px');
		},
		m(i, r) {
			b(i, e, r), n && n.m(e, null);
		},
		p(i, r) {
			i[6] ? (n ? n.p(i, r) : ((n = q(i)), n.c(), n.m(e, null))) : n && (n.d(1), (n = null));
		},
		d(i) {
			i && E(e), n && n.d();
		}
	};
}
function q(a) {
	let e;
	return {
		c() {
			e = Q(a[7]);
		},
		l(n) {
			e = X(n, a[7]);
		},
		m(n, i) {
			b(n, e, i);
		},
		p(n, i) {
			i & 128 && Y(e, n[7]);
		},
		d(n) {
			n && E(e);
		}
	};
}
function te(a) {
	let e, n, i, r, _;
	const t = [x, $],
		o = [];
	function s(l, m) {
		return l[1][1] ? 0 : 1;
	}
	(e = s(a)), (n = o[e] = t[e](a));
	let f = a[5] && S(a);
	return {
		c() {
			n.c(), (i = F()), f && f.c(), (r = d());
		},
		l(l) {
			n.l(l), (i = G(l)), f && f.l(l), (r = d());
		},
		m(l, m) {
			o[e].m(l, m), b(l, i, m), f && f.m(l, m), b(l, r, m), (_ = !0);
		},
		p(l, [m]) {
			let u = e;
			(e = s(l)),
				e === u
					? o[e].p(l, m)
					: (D(),
						g(o[u], 1, 1, () => {
							o[u] = null;
						}),
						A(),
						(n = o[e]),
						n ? n.p(l, m) : ((n = o[e] = t[e](l)), n.c()),
						w(n, 1),
						n.m(i.parentNode, i)),
				l[5]
					? f
						? f.p(l, m)
						: ((f = S(l)), f.c(), f.m(r.parentNode, r))
					: f && (f.d(1), (f = null));
		},
		i(l) {
			_ || (w(n), (_ = !0));
		},
		o(l) {
			g(n), (_ = !1);
		},
		d(l) {
			l && (E(i), E(r)), o[e].d(l), f && f.d(l);
		}
	};
}
function ne(a, e, n) {
	let { stores: i } = e,
		{ page: r } = e,
		{ constructors: _ } = e,
		{ components: t = [] } = e,
		{ form: o } = e,
		{ data_0: s = null } = e,
		{ data_1: f = null } = e;
	B(i.page.notify);
	let l = !1,
		m = !1,
		u = null;
	U(() => {
		const c = i.page.subscribe(() => {
			l &&
				(n(6, (m = !0)),
				z().then(() => {
					n(7, (u = document.title || 'untitled page'));
				}));
		});
		return n(5, (l = !0)), c;
	});
	function k(c) {
		I[c ? 'unshift' : 'push'](() => {
			(t[1] = c), n(0, t);
		});
	}
	function v(c) {
		I[c ? 'unshift' : 'push'](() => {
			(t[0] = c), n(0, t);
		});
	}
	function C(c) {
		I[c ? 'unshift' : 'push'](() => {
			(t[0] = c), n(0, t);
		});
	}
	return (
		(a.$$set = (c) => {
			'stores' in c && n(8, (i = c.stores)),
				'page' in c && n(9, (r = c.page)),
				'constructors' in c && n(1, (_ = c.constructors)),
				'components' in c && n(0, (t = c.components)),
				'form' in c && n(2, (o = c.form)),
				'data_0' in c && n(3, (s = c.data_0)),
				'data_1' in c && n(4, (f = c.data_1));
		}),
		(a.$$.update = () => {
			a.$$.dirty & 768 && i.page.set(r);
		}),
		[t, _, o, s, f, l, m, u, i, r, k, v, C]
	);
}
class se extends W {
	constructor(e) {
		super(),
			j(this, e, ne, te, N, {
				stores: 8,
				page: 9,
				constructors: 1,
				components: 0,
				form: 2,
				data_0: 3,
				data_1: 4
			});
	}
}
const ae = [
		() => p(() => import('../nodes/0.Ce88la69.js'), __vite__mapDeps([0, 1, 2]), import.meta.url),
		() => p(() => import('../nodes/1.I5MlykRt.js'), __vite__mapDeps([3, 1, 2, 4]), import.meta.url),
		() => p(() => import('../nodes/2.Crw5cB1Q.js'), __vite__mapDeps([5, 1, 2]), import.meta.url),
		() => p(() => import('../nodes/3.Dkq1fPou.js'), __vite__mapDeps([6, 1, 2]), import.meta.url),
		() => p(() => import('../nodes/4.CiFFoiEw.js'), __vite__mapDeps([7, 1, 2]), import.meta.url),
		() => p(() => import('../nodes/5.sBRsVE09.js'), __vite__mapDeps([8, 1, 2]), import.meta.url),
		() =>
			p(
				() => import('../nodes/6.DFI2vCX-.js'),
				__vite__mapDeps([9, 1, 2, 10, 11]),
				import.meta.url
			),
		() =>
			p(
				() => import('../nodes/7.BCjKqRZr.js'),
				__vite__mapDeps([12, 1, 2, 10, 11]),
				import.meta.url
			),
		() =>
			p(
				() => import('../nodes/8.BvIHF-TM.js'),
				__vite__mapDeps([13, 1, 2, 10, 11]),
				import.meta.url
			),
		() =>
			p(
				() => import('../nodes/9.D0hck9nq.js'),
				__vite__mapDeps([14, 1, 2, 10, 11]),
				import.meta.url
			),
		() => p(() => import('../nodes/10.BR3AQE-n.js'), __vite__mapDeps([15, 1, 2]), import.meta.url)
	],
	le = [],
	fe = {
		'/': [2],
		'/about': [3],
		'/contact': [4],
		'/work/photography': [5],
		'/work/photography/2022/death-valley': [6],
		'/work/photography/2023/big-sur': [7],
		'/work/photography/2023/hakone-gardens': [8],
		'/work/photography/2023/new-mexico': [9],
		'/work/programming': [10]
	},
	ce = {
		handleError: ({ error: a }) => {
			console.error(a);
		},
		reroute: () => {}
	};
export {
	fe as dictionary,
	ce as hooks,
	oe as matchers,
	ae as nodes,
	se as root,
	le as server_loads
};
