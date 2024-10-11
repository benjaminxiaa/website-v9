<script>
	import Nav from '$lib/components/Nav.svelte';
	import Gallery from 'svelte-gallery';

	const images = [''];
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/photography.css" />
	<!-- TODO: remove after adding images -->
	<link rel="stylesheet" href="/css/gallery.css" />
	<title>Japan</title>
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
	<h1 class="center">Japan</h1>
</main>
<div class="after-page">
	<h2>In Progress!</h2>
</div>
