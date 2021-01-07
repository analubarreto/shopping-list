<script lang="ts">
	export let url: string;
</script>

<a
	href={url}
	class="bg-red-dark py-2 px-5 rounded-md text-gray font-body hover:bg-red hover:text-white hover:no-underline active: visited:text-gray"><slot /></a>
