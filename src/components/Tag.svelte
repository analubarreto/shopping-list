<script lang="ts">
	export let isOrganic: boolean;
</script>

{#if isOrganic}
	<span class="bg-green p-2 text-body text-white text-xs rounded-sm"> organic </span>
{/if}
