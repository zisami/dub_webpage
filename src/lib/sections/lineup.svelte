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

	<div class="lineup-list-desktop">
		<a href="https://lionsdensound.bandcamp.com/">
			<img src="img/lions_den_icon.jpeg" alt="lion icon">
		</a>
		<a href="https://wickedandbonny.bandcamp.com/">
			<img src="img/wckd-nd-bnny.png" alt="wicked icon">
		</a>
				<a href="https://wickedandbonny.bandcamp.com/">
			<img src="img/danubian_icon.jpeg" alt="danubian icon">
		</a>
		<a href="https://wickedandbonny.bandcamp.com/">
			<img src="img/danubian_icon.jpeg" alt="wicked icon">
		</a>
	</div>
	<div class="lineup-list-mobile">
		<a href="https://lionsdensound.bandcamp.com/">
			<img src="img/lions_den_icon.jpeg" alt="lion icon">
		</a>
		<a href="https://wickedandbonny.bandcamp.com/">
			<img src="img/wckd-nd-bnny.png" alt="wicked icon">
		</a>
		<a href="https://wickedandbonny.bandcamp.com/">
			<img src="img/danubian_icon.jpeg" alt="danubian icon">
		</a>
		<a href="https://wickedandbonny.bandcamp.com/">
			<img src="img/danubian_icon.jpeg" alt="wicked icon">
		</a>
	</div>
</section>

<style>
	#lineup {
		background-color: #f7f7f7;
	}

	.lineup-list-mobile{
		display: none;
	}

	.lineup-list-desktop {
		display: flex;
		height: 40vw;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}

	img {
		width: 10rem;
		border-radius: 10%;
	}

	@media (max-width: 500px){

		.lineup-list-desktop{
			display: none;
		}

		.lineup-list-desktop {
			display: flex;
			height: 40vw;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr;
		}

		img {
			width: 10rem;
			margin: 0 1rem;
			border-radius: 10%;
		}
	}
</style>
