<script lang="ts">
	import ProductCard from './ProductCard.svelte';

	export let products: Object[];
</script>

<main class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 gap-4">
	{#each products as fruit}
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
