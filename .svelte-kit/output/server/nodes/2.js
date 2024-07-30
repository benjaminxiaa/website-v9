

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Crw5cB1Q.js","_app/immutable/chunks/scheduler.DaE3y3Hf.js","_app/immutable/chunks/index.BOC9BbjL.js"];
export const stylesheets = [];
export const fonts = [];
