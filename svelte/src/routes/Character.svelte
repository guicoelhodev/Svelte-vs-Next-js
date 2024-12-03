<script lang="ts">
  import type { Character } from "$lib/services/api/types/character";
  let character: Character = $props();
</script>

<li class="flex aspect-video rounded-xl border bg-white shadow-sm">
  <a href="/characters/{character.id}" class="grid grid-cols-[0.6fr_1fr] gap-4">
    <aside class="flex items-stretch rounded-l-xl bg-red-100">
      <img
        class="flex-1 rounded-l-xl bg-red-100 object-cover"
        src={character.image}
        alt={`${character.name}`}
      />
    </aside>

    <section class="flex flex-col gap-4 overflow-hidden rounded-r-xl p-4">
      <h2 class=" truncate text-lg font-bold text-green-700">
        {character.name}
      </h2>

      <article class="flex items-center justify-center gap-2">
        <p
          class="rounded-md border-2 border-green-600 p-1
          text-green-600"
        >
          {character.status}
        </p>
        <p class="rounded-md border-2 border-red-500 p-1 text-red-500">
          {character.species}
        </p>
      </article>

      <article>
        <p class="text-sm text-neutral-500">Location</p>
        <p class="text-neutral-700 truncate">{character.location.name}</p>
      </article>
    </section>
  </a>
</li>
