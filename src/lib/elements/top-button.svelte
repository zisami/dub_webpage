<script>
  export let showOnPx = 20;
  let hidden = true;

  function goTop() {
    document.body.scrollIntoView();
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top" on:click={goTop} on:keyup={goTop} class:hidden>
  Top
</div>

<style>
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: rgb(244, 104, 34);
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;

    opacity: 1;
    transition: opacity 0.5s, visibility 0.5s;
  }

  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>
