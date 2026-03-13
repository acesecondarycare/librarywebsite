<script lang="ts">
	import type { Book } from '$lib/interfaces';

	let { book }: { book: Book | null } = $props();
</script>

<div class="book-display">
	<img src={book?.cover_image_uri} alt="Cover of {book?.book_title}" />
</div>

<style>
	img {
		width: 200px;
		height: 300px;
		object-fit: cover;
	}
</style>
