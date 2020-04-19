import { gql } from "apollo-server-express";
import * as Books from "./Books";
import * as Authors from "./Authors";

export default gql`
  ${Books.types}
  ${Authors.types}
  type Query {
    ${Books.queries}
    ${Authors.queries}
  }
`;
