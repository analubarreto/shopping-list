<script lang="ts">
	import fruits from '../../stores/product-store.js';
	import ProductGrid from '../../components/ProductGrid.svelte';
</script>

<h1 class="text-4xl mb-5 mt-5 font-title justify-self-start self-start">Product List</h1>
<ProductGrid products={$fruits} />
