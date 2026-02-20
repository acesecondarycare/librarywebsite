import Database from 'better-sqlite3';

const db = new Database('./bookdb.db', { readonly: true, verbose: console.log });
// db.exec(
// 	`CREATE TABLE "books2" (
// 	"book_title"	TEXT NOT NULL,
// 	"author"	TEXT NOT NULL,
// 	"book_details"	TEXT NOT NULL,
// 	"pages"	INTEGER NOT NULL,
// 	"book_id"	INTEGER NOT NULL,
// 	PRIMARY KEY("book_id" AUTOINCREMENT)
// );`
// );
var stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table';`);
var tables = stmt.all();
console.log(tables);

export default db;
