export const index = 8;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import('../entries/pages/work/photography/2023/hakone-gardens/_page.svelte.js')
	).default);
export const imports = [
	'_app/immutable/nodes/8.BvIHF-TM.js',
	'_app/immutable/chunks/scheduler.DaE3y3Hf.js',
	'_app/immutable/chunks/index.BOC9BbjL.js',
	'_app/immutable/chunks/Gallery.C5J08gKM.js'
];
export const stylesheets = ['_app/immutable/assets/Gallery.BqwnsGb-.css'];
export const fonts = [];
