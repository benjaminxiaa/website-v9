<script>
	import Nav from '$lib/components/Nav.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/header-page.css" />
	<title>Videography</title>
</svelte:head>

<Nav />

<Title title="Videography" copyright={true} type="video" />

<div class="after-page">
	<div class="after-page-content">
		<div class="column left-column">
			<h2>Clients</h2>
			<a class="link" href="/work/clients/harker-sports">Harker Sports</a>
		</div>
		<div class="column">
			<p>In Progress</p>
		</div>
	</div>
</div>
