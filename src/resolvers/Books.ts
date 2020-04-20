import Author from "../models/author";
import Book from "../models/book";

const resolvers = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    book: (parent: any, { id }: any): any => {
      return Book.findById(id);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    books: (): any => {
      return Book.find({});
    },
  },
  Book: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    author: (parent: any, args: any): any => {
      return Author.findById(parent.authorId);
    },
  },
};

export default resolvers;
