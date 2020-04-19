import * as Books from "./Books";
import * as Authors from "./Authors";

export default {
  Query: { ...Books.Query, ...Authors.Query },
};
