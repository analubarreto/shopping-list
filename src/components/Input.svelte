<script lang="ts">
	export let inputLabel: string;
	export let inputPlaceholder: string;
</script>

<div class="flex flex-col ml-5">
	<label for="custom-input" class="mb-2">{inputLabel}</label>
	<input
		id="custom-input"
		type="text"
		placeholder={inputPlaceholder}
		class="border-none shadow h-11 md:w-96 sm:w-11/12 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent p-3 text-body placeholder-gray-light" />
</div>
