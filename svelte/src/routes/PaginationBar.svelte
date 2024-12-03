<script lang="ts">
  type TPaginationBar = {
    totalPages: number;
    currentPage: number;
    handleCurrentPage: (newPage: number) => void;
  };
  const visibleButtons = 5;

  let { totalPages, currentPage, handleCurrentPage }: TPaginationBar = $props();
  let range = $derived(getPaginationRange());

  function getPaginationRange() {
    const half = Math.floor(visibleButtons / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + visibleButtons - 1);

    if (end - start + 1 < visibleButtons) {
      start = Math.max(1, end - visibleButtons + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
</script>

<div class="fixed bottom-2 flex w-full justify-center">
  <ul
    class="flex items-center gap-2 rounded-lg bg-white p-2 shadow-md shadow-neutral-300"
  >
    {#if currentPage > visibleButtons}
      <button
        onclick={() => handleCurrentPage(1)}
        class="grid aspect-square h-10 place-content-center rounded-full border
      p-2"
      >
        1
      </button>

      <span>...</span>
    {/if}

    {#each range as page}
      <button
        onclick={() => handleCurrentPage(page)}
        class="grid aspect-square h-10 place-content-center rounded-full border"
        >{page}</button
      >
    {/each}

    {#if totalPages - visibleButtons > currentPage}
      <span>...</span>
      <button
        onclick={() => handleCurrentPage(totalPages)}
        class="grid aspect-square h-10 place-content-center rounded-full border
      p-2">{totalPages}</button
      >
    {/if}
  </ul>
</div>
