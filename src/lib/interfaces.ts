export interface Book {
	book_id: number;
	book_title: string;
	cover_image_uri: string;
	book_isbn: string;
	book_details: string;
	book_format: string;
	book_publication_info: string;
	book_author_link: string;
	book_author: string;
	book_num_pages: number;
	book_genres: string[];
	book_num_ratings: number;
	book_num_reviews: number;
	book_average_rating: number;
	book_rating_distribution: { [key: number]: number };
}
