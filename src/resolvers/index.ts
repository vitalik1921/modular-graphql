import { merge } from "lodash";
import Books from "./book";
import Authors from "./author";

const rootResolvers = {
  Query: {
    empty: (): string => "empty",
  },
};

export default merge(rootResolvers, Books, Authors);
