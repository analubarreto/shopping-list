<script lang="ts">
	import { url } from '@roxi/routify';
	import Button from './Button.svelte';
	import Tag from './Tag.svelte';

	export let id: string;
	export let fruitName: string;
	export let fruitPrice: Number;
	export let unit: string;
	export let imgUrl: string;
	export let isOrganic: boolean;
</script>

<div
	class="flex flex-col justify-center items-center bg-brown-light w-72 h-80 rounded-md transition duration-500 ease-in-out transform hover:scale-90">
	<span class="text-body justify-self-start self-end mb-10 mr-5"><Tag {isOrganic} /></span>
	<div class="mb-5"><img src={imgUrl} alt={fruitName} /></div>
	<div>
		<h4 class="text-brown-dark">{fruitName}</h4>
		<p class="text-brown-dark">{fruitPrice}.00<small>{unit}</small></p>
	</div>
	<div class="mt-4">
		<Button url={$url(`/products/${id}`)}>Details</Button>
	</div>
</div>
