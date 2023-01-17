<script>
	import FaFacebookSquare from 'svelte-icons/fa/FaFacebookSquare.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>

<footer>
	<div class="social">
		<a class="icon" href="https://facebook.com" target="_blank" rel="noopener noreferrer"
			><FaFacebookSquare /></a
		>
		<a
			class="icon"
			href="https://github.com/agentgoodbee?tab=repositories"
			target="_blank"
			rel="noopener noreferrer"><FaGithub /></a
		>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		color: #fff;
		background-color: #414a4f;
		padding: 60px 0;
	}
	.social {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.icon {
		width: 3rem;
		height: 3rem;
		margin: 1rem;
	}
</style>
