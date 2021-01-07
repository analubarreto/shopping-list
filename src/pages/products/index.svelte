<script lang="ts">
	import fruits from '../../stores/product-store.js';
	import ProductGrid from '../../components/ProductGrid.svelte';
	import Input from '../../components/Input.svelte';
</script>

<h1 class="text-4xl mb-5 mt-5 font-title justify-self-start self-start">Product List</h1>
<section class="justify-self-start self-start mb-5">
	<Input inputLabel="Search" inputPlaceholder="Enter the name of your item" />
</section>
<ProductGrid products={$fruits} />
