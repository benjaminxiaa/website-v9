

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Ce88la69.js","_app/immutable/chunks/scheduler.DaE3y3Hf.js","_app/immutable/chunks/index.BOC9BbjL.js"];
export const stylesheets = [];
export const fonts = [];
