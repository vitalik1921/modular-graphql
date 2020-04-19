import Authors from "../models/author";

export const Query = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authors: (): any => {
    return Authors.find({});
  },
};

export const Mutation = {};