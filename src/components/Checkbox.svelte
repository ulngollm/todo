<script>
    export let completed = false;
    export let text = "...";
    export let edited = false;
    function editText(){
        edited = true;
    }
    function updateText(event){
        text = event.currentTarget.value;
        edited = false;
        console.log('edit end');
        console.log(event.type)
    }
    function inputHandler(e){
        console.log(e);
    }
</script>

<div class=task class:task_completed={completed} >
    <input type="checkbox" bind:checked={completed}>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="task__label" on:dblclick={editText}>
        {#if edited}
            <input type="text" on:change={updateText} on:blur={updateText} value={text}>
        {:else}
            {text}
        {/if}
    </label>
</div>

<style>
    .task{
        display: flex;
        gap: 20px;
        padding: 10px 0;
    }
    .task input[type="checkbox"]{
        margin: 0;
    }
    .task__label{
        display: block;
        min-width: 200px;
    }
    .task_completed .task__label{
        text-decoration: line-through;
    }
</style>