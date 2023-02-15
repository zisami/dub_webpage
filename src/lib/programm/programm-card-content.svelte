<script lang="ts">
  import Picture from "$lib/elements/picture.svelte";
  import type { ProgrammItem } from "$lib/programm/programm";
  export let programItem: ProgrammItem;
</script>

{#if programItem.thumbnail}
  <div class="thumb">
    {#if programItem.slug}
      <a href={`lineup/${programItem.slug}`}>
        <Picture src={programItem.thumbnail} alt={programItem.title} />
      </a>
    {:else}
      <Picture src={programItem.thumbnail} alt={programItem.title} />
    {/if}
  </div>
{/if}
<div class="content">
  {#if programItem.title}
    <h2>{programItem.title}</h2>
  {/if}
  {#if programItem.description}
    <p>{programItem.description}</p>
  {/if}
</div>

<style>
  .content {
    padding: 2rem;
  }
  .content:first-child {
    padding-top: 3rem;
  }
  .thumb {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #fff;
    font-family: "own";
    font-size: 3rem;
  }
  p {
    font-family: "dosis";
    text-align: center;
    color: #fff;
    font-size: 1.25rem;
  }
</style>
