<script lang="ts">
	type TPaginationBar = {
		totalPages: number;
		currentPage: number;
	};
	const visibleButtons = 6;

	let { totalPages, currentPage }: TPaginationBar = $props();
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

<div class="fixed bottom-4 flex w-full justify-center">
	{currentPage}
	<ul class="flex items-center gap-4 rounded-lg bg-white p-2 shadow-md shadow-neutral-300">
		{#if currentPage > visibleButtons}
			<button
				onclick={() => (currentPage = 1)}
				class="grid aspect-square h-10 place-content-center rounded-full border
      p-2"
			>
				1
			</button>

			<span>...</span>
		{/if}

		{#each range as page}
			<button
				onclick={() => (currentPage = page)}
				class="grid aspect-square h-10 place-content-center rounded-full border">{page}</button
			>
		{/each}

		{#if totalPages - visibleButtons > currentPage}
			<span>...</span>
			<button
				onclick={() => (currentPage = totalPages)}
				class="grid aspect-square h-10 place-content-center rounded-full border
      p-2">{totalPages}</button
			>
		{/if}
	</ul>
</div>
