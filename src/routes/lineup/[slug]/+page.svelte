<script lang="ts">
    import ProgrammCard from '$lib/programm/programm-card.svelte';
    import { onMount } from 'svelte';
    import type { ProgrammItem } from '$lib/programm/programm';
    import { programm } from '$lib/programm/programm';
    import type { PageData } from './$types';

    export let data: PageData;
    let programItem: ProgrammItem | undefined;

    onMount(() => {
        console.log(data);
        programItem = data.programItem;
    });
</script>

{#if data.programItem}
    {data.programItem.title}
{:else}
    <h1>404</h1>
{/if}
