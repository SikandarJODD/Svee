<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { CodeBlock } from "svhighlight";

  import "highlight.js/styles/github-dark.css";
  import { onMount } from "svelte";

  let code = `  <form method='POST'>
     <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
     </div>
     <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
     </div>
     <button>Submit</button>
  </form>`;

  let backendcode = `import type { Actions } from "./$types";
export const actions: Actions = {
    default: async ({ request }) => {
        let form = await request.formData();
        let name = form.get("name");
        let email = form.get("email");
        console.log(form, name, email);
    }
};`;
  let mount = 0;
  onMount(() => {
    setTimeout(() => {
      mount = 1;
    }, 1000);
  });
</script>

<Tabs.Root value="frontend" class="mt-2">
  <Tabs.List class="grid grid-cols-2 w-fit">
    <Tabs.Trigger value="frontend">+page.svelte</Tabs.Trigger>
    <Tabs.Trigger value="backend">+page.server.ts</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="frontend">
    <Card.Root class="px-2">
      {#if mount == 1}
        <CodeBlock
          language="svelte"
          {code}
          showHeader={true}
          showLineNumbers={false}
          background="dark:bg-slate-950 bg-gray-900"
          headerText="Simple Form in Sveltekit"
        />
      {/if}
    </Card.Root>
  </Tabs.Content>
  <Tabs.Content value="backend">
    <Card.Root class="px-2">
      <CodeBlock
        language="ts"
        code={backendcode}
        rounded="rounded-lg"
        showLineNumbers={false}
        headerText="Server Side code"
        background="dark:bg-slate-950 bg-gray-900"
      />
    </Card.Root>
  </Tabs.Content>
</Tabs.Root>
