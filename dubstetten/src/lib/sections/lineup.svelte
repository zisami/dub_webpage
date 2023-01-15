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

		<a href="https://lionsdensound.bandcamp.com/">
			<img src="img/lions_den_icon.jpeg">
		</a>
		<a href="https://wickedandbonny.bandcamp.com/">
			<img src="img/wckd-nd-bnny.png">
		</a>
		<a href="https://wickedandbonny.bandcamp.com/">
			<img src="img/danubian_icon.jpeg">
		</a>
	</div>
</section>

<style>
	#lineup {
		background-color: #f7f7f7;
	}
	.lineup-list {
		display: flex;
		height: 40vwpx;
		grid-template-columns: 1fr 1fr 1fr;
	}

	img {
		width: 10rem;
		margin: 0 1rem;
		border-radius: 10%;
	}

</style>
