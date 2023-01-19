<script>
  import Navi from "$lib/elements/navi.svelte";
  import Logo from "$lib/elements/logo.svelte";
</script>

<header id="top">
  <Logo />
  <Navi />
</header>

<style>
  header {
    top: 0;
    left: 0;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem 1.8rem;

    background-color: hsla(0, 4%, 5%, 0.597);
    z-index: 100;
  }
</style>
