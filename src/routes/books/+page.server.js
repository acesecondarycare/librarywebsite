import db from '$lib/server/db.js';

export async function load({ url }) {
	const page = parseInt(url.searchParams.get('page') || '1');
	const offset = (page - 1) * 20;
	var filtered = db
		.prepare('SELECT * FROM books2 ORDER BY book_title LIMIT 20 OFFSET ?')
		.all(offset);
	console.log(filtered);
	return {
		books: filtered
	};
}
