export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')
];

export const server_loads = [];

export const dictionary = {
	'/': [2],
	'/about': [3],
	'/contact': [4],
	'/work/photo': [5],
	'/work/photo/2022/death-valley': [6],
	'/work/photo/2023/big-sur': [7],
	'/work/photo/2023/hakone-gardens': [8],
	'/work/photo/2023/new-mexico': [9],
	'/work/photo/2024/japan': [10],
	'/work/photo/2024/south-korea': [11],
	'/work/programming': [12],
	'/work/video': [13]
};

export const hooks = {
	handleError: ({ error }) => {
		console.error(error);
	},

	reroute: () => {}
};

export { default as root } from '../root.svelte';
