

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.I5MlykRt.js","_app/immutable/chunks/scheduler.DaE3y3Hf.js","_app/immutable/chunks/index.BOC9BbjL.js","_app/immutable/chunks/entry.Bt16qeqp.js"];
export const stylesheets = [];
export const fonts = [];
