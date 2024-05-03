<script>
  import Sidebar from "$lib/home/Sidebar.svelte";
</script>

<Sidebar>
  <div
    class="prose dark:prose-invert min-w-full prose-h1:mb-3 prose-p:text-lg prose-h1:font-bold"
  >
    <slot></slot>
  </div>
</Sidebar>
