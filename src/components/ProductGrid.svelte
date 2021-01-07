<script lang="ts">
	import ProductCard from './ProductCard.svelte';

	let fetchedFruits: Object[] = [
		{
			id: 'fruit1',
			fruitName: 'Avocado',
			fruitPrice: 5,
			unit: 'unit',
			imageUrl: '',
			isOrganic: true,
		},
		{
			id: 'fruit2',
			fruitName: 'Red Apple',
			fruitPrice: 3,
			unit: 'kg',
			imageUrl: '',
			isOrganic: false,
		},
		{
			id: 'fruit3',
			fruitName: 'Green Apple',
			fruitPrice: 16,
			unit: 'kg',
			imageUrl: '',
			isOrganic: true,
		},
		{
			id: 'fruit4',
			fruitName: 'Pineapple',
			fruitPrice: 2,
			unit: 'unit',
			imageUrl: '',
			isOrganic: false,
		},
		{
			id: 'fruit5',
			fruitName: 'Blue Berry',
			fruitPrice: 12,
			unit: 'kg',
			isOrganic: true,
		},
		{
			id: 'fruit6',
			fruitName: 'Cherry',
			fruitPrice: 10,
			unit: 'box',
			imageUrl: '',
			isOrganic: true,
		},
		{
			id: 'fruit7',
			fruitName: 'Banana',
			fruitPrice: 2,
			unit: 'kg',
			imageUrl: '',
			isOrganic: false,
		},
		{
			id: 'fruit8',
			fruitName: 'Green Grapes',
			fruitPrice: 7,
			unit: 'box',
			imageUrl: '',
			isOrganic: false,
		},
		{
			id: 'fruit9',
			fruitName: 'Orange',
			fruitPrice: 8,
			unit: 'kg',
			imageUrl: '',
			isOrganic: true,
		},
	];
</script>

<main class="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
	{#each fetchedFruits as fruit}
		<ProductCard
			fruitName={fruit.fruitName}
			fruitPrice={`R$ ${fruit.fruitPrice}`}
			unit={fruit.unit}
			imgUrl={fruit.imgUrl} />
	{/each}
</main>
