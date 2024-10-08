var O = Object.defineProperty;
var j = (e, t, n) =>
	t in e ? O(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var y = (e, t, n) => j(e, typeof t != 'symbol' ? t + '' : t, n);
import {
	h as z,
	r as p,
	n as x,
	f as b,
	i as B,
	j as S,
	k as H,
	l as A,
	m as I,
	p as L,
	q as N,
	v as P,
	w as W,
	x as M
} from './scheduler.DaE3y3Hf.js';
let $ = !1;
function k() {
	$ = !0;
}
function q() {
	$ = !1;
}
function R(e, t, n, i) {
	for (; e < t; ) {
		const r = e + ((t - e) >> 1);
		n(r) <= i ? (e = r + 1) : (t = r);
	}
	return e;
}
function U(e) {
	if (e.hydrate_init) return;
	e.hydrate_init = !0;
	let t = e.childNodes;
	if (e.nodeName === 'HEAD') {
		const s = [];
		for (let a = 0; a < t.length; a++) {
			const u = t[a];
			u.claim_order !== void 0 && s.push(u);
		}
		t = s;
	}
	const n = new Int32Array(t.length + 1),
		i = new Int32Array(t.length);
	n[0] = -1;
	let r = 0;
	for (let s = 0; s < t.length; s++) {
		const a = t[s].claim_order,
			u = (r > 0 && t[n[r]].claim_order <= a ? r + 1 : R(1, r, (_) => t[n[_]].claim_order, a)) - 1;
		i[s] = n[u] + 1;
		const f = u + 1;
		(n[f] = s), (r = Math.max(f, r));
	}
	const o = [],
		l = [];
	let c = t.length - 1;
	for (let s = n[r] + 1; s != 0; s = i[s - 1]) {
		for (o.push(t[s - 1]); c >= s; c--) l.push(t[c]);
		c--;
	}
	for (; c >= 0; c--) l.push(t[c]);
	o.reverse(), l.sort((s, a) => s.claim_order - a.claim_order);
	for (let s = 0, a = 0; s < l.length; s++) {
		for (; a < o.length && l[s].claim_order >= o[a].claim_order; ) a++;
		const u = a < o.length ? o[a] : null;
		e.insertBefore(l[s], u);
	}
}
function V(e, t) {
	e.appendChild(t);
}
function F(e, t) {
	if ($) {
		for (
			U(e),
				(e.actual_end_child === void 0 ||
					(e.actual_end_child !== null && e.actual_end_child.parentNode !== e)) &&
					(e.actual_end_child = e.firstChild);
			e.actual_end_child !== null && e.actual_end_child.claim_order === void 0;

		)
			e.actual_end_child = e.actual_end_child.nextSibling;
		t !== e.actual_end_child
			? (t.claim_order !== void 0 || t.parentNode !== e) && e.insertBefore(t, e.actual_end_child)
			: (e.actual_end_child = t.nextSibling);
	} else (t.parentNode !== e || t.nextSibling !== null) && e.appendChild(t);
}
function ae(e, t, n) {
	$ && !n ? F(e, t) : (t.parentNode !== e || t.nextSibling != n) && e.insertBefore(t, n || null);
}
function C(e) {
	e.parentNode && e.parentNode.removeChild(e);
}
function oe(e, t) {
	for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
}
function T(e) {
	return document.createElement(e);
}
function ce(e, t) {
	const n = {};
	for (const i in e) z(e, i) && t.indexOf(i) === -1 && (n[i] = e[i]);
	return n;
}
function g(e) {
	return document.createTextNode(e);
}
function fe() {
	return g(' ');
}
function ue() {
	return g('');
}
function E(e, t, n, i) {
	return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function G(e, t, n) {
	n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const J = ['width', 'height'];
function de(e, t) {
	const n = Object.getOwnPropertyDescriptors(e.__proto__);
	for (const i in t)
		t[i] == null
			? e.removeAttribute(i)
			: i === 'style'
				? (e.style.cssText = t[i])
				: i === '__value'
					? (e.value = e[i] = t[i])
					: n[i] && n[i].set && J.indexOf(i) === -1
						? (e[i] = t[i])
						: G(e, i, t[i]);
}
function _e(e) {
	return e.dataset.svelteH;
}
function K(e) {
	return Array.from(e.childNodes);
}
function Q(e) {
	e.claim_info === void 0 && (e.claim_info = { last_index: 0, total_claimed: 0 });
}
function D(e, t, n, i, r = !1) {
	Q(e);
	const o = (() => {
		for (let l = e.claim_info.last_index; l < e.length; l++) {
			const c = e[l];
			if (t(c)) {
				const s = n(c);
				return s === void 0 ? e.splice(l, 1) : (e[l] = s), r || (e.claim_info.last_index = l), c;
			}
		}
		for (let l = e.claim_info.last_index - 1; l >= 0; l--) {
			const c = e[l];
			if (t(c)) {
				const s = n(c);
				return (
					s === void 0 ? e.splice(l, 1) : (e[l] = s),
					r ? s === void 0 && e.claim_info.last_index-- : (e.claim_info.last_index = l),
					c
				);
			}
		}
		return i();
	})();
	return (o.claim_order = e.claim_info.total_claimed), (e.claim_info.total_claimed += 1), o;
}
function X(e, t, n, i) {
	return D(
		e,
		(r) => r.nodeName === t,
		(r) => {
			const o = [];
			for (let l = 0; l < r.attributes.length; l++) {
				const c = r.attributes[l];
				n[c.name] || o.push(c.name);
			}
			o.forEach((l) => r.removeAttribute(l));
		},
		() => i(t)
	);
}
function he(e, t, n) {
	return X(e, t, n, T);
}
function Y(e, t) {
	return D(
		e,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + t;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => g(t),
		!0
	);
}
function me(e) {
	return Y(e, ' ');
}
function pe(e, t) {
	(t = '' + t), e.data !== t && (e.data = t);
}
function $e(e, t, n, i) {
	n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, '');
}
let h;
function Z() {
	if (h === void 0) {
		h = !1;
		try {
			typeof window < 'u' && window.parent && window.parent.document;
		} catch {
			h = !0;
		}
	}
	return h;
}
function ye(e, t) {
	getComputedStyle(e).position === 'static' && (e.style.position = 'relative');
	const i = T('iframe');
	i.setAttribute(
		'style',
		'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;'
	),
		i.setAttribute('aria-hidden', 'true'),
		(i.tabIndex = -1);
	const r = Z();
	let o;
	return (
		r
			? ((i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
				(o = E(window, 'message', (l) => {
					l.source === i.contentWindow && t();
				})))
			: ((i.src = 'about:blank'),
				(i.onload = () => {
					(o = E(i.contentWindow, 'resize', t)), t();
				})),
		V(e, i),
		() => {
			(r || (o && i.contentWindow)) && o(), C(i);
		}
	);
}
function xe(e, t, n) {
	e.classList.toggle(t, !!n);
}
function ge(e, t) {
	const n = [];
	let i = 0;
	for (const r of t.childNodes)
		if (r.nodeType === 8) {
			const o = r.textContent.trim();
			o === `HEAD_${e}_END`
				? ((i -= 1), n.push(r))
				: o === `HEAD_${e}_START` && ((i += 1), n.push(r));
		} else i > 0 && n.push(r);
	return n;
}
function we(e, t) {
	return new e(t);
}
const m = new Set();
let d;
function ve() {
	d = { r: 0, c: [], p: d };
}
function be() {
	d.r || p(d.c), (d = d.p);
}
function ee(e, t) {
	e && e.i && (m.delete(e), e.i(t));
}
function Ae(e, t, n, i) {
	if (e && e.o) {
		if (m.has(e)) return;
		m.add(e),
			d.c.push(() => {
				m.delete(e), i && (n && e.d(1), i());
			}),
			e.o(t);
	} else i && i();
}
function Ne(e) {
	e && e.c();
}
function Ee(e, t) {
	e && e.l(t);
}
function te(e, t, n) {
	const { fragment: i, after_update: r } = e.$$;
	i && i.m(t, n),
		A(() => {
			const o = e.$$.on_mount.map(P).filter(S);
			e.$$.on_destroy ? e.$$.on_destroy.push(...o) : p(o), (e.$$.on_mount = []);
		}),
		r.forEach(A);
}
function ne(e, t) {
	const n = e.$$;
	n.fragment !== null &&
		(I(n.after_update),
		p(n.on_destroy),
		n.fragment && n.fragment.d(t),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function ie(e, t) {
	e.$$.dirty[0] === -1 && (W.push(e), M(), e.$$.dirty.fill(0)),
		(e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function Se(e, t, n, i, r, o, l = null, c = [-1]) {
	const s = L;
	N(e);
	const a = (e.$$ = {
		fragment: null,
		ctx: [],
		props: o,
		update: x,
		not_equal: r,
		bound: b(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(t.context || (s ? s.$$.context : [])),
		callbacks: b(),
		dirty: c,
		skip_bound: !1,
		root: t.target || s.$$.root
	});
	l && l(a.root);
	let u = !1;
	if (
		((a.ctx = n
			? n(e, t.props || {}, (f, _, ...w) => {
					const v = w.length ? w[0] : _;
					return (
						a.ctx &&
							r(a.ctx[f], (a.ctx[f] = v)) &&
							(!a.skip_bound && a.bound[f] && a.bound[f](v), u && ie(e, f)),
						_
					);
				})
			: []),
		a.update(),
		(u = !0),
		p(a.before_update),
		(a.fragment = i ? i(a.ctx) : !1),
		t.target)
	) {
		if (t.hydrate) {
			k();
			const f = K(t.target);
			a.fragment && a.fragment.l(f), f.forEach(C);
		} else a.fragment && a.fragment.c();
		t.intro && ee(e.$$.fragment), te(e, t.target, t.anchor), q(), B();
	}
	N(s);
}
class Ce {
	constructor() {
		y(this, '$$');
		y(this, '$$set');
	}
	$destroy() {
		ne(this, 1), (this.$destroy = x);
	}
	$on(t, n) {
		if (!S(n)) return x;
		const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
		return (
			i.push(n),
			() => {
				const r = i.indexOf(n);
				r !== -1 && i.splice(r, 1);
			}
		);
	}
	$set(t) {
		this.$$set && !H(t) && ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
	}
}
const re = '4';
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(re);
export {
	de as A,
	xe as B,
	ye as C,
	oe as D,
	ce as E,
	Ce as S,
	Ae as a,
	me as b,
	he as c,
	C as d,
	T as e,
	G as f,
	_e as g,
	ge as h,
	Se as i,
	F as j,
	ae as k,
	Ne as l,
	K as m,
	Ee as n,
	te as o,
	ne as p,
	g as q,
	Y as r,
	fe as s,
	ee as t,
	pe as u,
	ue as v,
	be as w,
	$e as x,
	ve as y,
	we as z
};
