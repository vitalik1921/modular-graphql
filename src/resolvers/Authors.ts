import Authors from "../models/author";

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authors: (): any => {
    return Authors.find({});
  },
};
