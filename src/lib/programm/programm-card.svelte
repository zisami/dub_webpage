<script lang="ts">
    import type { ProgrammItem } from "$lib/programm/programm";
    export let programItem: ProgrammItem;
</script>

<div class="programm-item">
    <div class="thumb">
        <img src={programItem.thumbnail} alt={programItem.title} />
    </div>
    <div class="content">
        <h2>{programItem.title}</h2>
        <p>{programItem.description}</p>

        <div class="start">{programItem.startsAt}</div>
        <!--würd ich gerne in eine box rechts unten packen -->
    </div>
</div>

<style>
    .programm-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #eee;
        margin: 1rem 0;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: rgb(0, 0, 0, 0.1) 0.5rem 0 1rem;
        max-width: 80vw;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    /* .start {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    } */
</style>
