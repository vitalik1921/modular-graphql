import Authors from "../models/author";

const resolvers = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    authors: (): any => {
      return Authors.find({});
    },
  },
};

export default resolvers;
