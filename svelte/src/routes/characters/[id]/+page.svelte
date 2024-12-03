<script lang="ts">
  import { api } from "$lib/services/api/index.js";

  let { data } = $props();

  const characterData = $state(api.getSingleCharacter(data.id));

  $inspect(data);
</script>

<div class="size-full grid grid-cols-2 flex-col gap-4">
  <section class="col-span-2 border p-4 flex h-48">
    {#await characterData}
      <div class="flex">
        <span class="aspect-square bg-neutral-200 rounded-full size-full"
        ></span>
      </div>
    {:then c}
      <div class="flex">
        <article class="aspect-square">
          <img
            src={c.image}
            alt={c.image}
            class="size-full aspect-square rounded-full"
          />
        </article>

        <article class="grid grid-cols-[repeat(auto-fit,minmax(1fr,10rem))]">
          <div class="flex gap-2 text-green-800">
            <span class="text-neutral-500">name:</span>
            <p>{c.name}</p>
          </div>
        </article>
      </div>
    {:catch err}
      <p>{err.message}</p>
    {/await}
  </section>

  <section>
    <article>1.2</article>
    <article>1.3</article>
  </section>
</div>
