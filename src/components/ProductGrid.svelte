<script lang="ts">
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import ProductCard from './ProductCard.svelte';
	import Toggle from './Toggle.svelte';

	export let products: Object[];

	let organicOnly = false;

	$: filteredProducts = organicOnly ? products.filter((f) => f.isOrganic) : products;

	function setFilter(e) {
		organicOnly = e.detail === 1;
	}
</script>

<section class="justify-self-start self-start mb-5 flex sm:flex-col">
	<Toggle on:select={setFilter} />
</section>
<main class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 gap-4">
	{#each filteredProducts as fruit (fruit.id)}
		<div transition:scale animate:flip={{ duration: 400 }}>
			<ProductCard
				id={fruit.id}
				fruitName={fruit.fruitName}
				fruitPrice={`R$ ${fruit.fruitPrice}`}
				unit={fruit.unit}
				imgUrl={fruit.imgUrl}
				isOrganic={fruit.isOrganic}
				on:showdetails />
		</div>
	{/each}
</main>
