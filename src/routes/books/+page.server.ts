import db from '$lib/server/db.js';
import type { Book } from '$lib/interfaces';

export async function load({ url }) {
	const page = parseInt(url.searchParams.get('page') || '1');
	var filtered = getBooks(page);
	return {
		books: filtered
	};
}
function getBooks(page: number) {
	const offset = (page - 1) * 20;
	var books: Book[] = [];
	// return db.prepare('SELECT * FROM books2 WHERE index == ?').all(offset);
	books = db
		.prepare('SELECT * FROM books2 WHERE "index" >= ? and "index" < ? ORDER BY "book_title"')
		.all(offset, offset + 20) as Book[];
	console.log(books);
	return books;
	// return db.prepare('SELECT * FROM books2 ORDER BY "book_title" LIMIT 20').all();
}
