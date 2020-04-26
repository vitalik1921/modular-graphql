import Author from "../models/author";
import Book from "../models/book";

const resolvers = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    authors: (): any => {
      return Author.find({});
    },
  },
  Author: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    books: (parent: any): any => {
      const res = Book.find({ authorId: parent._id });
      return res;
    },
  },
};

export default resolvers;
