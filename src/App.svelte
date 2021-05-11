<script>
	import Checkbox from './Checkbox.svelte';
</script>

<main>
	<h1>First list</h1>
	<Checkbox text="asdasda"/>
	<Checkbox text="Новый чек-лист"/>
	<!-- как добавить новый элемент на страницу -->
</main>

<style>
	main {
		/* text-align: center; */
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>