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
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')
];

export const server_loads = [];

export const dictionary = {
	'/': [2],
	'/about': [3],
	'/contact': [4],
	'/work/clients/harker-sports': [5],
	'/work/clients/harker-sports/football': [6],
	'/work/photo': [7],
	'/work/photo/2022/death-valley': [8],
	'/work/photo/2023/big-sur': [9],
	'/work/photo/2023/hakone-gardens': [10],
	'/work/photo/2023/new-mexico': [11],
	'/work/photo/2024/japan': [12],
	'/work/photo/2024/south-korea': [13],
	'/work/photo/competitions/others': [14],
	'/work/photo/competitions/scholastic': [15],
	'/work/programming': [16],
	'/work/video': [17]
};

export const hooks = {
	handleError: ({ error }) => {
		console.error(error);
	},

	reroute: () => {}
};

export { default as root } from '../root.svelte';
