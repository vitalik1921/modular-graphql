import { merge } from "lodash";
import Books from "./Books";
import Authors from "./Authors";

console.log("merge(Books, Authors)", merge(Books, Authors));

export default merge(Books, Authors);
