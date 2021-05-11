<script>
	import Checkbox from './Checkbox.svelte';
	import {todoItems} from '../store/store.js';
    
    export let listItems;

    function addNewItem(event){
        console.log(event.currentTarget.value);
        let newItem = event.currentTarget.value;
        updateItems(newItem);
        listItems = [...listItems, {text:newItem}];
        event.currentTarget.value = '';
    }
    function updateItems(newItem){
		todoItems.update(value => [...value, newItem]);
	}
    // todoItems.subscribe(value=>console.log(value));
</script>

    {#each listItems as item}
        <Checkbox text={item.text} completed={item.completed}/>
    {/each}
    <input type="text" on:change={addNewItem} placeholder="Новая задача...">