<script>
	import Nav from '$lib/components/Nav.svelte';
	import Gallery from 'svelte-gallery';

	const images = [
		{
			src: '/portfolio/HakoneGardens/DSC05110.jpg',
			width: 2048,
			height: 1365
		},
		{
			src: '/portfolio/HakoneGardens/DSC05124.jpg',
			width: 2048,
			height: 1365
		},
		{
			src: '/portfolio/HakoneGardens/DSC05132.jpg',
			width: 1365,
			height: 2048
		},
		{
			src: '/portfolio/HakoneGardens/DSC05145.jpg',
			width: 1365,
			height: 2048
		},
		{
			src: '/portfolio/HakoneGardens/DSC05183.jpg',
			width: 2048,
			height: 1365
		},
		{
			src: '/portfolio/HakoneGardens/DSC05193.jpg',
			width: 2048,
			height: 1365
		},
		{
			src: '/portfolio/HakoneGardens/DSC05282.jpg',
			width: 1365,
			height: 2048
		}
	];
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/gallery.css" />
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
	<h1 class="center">Hakone Gardens</h1>
</main>
<div class="after-page">
	<Gallery {images} rowHeight={500} />
</div>
