<script>
	import Nav from '$lib/components/Nav.svelte';
	import Title from '$lib/components/Title.svelte';
	import Gallery from 'svelte-gallery';

	const images = [''];
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/header-page.css" />
	<!-- TODO: Change to gallery.css after adding images -->
	<title>Scholastic Art and Writing Competition</title>
</svelte:head>

<Nav />

<Title title="Scholastic Art and Writing Competition" copyright={true} type="photo" />
<div class="after-page">
	<h2>In Progress!</h2>
</div>
