import { concatAST, buildASTSchema } from "graphql";
import Books from "./Books.gql";

export default buildASTSchema(concatAST([Books]));
