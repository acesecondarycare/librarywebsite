<script>
	// import { bookdata } from './data.js';
	export let data;

	console.log(data);

	// var filtered = bookdata.filter((book) => book.index < 20);
</script>

<h1>Here you can view the catalog of books!</h1>
<h3>
	The books page is currently under maintenance. Thank you for your cooperation! We have gotten the
	books showing! Now we have the books loading faster.
</h3>

<ul>
	{#each data.books as book}
		<li><a href="/books/{book.book_id}">{book.book_title}</a></li>
	{/each}
</ul>

<style>
	a {
		text-decoration: none;
		color: black;
		cursor: pointer;
		padding-left: 10px;
		padding-right: 10px;
	}
</style>
