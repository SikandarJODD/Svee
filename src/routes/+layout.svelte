<script>
  import Navbar from "$lib/home/Navbar.svelte";
  import { ModeWatcher } from "mode-watcher";
  import "../app.pcss";
  import { page } from "$app/stores";
  import { Width } from "svelte-radix";
  $: pageRoute = $page.url.pathname.split("/")[1] || "";
  let windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<ModeWatcher />
{#if windowWidth > 800}
  <Navbar />
{:else if pageRoute !== "forms" && windowWidth > 800}
  <Navbar />
{:else if pageRoute !== "forms"}
  <Navbar />
{/if}
<slot></slot>
