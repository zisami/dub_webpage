<script>
    import { programm } from "$lib/programm/programm";
    import ProgrammCard from "$lib/programm/programm-card.svelte";
</script>

<div id="programm-list">
    {#each programm as programItem}
        {#if programItem.slug}
            <a href={`lineup/${programItem.slug}`}>
                <ProgrammCard {programItem} />
            </a>
        {:else}
            <div>
                <ProgrammCard {programItem} />
            </div>
        {/if}
    {/each}
</div>

<style>
    #programm-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
    }
    #programm-list > * {
        width: 100%;
    }
    @media (min-width: 768px) {
        #programm-list > * {
            width: 50%;
        }
    }
    @media (min-width: 1024px) {
        #programm-list > * {
            width: 33.333%;
        }
    }
</style>
