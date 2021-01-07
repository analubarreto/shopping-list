<script lang="ts">
	export let inputLabel: string;
	export let inputPlaceholder: string;
</script>

<label for="custom-input" class="mb-2">{inputLabel}</label>
<input
	id="custom-input"
	type="text"
	placeholder={inputPlaceholder}
	class="border-none shadow h-11 w-96 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent p-3 text-body placeholder-gray-light" />
