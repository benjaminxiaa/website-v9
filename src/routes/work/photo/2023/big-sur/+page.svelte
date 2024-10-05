<script>
	import Nav from '$lib/components/Nav.svelte';
	import Gallery from 'svelte-gallery';

	const images = [
		{ src: '/portfolio/BigSur/Image1.jpg', width: 2048, height: 1365 },
		{ src: '/portfolio/BigSur/Image2.jpg', width: 2048, height: 1365 },
		{ src: '/portfolio/BigSur/Image3.jpg', width: 2048, height: 1365 },
		{ src: '/portfolio/BigSur/Image4.jpg', width: 2048, height: 1365 },
		{ src: '/portfolio/BigSur/Image5.jpg', width: 2048, height: 1365 },
		{ src: '/portfolio/BigSur/Image6.jpg', width: 2048, height: 1365 },
		{ src: '/portfolio/BigSur/Image7.jpg', width: 2048, height: 1365 },
		{ src: '/portfolio/BigSur/Image8.jpg', width: 2048, height: 1365 }
	];
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/gallery.css" />
</svelte:head>

<Nav />

<nav class="top-right-navbar">
	<ul>
		<li><a href="/work/photography/2022/death-valley">[Death Valley]</a></li>
		<li><a href="/work/photography/2023/big-sur">[Big Sur]</a></li>
		<li><a href="/work/photography/2023/hakone-gardens">[Hakone Gardens]</a></li>
		<li><a href="/work/photography/2023/new-mexico">[New Mexico]</a></li>
		<li><a href="/work/photography/2024/south-korea">[South Korea]</a></li>
		<li><a href="/work/photography/2024/japan">[Japan]</a></li>
	</ul>
</nav>

<main class="page-container">
	<h1 class="center">Big Sur</h1>
</main>
<div class="after-page">
	<Gallery {images} rowHeight={500} />
</div>
