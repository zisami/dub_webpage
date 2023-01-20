<script lang="ts">
    import { onMount } from 'svelte';
    import dub1_lg from '$lib/assets/img/dub_1.jpg?width=800';
    console.log(dub1_lg);

    export let src: string = '';
    export let alt: string = '';
    let defaultLg: string, webpSm: string, webpMd: string, webpLg: string, jpgSm: string, jpgMd: string, jpgLg: string;

    onMount(async () => {
        webpSm = await import(`$lib/assets/img/dub_1.jpg?width=200` /* @vite-ignore */);
        webpMd = await import(`$lib/assets/img/dub_1.jpg?width=400&webp` /* @vite-ignore */);
        webpLg = await import(`$lib/assets/img/dub_1.jpg?width=800&webp` /* @vite-ignore */);
        jpgSm = await import(`$lib/assets/img/dub_1.jpg?width=240&jpg` /* @vite-ignore */);
        jpgMd = await import(`$lib/assets/img/dub_1.jpg?width=400&jpg` /* @vite-ignore */);
        jpgLg = await import(`$lib/assets/img/dub_1.jpg?width=800&jpg` /* @vite-ignore */);
        defaultLg = await import(`$lib/assets/img/dub_1.jpg?width=800` /* @vite-ignore */);
    });
</script>

<picture>
    <source srcset={webpSm} type="/image/webp" media="(max-width: 320px)" />
    <source srcset={webpMd} type="image/webp" media="(max-width: 800px)" />
    <source srcset={webpLg} type="image/webp" media="(min-width: 1200px)" />
    <source srcset={jpgSm} type="image/jpeg" media="(max-width: 320px)" />
    <source srcset={jpgMd} type="image/jpeg" media="(max-width: 800px)" />
    <source srcset={jpgLg} type="image/jpeg" media="(min-width: 1200px)" />
    <img src={dub1_lg} {alt} />
</picture>

<style>
    picture {
        width: 100%;
        height: 100%;
        display: block;
    }
    picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>
