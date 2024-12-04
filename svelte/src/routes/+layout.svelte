<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

<div
  class="text-neutral-600 flex size-full min-h-screen flex-1 flex-col gap-4 bg-neutral-100 p-4"
>
  {@render children()}
</div>
