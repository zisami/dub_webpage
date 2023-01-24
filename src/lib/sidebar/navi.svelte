<script lang="ts">
  import Logo from "$lib/elements/logo.svelte";
  import Burger from "$lib/sidebar/burger.svelte";
  import Menu from "$lib/sidebar/menu.svelte";

  export let sidebar = false;
</script>

<header
  class="flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2"
>
  <nav class="flex">
    <Burger bind:open={sidebar} />
    <Logo />
  </nav>

  <Menu />
</header>
