<script lang="ts">
  export let src: string[] = [];
  export let alt: string = "";
</script>

<picture>
  <source srcset={src[0]} type="image/webp" media="(max-width: 340px)" />
  <source srcset={src[1]} type="image/avif" media="(max-width: 340px)" />
  <source srcset={src[2]} type="image/jpg" media="(max-width: 340px)" />

  <source srcset={src[3]} type="image/webp" media="(max-width: 480px)" />
  <source srcset={src[4]} type="image/avif" media="(max-width: 480px)" />
  <source srcset={src[5]} type="image/jpg" media="(max-width: 480px)" />

  <source srcset={src[6]} type="image/webp" media="(max-width: 640px)" />
  <source srcset={src[7]} type="image/avif" media="(max-width: 640px)" />
  <source srcset={src[8]} type="image/jpg" media="(max-width: 640px)" />

  <source srcset={src[9]} type="image/webp" media="(max-width: 768px)" />
  <source srcset={src[10]} type="image/avif" media="(max-width: 768px)" />
  <source srcset={src[11]} type="image/jpg" media="(max-width: 768px)" />
  <img src={src[src.length - 1]} {alt} />
</picture>

<style>
  picture {
    width: 100%;
    max-width: 768px;
    height: 100%;
    display: block;
  }
  picture img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
    box-sizing: border-box;
    display: block;
  }
</style>
