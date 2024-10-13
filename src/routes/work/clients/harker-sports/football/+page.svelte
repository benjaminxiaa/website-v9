<script>
	import Nav from '$lib/components/Nav.svelte';
	import Title from '$lib/components/Title.svelte';
	import Gallery from 'svelte-gallery';

	const images = [''];
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/header-page.css" />
	<title>Harker Football</title>
	<!-- TODO: Change to gallery.css after adding images -->
</svelte:head>

<Nav />

<Title title="Harker Football" copyright={true} />
<div class="after-page">
	<h2>In Progress!</h2>
</div>
