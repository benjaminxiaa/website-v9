<script>
	import Nav from '$lib/components/Nav.svelte';
	import Gallery from 'svelte-gallery';

	const images = [
		{
			src: '/portfolio/DeathValley/b_4132686_autumn_maple.jpg',
			width: 751,
			height: 500
		},
		{
			src: '/portfolio/DeathValley/b_4132709_backyard_moon.jpg',
			width: 751,
			height: 500
		},
		{
			src: '/portfolio/DeathValley/b_4132717_backyard_moon_greenthing.jpg',
			width: 751,
			height: 500
		},
		{
			src: '/portfolio/DeathValley/b_4132739_deathvalley_mineraldeposits.jpg',
			width: 753,
			height: 500
		},
		{
			src: '/portfolio/DeathValley/b_4132752_deathvalley_mooon.jpg',
			width: 753,
			height: 500
		},
		{
			src: '/portfolio/DeathValley/b_4132763_goldenwaves.jpg',
			width: 753,
			height: 500
		},
		{
			src: '/portfolio/DeathValley/b_4132793_redsunset.jpg',
			width: 751,
			height: 500
		},
		{
			src: '/portfolio/DeathValley/b_4132804_sequoia_bigtree.jpg',
			width: 332,
			height: 500
		}
	];
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/gallery.css" />
	<title>Death Valley</title>
</svelte:head>

<Nav />

<nav class="top-right-navbar">
	<ul>
		<li><a href="/work/photo/2022/death-valley">[Death Valley]</a></li>
		<li><a href="/work/photo/2023/big-sur">[Big Sur]</a></li>
		<li><a href="/work/photo/2023/hakone-gardens">[Hakone Gardens]</a></li>
		<li><a href="/work/photo/2023/new-mexico">[New Mexico]</a></li>
		<li><a href="/work/photo/2024/south-korea">[South Korea]</a></li>
		<li><a href="/work/photo/2024/japan">[Japan]</a></li>
	</ul>
</nav>

<main class="page-container">
	<h1 class="center">Death Valley</h1>
</main>
<div class="after-page">
	<Gallery {images} rowHeight={500} />
</div>
