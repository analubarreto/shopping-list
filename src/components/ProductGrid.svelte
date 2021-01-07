<script lang="ts">
	import fruits from '../stores/product-store.js';
	import ProductCard from './ProductCard.svelte';
	import Input from './Input.svelte';
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
	{#each filteredProducts as fruit}
		<ProductCard
			id={fruit.id}
			fruitName={fruit.fruitName}
			fruitPrice={`R$ ${fruit.fruitPrice}`}
			unit={fruit.unit}
			imgUrl={fruit.imgUrl}
			isOrganic={fruit.isOrganic}
			on:showdetails />
	{/each}
</main>
