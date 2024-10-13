<script>
	export let title = '';
	export let copyright = false;

	export let type = '';

	let copyrightText = '';

	$: {
		switch (type) {
			case 'photo':
				copyrightText =
					'All photos Copyright © 2022-' + new Date().getFullYear() + ' - Benjamin Xia';
				break;
			case 'video':
				copyrightText =
					'All videos Copyright © 2022-' + new Date().getFullYear() + ' - Benjamin Xia';
				break;
			case 'code':
				copyrightText =
					'All content available at my <a href=\'https://github.com/benjaminxiaa\' target="_blank">Github</a>';
				break;
			default:
				copyrightText =
					'All content Copyright © 2022-' + new Date().getFullYear() + ' - Benjamin Xia';
				break;
		}
	}
</script>

<main class="page-container">
	<h1 class="center">{title}</h1>
	{#if copyright}
		<p class="sub-center">{@html copyrightText}</p>
	{/if}
</main>
