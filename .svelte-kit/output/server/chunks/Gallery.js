import {
	c as create_ssr_component,
	d as compute_rest_props,
	f as spread,
	h as escape_object,
	e as escape,
	i as each,
	j as add_attribute,
	v as validate_component,
	m as missing_component
} from './ssr.js';
const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, []);
	return `<img${spread([escape_object($$restProps)], {})}>`;
});
const dijkstra = {
	single_source_shortest_paths: function (graph, s, d) {
		var predecessors = {};
		var costs = {};
		costs[s] = 0;
		var open = new BinaryHeap(function (x) {
			return x.cost;
		});
		open.push({ value: s, cost: 0 });
		var closest,
			u,
			cost_of_s_to_u,
			adjacent_nodes,
			cost_of_e,
			cost_of_s_to_u_plus_cost_of_e,
			cost_of_s_to_v,
			first_visit;
		while (open.size()) {
			closest = open.pop();
			u = closest.value;
			cost_of_s_to_u = closest.cost;
			adjacent_nodes = graph(u) || {};
			for (var v in adjacent_nodes) {
				cost_of_e = adjacent_nodes[v];
				cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
				cost_of_s_to_v = costs[v];
				first_visit = typeof costs[v] === 'undefined';
				if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
					costs[v] = cost_of_s_to_u_plus_cost_of_e;
					open.push({ value: v, cost: cost_of_s_to_u_plus_cost_of_e });
					predecessors[v] = u;
				}
			}
		}
		if (typeof costs[d] === 'undefined') {
			var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
			throw new Error(msg);
		}
		return predecessors;
	},
	extract_shortest_path_from_predecessor_list: function (predecessors, d) {
		var nodes = [];
		var u = d;
		while (u) {
			nodes.push(u);
			predecessors[u];
			u = predecessors[u];
		}
		nodes.reverse();
		return nodes;
	},
	find_path: function (graph, s, d) {
		var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
		return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
	}
	// test: function() {
	//   // A B C
	//   // D E F
	//   // G H I
	//   graph = function (key) {
	//     switch (key) {
	//       case 'a': return {b: 10, d: 1};
	//       case 'b': return {a: 1, c: 1, e: 1};
	//       case 'c': return {b: 1, f: 1};
	//       case 'd': return {a: 1, e: 1, g: 1};
	//       case 'e': return {b: 1, d: 1, f: 1, h: 1};
	//       case 'f': return {c: 1, e: 1, i: 1};
	//       case 'g': return {d: 1, h: 1};
	//       case 'h': return {e: 1, g: 1, i: 1};
	//       case 'i': return {f: 1, h: 1};
	//     }
	//   };
	//   var path = dijkstra.find_path(graph, 'a', 'i');
	//   if (path.join() !== ['a', 'd', 'e', 'f', 'i'].join()) {
	//     throw new Error('Path finding error!');
	//   }
	// }
};
function BinaryHeap(scoreFunction) {
	this.content = [];
	this.scoreFunction = scoreFunction;
}
BinaryHeap.prototype = {
	push: function (element) {
		this.content.push(element);
		this.bubbleUp(this.content.length - 1);
	},
	pop: function () {
		var result = this.content[0];
		var end = this.content.pop();
		if (this.content.length > 0) {
			this.content[0] = end;
			this.sinkDown(0);
		}
		return result;
	},
	remove: function (node) {
		var len = this.content.length;
		for (var i = 0; i < len; i++) {
			if (this.content[i] === node) {
				var end = this.content.pop();
				if (i !== len - 1) {
					this.content[i] = end;
					if (this.scoreFunction(end) < this.scoreFunction(node)) this.bubbleUp(i);
					else this.sinkDown(i);
				}
				return;
			}
		}
		throw new Error('Node not found.');
	},
	size: function () {
		return this.content.length;
	},
	bubbleUp: function (n) {
		var element = this.content[n];
		while (n > 0) {
			var parentN = Math.floor((n + 1) / 2) - 1,
				parent = this.content[parentN];
			if (this.scoreFunction(element) < this.scoreFunction(parent)) {
				this.content[parentN] = element;
				this.content[n] = parent;
				n = parentN;
			} else {
				break;
			}
		}
	},
	sinkDown: function (n) {
		var length = this.content.length,
			element = this.content[n],
			elemScore = this.scoreFunction(element);
		while (true) {
			var child2N = (n + 1) * 2,
				child1N = child2N - 1;
			var swap = null;
			if (child1N < length) {
				var child1 = this.content[child1N],
					child1Score = this.scoreFunction(child1);
				if (child1Score < elemScore) swap = child1N;
			}
			if (child2N < length) {
				var child2 = this.content[child2N],
					child2Score = this.scoreFunction(child2);
				if (child2Score < (swap === null ? elemScore : child1Score)) swap = child2N;
			}
			if (swap != null) {
				this.content[n] = this.content[swap];
				this.content[swap] = element;
				n = swap;
			} else {
				break;
			}
		}
	}
};
function round(n) {
	return Math.round(n * 100 + Number.EPSILON) / 100;
}
function ratio(width, height) {
	return round(width / height);
}
function scaleHeight(width, ratio2) {
	return round(width / ratio2);
}
function scaleWidth(height, ratio2) {
	return round(height * ratio2);
}
function getRowHeight(row, containerWidth, gutter) {
	const rowWidth = containerWidth - (row.length - 1) * gutter;
	const rowAspectRatio = row.reduce((acc, { ratio: ratio2 }) => acc + ratio2, 0);
	return scaleHeight(rowWidth, rowAspectRatio);
}
function cost(images, start, end, containerWidth, targetHeight, gutter) {
	const row = images.slice(start, end);
	const rowHeight = getRowHeight(row, containerWidth, gutter);
	return Math.pow(Math.abs(rowHeight - targetHeight), 2);
}
function calcSeekLimit(containerWidth, targetRowHeight) {
	if (containerWidth < 420) {
		return 2;
	}
	const count = ratio(containerWidth, targetRowHeight) / 0.75;
	return Math.round(count * 1.5);
}
function layout({
	images,
	containerWidth,
	targetHeight,
	gutter = 2,
	seekLimit = calcSeekLimit,
	byRow = false
} = {}) {
	const _images = images.map((image, index) => {
		return {
			...image,
			index,
			ratio: ratio(image.width, image.height)
		};
	});
	const nodeSeekLimit = seekLimit(containerWidth, targetHeight);
	const graph = (start) => {
		const results = {};
		start = +start;
		results[start] = 0;
		for (let i = start + 1; i < _images.length + 1; ++i) {
			if (i - start > nodeSeekLimit) {
				break;
			}
			results['' + i] = cost(_images, start, i, containerWidth, targetHeight, gutter);
		}
		return results;
	};
	const path = dijkstra.find_path(graph, '0', _images.length);
	const rows = [];
	const scaledImages = [];
	for (let i = 0; i < path.length; i++) {
		if (path[i + 1]) {
			const row = _images.slice(+path[i], +path[i + 1]);
			const isLastRow = i === path.length - 2;
			const rowHeight = getRowHeight(row, containerWidth, gutter);
			row.forEach((image, index) => {
				image.scaledWidth = scaleWidth(rowHeight, image.ratio);
				image.scaledHeight = rowHeight;
				image.scaledWidthPc = round((image.scaledWidth / containerWidth) * 100);
				if (index === row.length - 1) {
					image.isLastInRow = true;
				}
				image.isLastRow = isLastRow;
				scaledImages.push(image);
			});
			rows.push(row);
		}
	}
	if (byRow) {
		return rows;
	} else {
		return scaledImages;
	}
}
const css = {
	code: '.masonry.svelte-6b2t9q{max-width:100%}.container.svelte-6b2t9q{display:flex;flex-wrap:wrap}.image.svelte-6b2t9q{position:relative;height:100%}.image.svelte-6b2t9q>*{width:100%;height:100%}.hidden.svelte-6b2t9q{visibility:hidden}',
	map: '{"version":3,"file":"Gallery.svelte","sources":["Gallery.svelte"],"sourcesContent":["<script>\\n  import Img from \'./lib/Img.svelte\';\\n  import layout from \'./lib/layout\';\\n\\n  export let images = [];\\n  export let rowHeight = 220;\\n  export let gutter = 8;\\n  export let imageComponent = Img;\\n\\n  let scaledImages = [];\\n  let width = 0;\\n\\n  function imgStyle({ scaledWidth, scaledHeight, isLastInRow, isLastRow }) {\\n    let marginRight = gutter + \'px\',\\n      flex = `0 0 ${scaledWidth}px`,\\n      marginBottom = isLastRow ? \'0\' : marginRight;\\n\\n    if (isLastInRow) {\\n      marginRight = \'0\';\\n      flex = `1 1 ${scaledWidth - 4}px`;\\n    }\\n\\n    return `height: ${scaledHeight}px; flex: ${flex}; margin-right: ${marginRight}; margin-bottom: ${marginBottom};`;\\n  }\\n\\n  $: scaledImages = layout({\\n    images,\\n    containerWidth: width || 1280,\\n    targetHeight: rowHeight,\\n    gutter\\n  });\\n\\n</script>\\n\\n<style>\\n  .masonry {\\n    max-width: 100%;\\n  }\\n\\n  .container {\\n    display: flex;\\n    flex-wrap: wrap;\\n  }\\n\\n  .image {\\n    position: relative;\\n    height: 100%;\\n  }\\n\\n  .image > :global(*) {\\n    width: 100%;\\n    height: 100%;\\n  }\\n\\n  .hidden {\\n    visibility: hidden;\\n  }\\n\\n</style>\\n\\n<div class=\\"masonry\\" bind:clientWidth={width}>\\n  <div class=\\"container\\" style=\\"width: {width}px\\" class:hidden={!width}>\\n    {#each scaledImages as { index, ratio, scaledHeight, scaledWidth, isLastInRow, isLastRow, scaledWidthPc, ...image }}\\n      <div\\n        class=\\"image\\"\\n        style={imgStyle({ scaledHeight, scaledWidth, isLastInRow, isLastRow })}\\n      >\\n        <slot {index} {image}>\\n          <svelte:component this={imageComponent} {...image} />\\n        </slot>\\n      </div>\\n    {/each}\\n  </div>\\n</div>\\n"],"names":[],"mappings":"AAmCE,sBAAS,CACP,SAAS,CAAE,IACb,CAEA,wBAAW,CACT,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IACb,CAEA,oBAAO,CACL,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IACV,CAEA,oBAAM,CAAW,CAAG,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CAEA,qBAAQ,CACN,UAAU,CAAE,MACd"}'
};
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { images = [] } = $$props;
	let { rowHeight = 220 } = $$props;
	let { gutter = 8 } = $$props;
	let { imageComponent = Img } = $$props;
	let scaledImages = [];
	let width = 0;
	function imgStyle({ scaledWidth, scaledHeight, isLastInRow, isLastRow }) {
		let marginRight = gutter + 'px',
			flex = `0 0 ${scaledWidth}px`,
			marginBottom = isLastRow ? '0' : marginRight;
		if (isLastInRow) {
			marginRight = '0';
			flex = `1 1 ${scaledWidth - 4}px`;
		}
		return `height: ${scaledHeight}px; flex: ${flex}; margin-right: ${marginRight}; margin-bottom: ${marginBottom};`;
	}
	if ($$props.images === void 0 && $$bindings.images && images !== void 0)
		$$bindings.images(images);
	if ($$props.rowHeight === void 0 && $$bindings.rowHeight && rowHeight !== void 0)
		$$bindings.rowHeight(rowHeight);
	if ($$props.gutter === void 0 && $$bindings.gutter && gutter !== void 0)
		$$bindings.gutter(gutter);
	if ($$props.imageComponent === void 0 && $$bindings.imageComponent && imageComponent !== void 0)
		$$bindings.imageComponent(imageComponent);
	$$result.css.add(css);
	scaledImages = layout({
		images,
		containerWidth: 1280,
		targetHeight: rowHeight,
		gutter
	});
	return `<div class="masonry svelte-6b2t9q"><div class="${['container svelte-6b2t9q', 'hidden'].join(' ').trim()}" style="${'width: ' + escape(width, true) + 'px'}">${each(
		scaledImages,
		({
			index,
			ratio: ratio2,
			scaledHeight,
			scaledWidth,
			isLastInRow,
			isLastRow,
			scaledWidthPc,
			...image
		}) => {
			return `<div class="image svelte-6b2t9q"${add_attribute(
				'style',
				imgStyle({
					scaledHeight,
					scaledWidth,
					isLastInRow,
					isLastRow
				}),
				0
			)}>${slots.default ? slots.default({ index, image }) : ` ${validate_component(imageComponent || missing_component, 'svelte:component').$$render($$result, Object.assign({}, image), {}, {})} `} </div>`;
		}
	)}</div></div>`;
});
export { Gallery as G };
