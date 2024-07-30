

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/photography/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.sBRsVE09.js","_app/immutable/chunks/scheduler.DaE3y3Hf.js","_app/immutable/chunks/index.BOC9BbjL.js"];
export const stylesheets = [];
export const fonts = [];
