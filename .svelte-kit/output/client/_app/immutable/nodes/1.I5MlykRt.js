import { s as S, n as _, b as q } from '../chunks/scheduler.DaE3y3Hf.js';
import {
	S as x,
	i as j,
	e as d,
	q as f,
	s as k,
	c as g,
	m as h,
	r as v,
	d as u,
	b as y,
	k as m,
	j as $,
	u as E
} from '../chunks/index.BOC9BbjL.js';
import { s as C } from '../chunks/entry.Bt16qeqp.js';
const H = () => {
		const s = C;
		return {
			page: { subscribe: s.page.subscribe },
			navigating: { subscribe: s.navigating.subscribe },
			updated: s.updated
		};
	},
	P = {
		subscribe(s) {
			return H().page.subscribe(s);
		}
	};
function w(s) {
	var b;
	let t,
		r = s[0].status + '',
		o,
		n,
		i,
		c = ((b = s[0].error) == null ? void 0 : b.message) + '',
		l;
	return {
		c() {
			(t = d('h1')), (o = f(r)), (n = k()), (i = d('p')), (l = f(c));
		},
		l(e) {
			t = g(e, 'H1', {});
			var a = h(t);
			(o = v(a, r)), a.forEach(u), (n = y(e)), (i = g(e, 'P', {}));
			var p = h(i);
			(l = v(p, c)), p.forEach(u);
		},
		m(e, a) {
			m(e, t, a), $(t, o), m(e, n, a), m(e, i, a), $(i, l);
		},
		p(e, [a]) {
			var p;
			a & 1 && r !== (r = e[0].status + '') && E(o, r),
				a & 1 && c !== (c = ((p = e[0].error) == null ? void 0 : p.message) + '') && E(l, c);
		},
		i: _,
		o: _,
		d(e) {
			e && (u(t), u(n), u(i));
		}
	};
}
function z(s, t, r) {
	let o;
	return q(s, P, (n) => r(0, (o = n))), [o];
}
let F = class extends x {
	constructor(t) {
		super(), j(this, t, z, w, S, {});
	}
};
export { F as component };
