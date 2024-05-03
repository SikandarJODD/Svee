<script>
  let navs = [
    { name: "Home", link: "/" },
    { name: "Forms", link: "forms" },
    { name: "Animation", link: "/animation" },
    { name: "Use Action", link: "/use-actions" },
  ];
  import websiteLogo from "$lib/images/fire.png";
  import { slide } from "svelte/transition";
  import ThemeToggle from "./ThemeToggle.svelte";
  let isMobileMenu = false;
</script>

<nav
  class="bg-gray-50 dark:bg-slate-900 border-b border-primary/20 sticky top-0"
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex items-center w-full">
        <div class="flex-shrink-0 flex justify-center items-center">
          <img class="h-8 w-auto" src={websiteLogo} alt="Svelte Examples" />
          <a href="/" class="font-bold ml-1 text-2xl text-primary">Svee</a>
        </div>
        <div class="hidden sm:mx-auto sm:block">
          <div class="flex space-x-10">
            {#each navs as item}
              <a
                href={item.link}
                class="rounded-md text-sm transition-all duration-200 dark:text-gray-200 dark:hover:text-sky-400 font-normal hover:text-gray-900"
                >{item.name}</a
              >
            {/each}
          </div>
        </div>
      </div>
      <div class="mr-1 sm:ml-6 sm:block">
        <div class="flex items-center">
          <ThemeToggle />
        </div>
      </div>
      <div class="-mr-2 flex sm:hidden">
        <!-- Mobile menu button -->
        <button
          type="button"
          class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          on:click={() => (isMobileMenu = !isMobileMenu)}
        >
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <!--
              Icon when menu is closed.
  
              Menu open: "hidden", Menu closed: "block"
            -->
          <svg
            class="{isMobileMenu ? 'hidden' : 'block'} "
            fill="none"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <!--
              Icon when menu is open.
  
              Menu open: "block", Menu closed: "hidden"
            -->
          <svg
            class="{isMobileMenu ? 'block' : 'hidden'} "
            fill="none"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  {#key isMobileMenu}
    <div
      class="{isMobileMenu
        ? 'opacity-100 visible'
        : 'opacity-0 hidden'} sm:hidden"
      id="mobile-menu"
      in:slide={{ duration: 250 }}
    >
      <div class="space-y-1 px-2 pb-3 pt-2">
        {#each navs as item}
          <a
            href={item.link}
            class="block rounded-md px-3 py-2 text-base dark:text-gray-300 hover:bg-gray-200 transition-all duration-150 dark:hover:bg-gray-700 dark:hover:text-white"
            >{item.name}</a
          >
        {/each}
      </div>
    </div>
  {/key}
</nav>
