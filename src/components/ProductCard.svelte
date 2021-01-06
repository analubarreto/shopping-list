<script lang="ts">
	export let fruitName: String;
	export let fruitPrice: Number;
	export let unit: String;
</script>

<div class="flex flex-col justify-center items-center bg-brown-light w-72 h-80 rounded-md">
	<div>
		<h4 class="text-brown-dark">{fruitName}</h4>

		<p class="text-brown-dark">{fruitPrice}.00<small>{unit}</small></p>
	</div>
</div>
