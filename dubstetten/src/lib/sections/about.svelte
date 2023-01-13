<section id="about">
	<h3 class="title">About Dubstetten</h3>
	<p>
		Dubstetten is a family festival organised from the BELE association in cooperation with the
		Danubian Dub Soundsystem crew.
	</p>
	<hr />
	<div class="impressions-desktop">
		<div style="background-image: url(img/dub_2.jpg);" />
		<div style="background-image: url(img/dub_1.jpg);" />
		<div style="background-image: url(img/dub_3.jpg);" />
		<div style="background-image: url(img/dub_4.jpg);" />
	</div>
	<div class="impressions-mobile">
		<div style="background-image: url(img/dub_2.jpg);" />
		<div style="background-image: url(img/dub_1.jpg);" />
		<div style="background-image: url(img/dub_3.jpg);" />
		<div style="background-image: url(img/dub_4.jpg);" />
	</div>
</section>

<style>
	#about {
		background-color: #fff;
	}
	
	.impressions-mobile{
		display: none;
	}	
	
	.impressions-desktop {
		width: 80vw;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 3fr 2fr;
		grid-gap: 1rem;
	}

	.impressions-desktop > div {
		background-size: cover;
		background-position: center;
		min-height: 22rem;
	}
	@media (max-width: 360px){
		.impressions-desktop{
			display: none;
		}
		.impressions-mobile {
			width: 80vw;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 3fr 2fr;
			grid-gap: 1rem;
		}

			.impressions-mobile > div {
			background-size: cover;
			background-position: center;
			min-height: 22rem;
		}
	}
</style>
