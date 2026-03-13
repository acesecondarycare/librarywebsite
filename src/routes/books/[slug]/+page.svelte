<script>
	let { data } = $props();
	let book = data.post;
	import Navbar from '$lib/Components/Navbar.svelte';
</script>

<Navbar />
<div class="catalog-page">
	<h1>{book?.book_title}</h1>
	<h2>by {book?.author}</h2>

	<div class="content">
		<div class="cover-section">
			<img src={book?.cover_image_uri} alt="Cover of {book?.book_title}" />
		</div>

		<div class="details">
			<p><strong>Pages:</strong> {book?.pages}</p>

			<p class="description">
				{book?.book_details}
			</p>
		</div>
	</div>
</div>

<style>
	.catalog-page {
		max-width: 900px;
		margin: 40px auto;
		font-family: Arial, Helvetica, sans-serif;
	}

	h1 {
		margin-bottom: 4px;
		font-size: 28px;
	}

	h2 {
		margin-top: 0;
		margin-bottom: 24px;
		font-size: 18px;
		font-weight: normal;
	}

	.content {
		display: flex;
		gap: 30px;
		align-items: flex-start;
	}

	.cover-section img {
		width: 200px;
		height: auto;
	}

	.details {
		flex: 1;
	}

	.details p {
		margin-top: 0;
		margin-bottom: 16px;
		line-height: 1.5;
	}

	.description {
		max-width: 600px;
	}
</style>
