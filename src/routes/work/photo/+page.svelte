<script>
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/photography.css" />
</svelte:head>

<input
	type="checkbox"
	id="main-navigation-toggle"
	class="btn btn--close"
	title="Toggle main navigation"
/>

<Nav />

<main class="page-container">
	<h1 class="center">Photography</h1>
</main>
<div class="outer-container">
	<div class="after-page">
		<h2>2022</h2>
		<a class="link" href="/work/photo/2022/death-valley">death valley</a>
		<br />
		<h2>2023</h2>
		<a class="link" href="/work/photo/2023/big-sur">big sur</a>
		<a class="link" href="/work/photo/2023/hakone-gardens">hakone gardens</a>
		<a class="link" href="/work/photo/2023/new-mexico">new mexico</a>
		<br />
		<h2>2024</h2>
		<p>In Progress</p>
		<!--
		<span><a class="link" href="/work/photo/2024/south-korea">south korea - seoul</a></span>
		<span><a class="link" href="/work/photo/2024/fukuoka">japan - fukuoka</a></span>
		<span><a class="link" href="/work/photo/2024/fukuoka">japan - osaka</a></span> -->
	</div>
</div>
