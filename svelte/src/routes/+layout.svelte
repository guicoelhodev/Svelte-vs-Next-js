<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class='p-4 min-h-screen size-full flex flex-col items-start gap-4'>
{@render children()}
</div>
