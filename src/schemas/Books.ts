export const types = `
type Book {
	title: String
	author: Author
}
`;

export const queries = `
  book(id: ID!): Book, 
  books: [Book],
`;

export const mutations = ``;
