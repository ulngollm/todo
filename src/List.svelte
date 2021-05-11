<script>
    export let listItems;
	import Checkbox from './Checkbox.svelte';
    function addNewItem(event){
        console.log(event.currentTarget.value);
        let newItem = event.currentTarget.value;
        listItems = [...listItems, {text:newItem}];
        event.currentTarget.value = '';
    }

</script>
    {#each listItems as item}
        <Checkbox text={item.text} completed={item.completed}/>
    {/each}
    <input type="text" on:change={addNewItem} placeholder="Новая задача...">