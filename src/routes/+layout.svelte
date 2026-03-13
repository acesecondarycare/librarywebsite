<script lang="ts">
	import '$lib/scss/global.scss';
	// import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
	<title>Library Website</title>
</svelte:head>

{@render children()}
