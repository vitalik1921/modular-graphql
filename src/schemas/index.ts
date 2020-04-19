import { gql } from "apollo-server-express";
import * as Books from "./Books";
import * as Authors from "./Authors";

type GQLSchema = {
  types: string;
  queries: string;
  mutations: string;
};

const types: string[] = [];
const queries: string[] = [];
const mutations: string[] = [];

const schemas: GQLSchema[] = [Books, Authors];

schemas.forEach((s) => {
  types.push(s.types);
  queries.push(s.queries);
  mutations.push(s.mutations);
});

export default gql`
  ${types.join("\n")}
  type Query {
    ${queries.join("\n")}
  }
`;
