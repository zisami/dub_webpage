<script>
  import { programm } from "$lib/programm/programm";
  import ProgrammCard from "$lib/programm/programm-card.svelte";
</script>

<div id="programm-list">
  {#each programm as programItem}
    <ProgrammCard {programItem} />
  {/each}
</div>

<style>
  #programm-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
</style>
