<script lang="ts">
  import { Burger } from "@svelteuidev/core";
  let opened = false;
  import { Button, Divider, Menu, Text } from "@svelteuidev/core";
</script>

<Menu size="xl">
  <Menu.Label>Menu</Menu.Label>
  <Burger {opened} on:click={() => (opened = !opened)} slot="control"
    >menu</Burger
  >

  <Menu.Item root="a" href="/tickets" on:click={() => (opened = !opened)}
    >Tickets</Menu.Item
  >

  <Menu.Item root="a" href="/lineup" on:click={() => (opened = !opened)}
    >Line-Up</Menu.Item
  >
  <Menu.Item root="a" href="/about" on:click={() => (opened = !opened)}
    >Info</Menu.Item
  >
  <Menu.Item root="a" href="/contact" on:click={() => (opened = !opened)}
    >Contact</Menu.Item
  >
</Menu>
