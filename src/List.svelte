<script>
    export let listItems;
	import Checkbox from './Checkbox.svelte';
    function addNewItem(event){
        console.log('newItem');
        event.currentTarget.value;
        listItems.push(event.currentTarget.value);
    }

</script>
    {#each listItems as item}
        <Checkbox text={item.text} completed={item.completed}/>
    {/each}
    <Checkbox on:click={addNewItem}/>
    <!-- для добавления нового элемента отдельный чекбокс -->