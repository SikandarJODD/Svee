<script>
  import Button from "$lib/components/ui/button/button.svelte";
  let subnavs = [
    {
      name: "Forms",
      href: "/forms",
      current: true,
    },
    {
      name: "Validations",
      href: "/forms",
      current: true,
    },
    {
      name: "File Upload",
      href: "/forms",
      current: true,
    },
    {
      name: "Advance Forms",
      href: "/forms",
      current: true,
    },
  ];
  let navs = [
    { name: "Home", link: "/" },
    { name: "Forms", link: "forms" },
    { name: "Animation", link: "/animation" },
    { name: "Use Action", link: "/use-actions" },
  ];
  import WebsiteLogo from "$lib/images/fire.png";
  let isMenuOpen = true;
</script>

<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div
    class="relative lg:hidden transition-opacity ease-linear duration-300
    {isMenuOpen ? 'opacity-100 z-50' : 'opacity-0'}"
    role="dialog"
    aria-modal="true"
  >
    <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
    <div
      class="fixed inset-0 bg-gray-900/80 {isMenuOpen
        ? 'opacity-100'
        : 'opacity-0'}"
    ></div>

    <div
      class="fixed inset-0 flex transition ease-in-out duration-300 transform
      {isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      "
    >
      <!--
          Off-canvas menu, show/hide based on off-canvas menu state.
  
          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        -->
      <div
        class="relative mr-16 flex w-full max-w-xs flex-1 ease-in-out duration-300
          {isMenuOpen ? 'opacity-100' : 'opacity-0'}"
      >
        <!--
            Close button, show/hide based on off-canvas menu state.
  
            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
        <div class=" absolute left-full top-0 flex w-16 justify-center pt-5">
          <button
            type="button"
            class="-m-2.5 p-2.5"
            on:click={() => {
              isMenuOpen = false;
            }}
          >
            <span class="sr-only">Close sidebar</span>
            <svg
              class="h-6 w-6 text-white"
              fill="none"
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

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class=" flex grow flex-col gap-y-5 overflow-y-auto bg-gray-50 dark:bg-slate-900 px-6 pb-2 ring-1 ring-white/10"
        >
          <div class="flex h-16 shrink-0 items-center gap-2">
            <img class="h-8 w-auto" src={WebsiteLogo} alt="Your Company" />
            <a href="/" class="font-bold text-2xl">Svee</a>
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  {#each subnavs as item}
                    <li>
                      <a
                        href={item.href}
                        class="dark:text-gray-400 hover:bg-gray-200 dark:hover:text-white dark:hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      >
                        {item.name}
                      </a>
                    </li>
                  {/each}
                </ul>
              </li>
              <li
                class="flex flex-wrap gap-2 border border-primary py-4 px-4 dark:bg-gray-800/60"
              >
                {#each navs as item}
                  <Button size="sm" href={item.link}>
                    {item.name}
                  </Button>
                {/each}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div
    class="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:mt-20 lg:ml-3 lg:mb-3 lg:flex lg:w-56 lg:flex-col"
  >
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex grow flex-col gap-y-5 overflow-y-auto rounded-xl bg-gray-100 border border-primary dark:bg-slate-900/30 px-6"
    >
      <nav class="flex flex-1 flex-col lg:mt-4">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              {#each subnavs as item}
                <li>
                  <a
                    href={item.href}
                    class="dark:text-gray-400 text-gray-800 dark:hover:text-white hover:text-primary transition-all duration-150 hover:bg-gray-200 dark:hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  >
                    {item.name}
                  </a>
                </li>
              {/each}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div
    class="sticky top-0 flex items-center gap-x-6 bg-gray-50 dark:bg-slate-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden"
  >
    <button
      type="button"
      class="-m-2.5 p-2.5 text-gray-400 dark:text-primary/80 lg:hidden"
      on:click={() => {
        isMenuOpen = true;
      }}
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="h-6 w-6"
        fill="none"
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
    </button>
    <div class="flex items-center gap-1">
      <img src={WebsiteLogo} class="w-6 h-6" alt="" />
      <div class="flex-1 text-2xl font-bold leading-6 text-primary">Svee</div>
    </div>
  </div>

  <main class="py-10 lg:pl-64 lg:py-6">
    <div class="px-4 sm:px-6 lg:px-8">
      <slot></slot>
    </div>
  </main>
</div>
