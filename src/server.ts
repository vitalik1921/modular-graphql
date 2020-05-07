import "./plugins/mongo";

import { ApolloServer } from "apollo-server-express";
import express from "express";

import passport from "./plugins/passport";
import resolvers from "./resolvers";
import typeDefs from "./schemas";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app, path: "/graphql" });

app.use(passport.initialize());

// run server
app.listen(process.env.PORT || 3000, () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});
