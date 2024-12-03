<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex size-full min-h-screen flex-col items-start gap-4 bg-neutral-100 p-4">
	{@render children()}
</div>
