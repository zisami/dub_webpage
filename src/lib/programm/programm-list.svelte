<script>
  import { programm } from "$lib/programm/programm";
  import ProgrammCard from "$lib/programm/programm-card.svelte";
</script>

<div id="programm-list">
  {#each programm as programItem}
    {#if programItem.slug}
      <a href={programItem.slug}>
        <ProgrammCard {programItem} />
      </a>
    {:else}
      <ProgrammCard {programItem} />
    {/if}
  {/each}
</div>

<style>
  #programm-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
</style>
