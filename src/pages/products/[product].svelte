<script lang="ts">
	import { params, url } from '@roxi/routify';
	import { onDestroy } from 'svelte';
	import fruits from '../../stores/product-store.js';
	import ProductDetail from '../../components/ProductDetail.svelte';

	let pageData: Object = {};
	const route = $url();

	const unsubscribe = fruits.subscribe((products) => {
		// /products/fruit1
		const lastChar = route.length;
		const routeParam: string = route.substr(10, lastChar);
		products.forEach((product) => {
			if (product.id === routeParam) {
				// @ts-ignore
				pageData.id = product.id;
			}
		});
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<ProductDetail id={pageData.id} />
