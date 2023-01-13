<script>
	import FaCompactDisc from 'svelte-icons/fa/FaCompactDisc.svelte';
	import FaGuitar from 'svelte-icons/fa/FaGuitar.svelte';
	import FaPrayingHands from 'svelte-icons/fa/FaPrayingHands.svelte';
</script>

<section id="lineup">
	<h3 class="title">Line-Up</h3>
	<p>
		"Get ready for an unforgettable night of heavy bass and smooth grooves! Our Dub event will
		feature a diverse lineup of some of the most exciting and talented Dub artists and DJs in the
		scene. Don't miss out on this incredible opportunity to see these amazing artists in one night,
		and be prepared for an unforgettable night of dub music!"
	</p>
	<hr />

	<div class="lineup-list">
		<div>
			<div class="icon"><FaCompactDisc /></div>
			<h4>Selectaz</h4>
			<p>Artist 1</p>
		</div>
		<div>
			<div class="icon"><FaGuitar /></div>
			<h4>Bands</h4>
			<p>Gustl Blue</p>
		</div>
		<div>
			<div class="icon"><FaPrayingHands /></div>
			<h4>Workshops</h4>
			<p>Kinderschminken</p>
		</div>
	</div>
</section>

<style>
	#lineup {
		background-color: #f7f7f7;
	}
	.lineup-list {
		display: grid;
		grid-template-columns: 1fr;
	}
	.lineup-list > div {
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
	}
	.icon {
		color: #2196f3;
		width: 3rem;
		height: 3rem;
		margin-bottom: 3rem;
	}
</style>
