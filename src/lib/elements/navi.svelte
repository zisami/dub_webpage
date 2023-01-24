<script lang="ts">
  import { Burger } from "@svelteuidev/core";
  let opened = false;
  import { Button, Divider, Menu } from "@svelteuidev/core";
</script>

<Menu>
  <Burger {opened} on:click={() => (opened = !opened)} slot="control"
    >menu</Burger
  >
  <Menu.Item root="a" href="/tickets">Tickets</Menu.Item>
  <Menu.Item root="a" href="/lineup">Line-Up</Menu.Item>
  <Menu.Item root="a" href="/about">Info</Menu.Item>
  <Menu.Item root="a" href="/contact">Contact</Menu.Item>
</Menu>
