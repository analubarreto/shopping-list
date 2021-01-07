<script lang="ts">
	import { onDestroy } from 'svelte';
	import { url } from '@roxi/routify';
	import Button from './Button.svelte';
	import Tag from './Tag.svelte';

	export let id: string;

	let selectedProduct: Object[];
</script>

<main class="flex flex-col justify-center items-center">
	<section><img src="" alt="" /></section>
	<section
		class="bg-brown-light mb-4 p-10 flex flex-col justify-center items-center bg-brown-light w-6/12 md:w-10/12 sm:w-11/12 rounded-md">
		<span class="justify-self-start self-end"><Tag isOrganic={true} /></span>
		<div class="flex flex-col justify-center items-center">
			<h1 class="font-body text-brown-dark text-4xl">Avocados</h1>
			<h2 class="font-body text-brown-dark text-3xl">R$5.00</h2>
			<p class="font-body text-brown-dark text-sm">per unit</p>
		</div>
		<div>
			<p class="font-body text-brown-dark mt-7">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra congue donec et,
				lectus neque, volutpat nulla vitae.Ut scelerisque faucibus quis natoque.
			</p>
		</div>
	</section>
	<section
		class="lg:justify-self-center lg:self-center md:justify-self-start md:self-end md:mx-14">
		<Button url={$url('/')}>Go back</Button>
	</section>
</main>
