<script lang="ts">
	import '../app.css';
	import Header from '$lib/elements/header.svelte';
	import Footer from '$lib/elements/footer.svelte';
	import TopButton from '$lib/elements/top-button.svelte';
</script>

<svelte:head>
	<title>Dubstetten 23</title>
	<meta name="description" content="The Dubest Festival in Austria" />
</svelte:head>

<Header />

<slot />

<Footer />
<TopButton />

<style>
</style>
