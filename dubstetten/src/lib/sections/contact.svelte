<script>
	import OpenMap from '../map/open-map.svelte';
</script>

<section id="contact" class="contact">
	<h3 class="title">Contact</h3>
	<p>Verein BELE</p>
	<p>Wo auch immer</p>
	<hr />
	<div class="logos">
		<img src="img/eichhorn_icon.png" alt="Eichhornhof Icon" />
		<img src="img/danub_icon.png" alt="Danub Icon" />
	</div>

	<OpenMap />
</section>

<style>
	.logos {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 2rem 0;
	}
	.logos img {
		width: 5rem;
		margin: 0 1rem;
	}
</style>
