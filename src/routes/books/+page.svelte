<script lang="ts">
	// import { bookdata } from './data.js';
	import type { Book } from '$lib/interfaces';
	export let data;

	console.log(data);
	import Navbar from '$lib/Components/Navbar.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import BookDisplay from '$lib/Components/book_display.svelte';
	// var filtered = bookdata.filter((book) => book.index < 20);
</script>

<Navbar />
<h1>Here you can view the catalog of books!</h1>
<h3>Click on a book to view more details about it.</h3>
<button
	on:click={() => goto(`/books?page=${parseInt(page.url.searchParams.get('page') || '1') - 1}`)}
>
	Previous
</button>

<button
	on:click={() => goto(`/books?page=${parseInt(page.url.searchParams.get('page') || '1') + 1}`)}
>
	Next
</button>

<div class="book-display">
	{#each data.books as book}
		<a href={`/books/${book.book_id}`}><BookDisplay {book} /></a>
	{/each}
</div>

<style>
	a {
		text-decoration: none;
		color: black;
		cursor: pointer;
		padding-left: 10px;
		padding-right: 10px;
	}

	.book-display {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 20px;
		margin: 10px;
	}

	button {
		margin: 10px;
		padding: 10px 20px;
		font-size: 16px;
		cursor: pointer;
	}
</style>
