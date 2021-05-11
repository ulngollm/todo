import { writable } from 'svelte/store';

export const todoItems = writable([]);

todoItems.subscribe(value=>writeToCache(value));

function writeToCache(value){
    localStorage.setItem('itemList', JSON.stringify(value));
}
function getFromCache(){
    return JSON.parse(localStorage.getItem('itemList'));
}