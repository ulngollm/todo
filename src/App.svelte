<script>
	import List from './components/List.svelte';
	const listData = [
		{
			text:"Новый дело на завтвчерара",
			completed: true,
		},
		{
			text:"Новый дело на сегодня",
			completed: false,
		}
	];
	
</script>

<main>
	<h1>First list</h1>
	<List listItems={listData}/>
</main>

<style>
	:global(*, *::after, *::before){
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
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