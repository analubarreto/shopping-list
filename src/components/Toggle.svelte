<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let selectedOption = 0;
</script>

<div
	class="bg-brown-light py-0.5 px-2 grid grid-cols-2 flex justify-center items-center rounded-md mt-5 sm:w-11/12 ml-5">
	<button
		class:text-white={selectedOption === 0}
		on:click={() => {
			selectedOption = 0;
			dispatch('select', 0);
		}}
		class="border-transparent text-brown mr-4 visited:text-brown hover:text-white hover:no-underline selected:border-transparent">All</button>
	<button
		class:text-white={selectedOption === 1}
		on:click={() => {
			selectedOption = 1;
			dispatch('select', 1);
		}}
		class="border-transparent text-brown visited:text-brown hover:text-white">Organic</button>
</div>
