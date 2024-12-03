<script lang="ts">
  import { api } from "$lib/services/api";
  import Character from "./Character.svelte";
  import PaginationBar from "./PaginationBar.svelte";

  let { data } = $props();
  let currentPage = $state(1);

  let characters = $state(data.results);

  function handleCurrentPage(newPage: number) {
    currentPage = newPage;
  }

  async function updateList(pageIndex: number) {
    const newList = await api.getCharacters({ newPageIndex: pageIndex });
    characters = newList.results;
  }

  $effect(() => {
    updateList(currentPage);
  });
</script>

{currentPage}
<ul
  class="grid w-full grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4
  rounded-md p-4 pb-16 md:grid-cols-2 lg:grid-cols-3"
>
  {#each characters as character}
    <Character {...character} />
  {/each}
</ul>

<PaginationBar {handleCurrentPage} {currentPage} totalPages={data.info.pages} />
