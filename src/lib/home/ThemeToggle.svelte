<script lang="ts">
  import { toggleMode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button
  on:click={toggleMode}
  variant="outline"
  size="icon"
  class="bg-transparent  border-none"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="22"
    width="22"
    fill="none"
    stroke="currentColor"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="scale-100 transition-all dark:-rotate-90 dark:scale-0"
    ><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path
      d="M12 20v2"
    /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path
      d="M2 12h2"
    /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path
      d="m19.07 4.93-1.41 1.41"
    /></svg
  >

  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="22"
    width="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="absolute scale-0 transition-all dark:rotate-0 dark:scale-100"
    ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
  >
  <span class="sr-only">Toggle theme</span>
</Button>
