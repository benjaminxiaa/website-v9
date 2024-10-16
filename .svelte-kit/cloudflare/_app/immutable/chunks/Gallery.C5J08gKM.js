import {
	s as Q,
	y as k,
	n as z,
	z as C,
	A as nt,
	l as st,
	c as ot,
	u as it,
	g as ct,
	a as rt
} from './scheduler.DaE3y3Hf.js';
import {
	S as T,
	i as X,
	e as L,
	c as R,
	A as D,
	k as y,
	d as m,
	m as E,
	f as b,
	x as M,
	B as S,
	j as Y,
	C as lt,
	t as w,
	y as Z,
	w as N,
	a as H,
	D as at,
	E as ut,
	s as ft,
	b as ht,
	z as P,
	l as q,
	v as A,
	n as _t,
	o as B,
	p as G
} from './index.BOC9BbjL.js';
function U(e) {
	return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function F(e, t) {
	const n = {},
		i = {},
		c = { $$scope: 1 };
	let a = e.length;
	for (; a--; ) {
		const o = e[a],
			l = t[a];
		if (l) {
			for (const s in o) s in l || (i[s] = 1);
			for (const s in l) c[s] || ((n[s] = l[s]), (c[s] = 1));
			e[a] = l;
		} else for (const s in o) c[s] = 1;
	}
	for (const o in i) o in n || (n[o] = void 0);
	return n;
}
function V(e) {
	return typeof e == 'object' && e !== null ? e : {};
}
function dt(e) {
	let t,
		n = [e[0]],
		i = {};
	for (let c = 0; c < n.length; c += 1) i = k(i, n[c]);
	return {
		c() {
			(t = L('img')), this.h();
		},
		l(c) {
			(t = R(c, 'IMG', {})), this.h();
		},
		h() {
			D(t, i);
		},
		m(c, a) {
			y(c, t, a);
		},
		p(c, [a]) {
			D(t, (i = F(n, [a & 1 && c[0]])));
		},
		i: z,
		o: z,
		d(c) {
			c && m(t);
		}
	};
}
function gt(e, t, n) {
	const i = [];
	let c = C(t, i);
	return (
		(e.$$set = (a) => {
			(t = k(k({}, t), nt(a))), n(0, (c = C(t, i)));
		}),
		[c]
	);
}
class mt extends T {
	constructor(t) {
		super(), X(this, t, gt, dt, Q, {});
	}
}
const W = {
	single_source_shortest_paths: function (e, t, n) {
		var i = {},
			c = {};
		c[t] = 0;
		var a = new $(function (g) {
			return g.cost;
		});
		a.push({ value: t, cost: 0 });
		for (var o, l, s, r, u, _, h, f; a.size(); ) {
			(o = a.pop()), (l = o.value), (s = o.cost), (r = e(l) || {});
			for (var d in r)
				(u = r[d]),
					(_ = s + u),
					(h = c[d]),
					(f = typeof c[d] > 'u'),
					(f || h > _) && ((c[d] = _), a.push({ value: d, cost: _ }), (i[d] = l));
		}
		if (typeof c[n] > 'u') {
			var p = ['Could not find a path from ', t, ' to ', n, '.'].join('');
			throw new Error(p);
		}
		return i;
	},
	extract_shortest_path_from_predecessor_list: function (e, t) {
		for (var n = [], i = t; i; ) n.push(i), e[i], (i = e[i]);
		return n.reverse(), n;
	},
	find_path: function (e, t, n) {
		var i = W.single_source_shortest_paths(e, t, n);
		return W.extract_shortest_path_from_predecessor_list(i, n);
	}
};
function $(e) {
	(this.content = []), (this.scoreFunction = e);
}
$.prototype = {
	push: function (e) {
		this.content.push(e), this.bubbleUp(this.content.length - 1);
	},
	pop: function () {
		var e = this.content[0],
			t = this.content.pop();
		return this.content.length > 0 && ((this.content[0] = t), this.sinkDown(0)), e;
	},
	remove: function (e) {
		for (var t = this.content.length, n = 0; n < t; n++)
			if (this.content[n] === e) {
				var i = this.content.pop();
				n !== t - 1 &&
					((this.content[n] = i),
					this.scoreFunction(i) < this.scoreFunction(e) ? this.bubbleUp(n) : this.sinkDown(n));
				return;
			}
		throw new Error('Node not found.');
	},
	size: function () {
		return this.content.length;
	},
	bubbleUp: function (e) {
		for (var t = this.content[e]; e > 0; ) {
			var n = Math.floor((e + 1) / 2) - 1,
				i = this.content[n];
			if (this.scoreFunction(t) < this.scoreFunction(i))
				(this.content[n] = t), (this.content[e] = i), (e = n);
			else break;
		}
	},
	sinkDown: function (e) {
		for (var t = this.content.length, n = this.content[e], i = this.scoreFunction(n); ; ) {
			var c = (e + 1) * 2,
				a = c - 1,
				o = null;
			if (a < t) {
				var l = this.content[a],
					s = this.scoreFunction(l);
				s < i && (o = a);
			}
			if (c < t) {
				var r = this.content[c],
					u = this.scoreFunction(r);
				u < (o === null ? i : s) && (o = c);
			}
			if (o != null) (this.content[e] = this.content[o]), (this.content[o] = n), (e = o);
			else break;
		}
	}
};
function I(e) {
	return Math.round(e * 100 + Number.EPSILON) / 100;
}
function x(e, t) {
	return I(e / t);
}
function pt(e, t) {
	return I(e / t);
}
function wt(e, t) {
	return I(e * t);
}
function tt(e, t, n) {
	const i = t - (e.length - 1) * n,
		c = e.reduce((a, { ratio: o }) => a + o, 0);
	return pt(i, c);
}
function vt(e, t, n, i, c, a) {
	const o = e.slice(t, n),
		l = tt(o, i, a);
	return Math.pow(Math.abs(l - c), 2);
}
function bt(e, t) {
	if (e < 420) return 2;
	const n = x(e, t) / 0.75;
	return Math.round(n * 1.5);
}
function kt({
	images: e,
	containerWidth: t,
	targetHeight: n,
	gutter: i = 2,
	seekLimit: c = bt,
	byRow: a = !1
} = {}) {
	const o = e.map((h, f) => ({ ...h, index: f, ratio: x(h.width, h.height) })),
		l = c(t, n),
		s = (h) => {
			const f = {};
			(h = +h), (f[h] = 0);
			for (let d = h + 1; d < o.length + 1 && !(d - h > l); ++d) f['' + d] = vt(o, h, d, t, n, i);
			return f;
		},
		r = W.find_path(s, '0', o.length),
		u = [],
		_ = [];
	for (let h = 0; h < r.length; h++)
		if (r[h + 1]) {
			const f = o.slice(+r[h], +r[h + 1]),
				d = h === r.length - 2,
				p = tt(f, t, i);
			f.forEach((g, v) => {
				(g.scaledWidth = wt(p, g.ratio)),
					(g.scaledHeight = p),
					(g.scaledWidthPc = I((g.scaledWidth / t) * 100)),
					v === f.length - 1 && (g.isLastInRow = !0),
					(g.isLastRow = d),
					_.push(g);
			}),
				u.push(f);
		}
	return a ? u : _;
}
function O(e, t, n) {
	const i = e.slice();
	return (
		(i[10] = t[n].index),
		(i[11] = t[n].ratio),
		(i[12] = t[n].scaledHeight),
		(i[13] = t[n].scaledWidth),
		(i[14] = t[n].isLastInRow),
		(i[15] = t[n].isLastRow),
		(i[16] = t[n].scaledWidthPc),
		(i[17] = ut(t[n], [
			'index',
			'ratio',
			'scaledHeight',
			'scaledWidth',
			'isLastInRow',
			'isLastRow',
			'scaledWidthPc'
		])),
		i
	);
}
const Ht = (e) => ({ index: e & 4, image: e & 4 }),
	J = (e) => ({ index: e[10], image: e[17] });
function Lt(e) {
	let t, n, i;
	const c = [e[17]];
	var a = e[0];
	function o(l, s) {
		let r = {};
		for (let u = 0; u < c.length; u += 1) r = k(r, c[u]);
		return s !== void 0 && s & 4 && (r = k(r, F(c, [V(l[17])]))), { props: r };
	}
	return (
		a && (t = P(a, o(e))),
		{
			c() {
				t && q(t.$$.fragment), (n = A());
			},
			l(l) {
				t && _t(t.$$.fragment, l), (n = A());
			},
			m(l, s) {
				t && B(t, l, s), y(l, n, s), (i = !0);
			},
			p(l, s) {
				if (s & 1 && a !== (a = l[0])) {
					if (t) {
						Z();
						const r = t;
						H(r.$$.fragment, 1, 0, () => {
							G(r, 1);
						}),
							N();
					}
					a
						? ((t = P(a, o(l, s))), q(t.$$.fragment), w(t.$$.fragment, 1), B(t, n.parentNode, n))
						: (t = null);
				} else if (a) {
					const r = s & 4 ? F(c, [V(l[17])]) : {};
					t.$set(r);
				}
			},
			i(l) {
				i || (t && w(t.$$.fragment, l), (i = !0));
			},
			o(l) {
				t && H(t.$$.fragment, l), (i = !1);
			},
			d(l) {
				l && m(n), t && G(t, l);
			}
		}
	);
}
function K(e) {
	let t, n, i, c;
	const a = e[8].default,
		o = ot(a, e, e[7], J),
		l = o || Lt(e);
	return {
		c() {
			(t = L('div')), l && l.c(), (n = ft()), this.h();
		},
		l(s) {
			t = R(s, 'DIV', { class: !0, style: !0 });
			var r = E(t);
			l && l.l(r), (n = ht(r)), r.forEach(m), this.h();
		},
		h() {
			b(t, 'class', 'image svelte-6b2t9q'),
				b(
					t,
					'style',
					(i = e[3]({
						scaledHeight: e[12],
						scaledWidth: e[13],
						isLastInRow: e[14],
						isLastRow: e[15]
					}))
				);
		},
		m(s, r) {
			y(s, t, r), l && l.m(t, null), Y(t, n), (c = !0);
		},
		p(s, r) {
			o
				? o.p && (!c || r & 132) && it(o, a, s, s[7], c ? rt(a, s[7], r, Ht) : ct(s[7]), J)
				: l && l.p && (!c || r & 5) && l.p(s, c ? r : -1),
				(!c ||
					(r & 4 &&
						i !==
							(i = s[3]({
								scaledHeight: s[12],
								scaledWidth: s[13],
								isLastInRow: s[14],
								isLastRow: s[15]
							})))) &&
					b(t, 'style', i);
		},
		i(s) {
			c || (w(l, s), (c = !0));
		},
		o(s) {
			H(l, s), (c = !1);
		},
		d(s) {
			s && m(t), l && l.d(s);
		}
	};
}
function Rt(e) {
	let t,
		n,
		i,
		c,
		a = U(e[2]),
		o = [];
	for (let s = 0; s < a.length; s += 1) o[s] = K(O(e, a, s));
	const l = (s) =>
		H(o[s], 1, 1, () => {
			o[s] = null;
		});
	return {
		c() {
			(t = L('div')), (n = L('div'));
			for (let s = 0; s < o.length; s += 1) o[s].c();
			this.h();
		},
		l(s) {
			t = R(s, 'DIV', { class: !0 });
			var r = E(t);
			n = R(r, 'DIV', { class: !0, style: !0 });
			var u = E(n);
			for (let _ = 0; _ < o.length; _ += 1) o[_].l(u);
			u.forEach(m), r.forEach(m), this.h();
		},
		h() {
			b(n, 'class', 'container svelte-6b2t9q'),
				M(n, 'width', e[1] + 'px'),
				S(n, 'hidden', !e[1]),
				b(t, 'class', 'masonry svelte-6b2t9q'),
				st(() => e[9].call(t));
		},
		m(s, r) {
			y(s, t, r), Y(t, n);
			for (let u = 0; u < o.length; u += 1) o[u] && o[u].m(n, null);
			(i = lt(t, e[9].bind(t))), (c = !0);
		},
		p(s, [r]) {
			if (r & 141) {
				a = U(s[2]);
				let u;
				for (u = 0; u < a.length; u += 1) {
					const _ = O(s, a, u);
					o[u]
						? (o[u].p(_, r), w(o[u], 1))
						: ((o[u] = K(_)), o[u].c(), w(o[u], 1), o[u].m(n, null));
				}
				for (Z(), u = a.length; u < o.length; u += 1) l(u);
				N();
			}
			(!c || r & 2) && M(n, 'width', s[1] + 'px'), (!c || r & 2) && S(n, 'hidden', !s[1]);
		},
		i(s) {
			if (!c) {
				for (let r = 0; r < a.length; r += 1) w(o[r]);
				c = !0;
			}
		},
		o(s) {
			o = o.filter(Boolean);
			for (let r = 0; r < o.length; r += 1) H(o[r]);
			c = !1;
		},
		d(s) {
			s && m(t), at(o, s), i();
		}
	};
}
function yt(e, t, n) {
	let { $$slots: i = {}, $$scope: c } = t,
		{ images: a = [] } = t,
		{ rowHeight: o = 220 } = t,
		{ gutter: l = 8 } = t,
		{ imageComponent: s = mt } = t,
		r = [],
		u = 0;
	function _({ scaledWidth: f, scaledHeight: d, isLastInRow: p, isLastRow: g }) {
		let v = l + 'px',
			j = `0 0 ${f}px`,
			et = g ? '0' : v;
		return (
			p && ((v = '0'), (j = `1 1 ${f - 4}px`)),
			`height: ${d}px; flex: ${j}; margin-right: ${v}; margin-bottom: ${et};`
		);
	}
	function h() {
		(u = this.clientWidth), n(1, u);
	}
	return (
		(e.$$set = (f) => {
			'images' in f && n(4, (a = f.images)),
				'rowHeight' in f && n(5, (o = f.rowHeight)),
				'gutter' in f && n(6, (l = f.gutter)),
				'imageComponent' in f && n(0, (s = f.imageComponent)),
				'$$scope' in f && n(7, (c = f.$$scope));
		}),
		(e.$$.update = () => {
			e.$$.dirty & 114 &&
				n(2, (r = kt({ images: a, containerWidth: u || 1280, targetHeight: o, gutter: l })));
		}),
		[s, u, r, _, a, o, l, c, i, h]
	);
}
class Ft extends T {
	constructor(t) {
		super(), X(this, t, yt, Rt, Q, { images: 4, rowHeight: 5, gutter: 6, imageComponent: 0 });
	}
}
export { Ft as G };
