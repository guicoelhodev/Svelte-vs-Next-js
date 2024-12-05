<script lang="ts">
  import { api } from "$lib/services/api";
  import Character from "./Character.svelte";
  import PaginationBar from "./PaginationBar.svelte";

  let { data } = $props();
  let currentPage = $state(1);

  let charactersResponse = $derived(
    currentPage === 1 ? data.response : api.getCharacters(currentPage),
  );

  function handleCurrentPage(newPage: number) {
    currentPage = newPage;
  }

  const skeletonsCards = Array.from({ length: 30 });
</script>

<ul
  class="grid w-full grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4
  rounded-md p-4 pb-16 md:grid-cols-2 lg:grid-cols-3"
>
  {#await charactersResponse}
    {#each skeletonsCards as _}
      <div class="bg-neutral-200 w-full h-52 rounded-md"></div>
    {/each}
  {:then response}
    {#each response.results as character}
      <Character {...character} />
    {/each}
  {/await}
</ul>

{#await charactersResponse then data}
  <PaginationBar
    {handleCurrentPage}
    {currentPage}
    totalPages={data.info.pages}
  />
{/await}
