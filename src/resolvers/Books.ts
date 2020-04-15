import Books from "../models/book";

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  book: (obj: any, { id }: any): any => {
    return Books.findById(id);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  books: (obj: any, args: any): any => {
    return Books.find({});
  },
};
