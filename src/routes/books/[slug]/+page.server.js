import db from '$lib/server/db.js';

export async function load({ params }) {
	const stmt = db.prepare('SELECT * FROM books2 WHERE book_id = ?');
	const post = stmt.get(params.slug);
	//	const post = bookdata.find((post) => post.index.toString() === params.slug);
	return {
		post
	};
}
