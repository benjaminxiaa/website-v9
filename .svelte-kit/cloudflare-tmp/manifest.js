export const manifest = (() => {
	function __memo(fn) {
		let value;
		return () => (value ??= value = fn());
	}

	return {
		appDir: '_app',
		appPath: '_app',
		assets: new Set([
			'css/about.css',
			'css/contact.css',
			'css/gallery.css',
			'css/index.css',
			'css/nav.css',
			'css/photography.css',
			'css/programming.css',
			'favicon.png',
			'portfolio/BigSur/Image1.jpg',
			'portfolio/BigSur/Image2.jpg',
			'portfolio/BigSur/Image3.jpg',
			'portfolio/BigSur/Image4.jpg',
			'portfolio/BigSur/Image5.jpg',
			'portfolio/BigSur/Image6.jpg',
			'portfolio/BigSur/Image7.jpg',
			'portfolio/BigSur/Image8.jpg',
			'portfolio/DeathValley/b_4132686_autumn_maple.jpg',
			'portfolio/DeathValley/b_4132709_backyard_moon.jpg',
			'portfolio/DeathValley/b_4132717_backyard_moon_greenthing.jpg',
			'portfolio/DeathValley/b_4132739_deathvalley_mineraldeposits.jpg',
			'portfolio/DeathValley/b_4132752_deathvalley_mooon.jpg',
			'portfolio/DeathValley/b_4132763_goldenwaves.jpg',
			'portfolio/DeathValley/b_4132770_hidingmoon.jpg',
			'portfolio/DeathValley/b_4132779_lavendarbush.jpg',
			'portfolio/DeathValley/b_4132786_locallygrowndandelions.jpg',
			'portfolio/DeathValley/b_4132793_redsunset.jpg',
			'portfolio/DeathValley/b_4132804_sequoia_bigtree.jpg',
			'portfolio/DeathValley/b_4132809_sequoia_pond.jpg',
			'portfolio/DeathValley/b_4132815_sequoia_rock.jpg',
			'portfolio/DeathValley/DSC04010.jpg',
			'portfolio/HakoneGardens/DSC05110.jpg',
			'portfolio/HakoneGardens/DSC05124.jpg',
			'portfolio/HakoneGardens/DSC05132.jpg',
			'portfolio/HakoneGardens/DSC05145.jpg',
			'portfolio/HakoneGardens/DSC05183.jpg',
			'portfolio/HakoneGardens/DSC05193.jpg',
			'portfolio/HakoneGardens/DSC05282.jpg',
			'portfolio/images.ts',
			'portfolio/NewMexico/DSC05860.jpg',
			'portfolio/NewMexico/DSC05976.jpg',
			'portfolio/NewMexico/DSC07495.jpg',
			'portfolio/NewMexico/DSC07527.jpg',
			'portfolio/NewMexico/DSC07624.jpg',
			'portfolio/NewMexico/DSC07788.jpg',
			'portfolio/NewMexico/DSC07982.jpg'
		]),
		mimeTypes: {
			'.css': 'text/css',
			'.png': 'image/png',
			'.jpg': 'image/jpeg',
			'.ts': 'video/mp2t'
		},
		_: {
			client: {
				start: '_app/immutable/entry/start.ClO0qpG_.js',
				app: '_app/immutable/entry/app.AUBIjqQ-.js',
				imports: [
					'_app/immutable/entry/start.ClO0qpG_.js',
					'_app/immutable/chunks/entry.Bt16qeqp.js',
					'_app/immutable/chunks/scheduler.DaE3y3Hf.js',
					'_app/immutable/entry/app.AUBIjqQ-.js',
					'_app/immutable/chunks/scheduler.DaE3y3Hf.js',
					'_app/immutable/chunks/index.BOC9BbjL.js'
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: false
			},
			nodes: [
				__memo(() => import('../output/server/nodes/0.js')),
				__memo(() => import('../output/server/nodes/1.js')),
				__memo(() => import('../output/server/nodes/2.js')),
				__memo(() => import('../output/server/nodes/3.js')),
				__memo(() => import('../output/server/nodes/4.js')),
				__memo(() => import('../output/server/nodes/5.js')),
				__memo(() => import('../output/server/nodes/6.js')),
				__memo(() => import('../output/server/nodes/7.js')),
				__memo(() => import('../output/server/nodes/8.js')),
				__memo(() => import('../output/server/nodes/9.js')),
				__memo(() => import('../output/server/nodes/10.js'))
			],
			routes: [
				{
					id: '/',
					pattern: /^\/$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 2 },
					endpoint: null
				},
				{
					id: '/about',
					pattern: /^\/about\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 3 },
					endpoint: null
				},
				{
					id: '/contact',
					pattern: /^\/contact\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 4 },
					endpoint: null
				},
				{
					id: '/work/photography',
					pattern: /^\/work\/photography\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 5 },
					endpoint: null
				},
				{
					id: '/work/photography/2022/death-valley',
					pattern: /^\/work\/photography\/2022\/death-valley\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 6 },
					endpoint: null
				},
				{
					id: '/work/photography/2023/big-sur',
					pattern: /^\/work\/photography\/2023\/big-sur\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 7 },
					endpoint: null
				},
				{
					id: '/work/photography/2023/hakone-gardens',
					pattern: /^\/work\/photography\/2023\/hakone-gardens\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 8 },
					endpoint: null
				},
				{
					id: '/work/photography/2023/new-mexico',
					pattern: /^\/work\/photography\/2023\/new-mexico\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 9 },
					endpoint: null
				},
				{
					id: '/work/programming',
					pattern: /^\/work\/programming\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 10 },
					endpoint: null
				}
			],
			matchers: async () => {
				return {};
			},
			server_assets: {}
		}
	};
})();

export const prerendered = new Set([]);

export const app_path = '_app';
