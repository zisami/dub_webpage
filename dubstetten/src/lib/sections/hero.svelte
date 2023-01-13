<script>
</script>

<section id="hero">
	<div class="bg-color" />
	<div class="wrapper">
		<h1>Test</h1>
		<h3>21. &amp; 22. July 2023</h3>
	</div>
</section>

<style>
	#hero {
		width: 100vw;
		height: 100vh;
		background-repeat: no-repeat;
		background-size: cover;

		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		justify-items: center;
		align-items: center;

		position: relative;
	}
	.wrapper {
		display: grid;
		grid-template-columns: 1fr;
		justify-content: center;
		z-index: 1;
		color: #ffffff;
	}
	h3 {
		text-align: center;
	}
	.bg-color {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #414a4f;
		opacity: 0.35;
	}
	img {
		max-width: 300px;
	}
</style>
