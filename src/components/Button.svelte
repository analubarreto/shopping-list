<script lang="ts">
	export let url: string;
</script>

<a
	class="bg-red-dark py-2 px-5 rounded-md text-gray visited:text-gray active:text-gray shadow border-transparent font-body hover:bg-red hover:text-white hover:no-underline"
	href={url}><slot /></a>
