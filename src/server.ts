import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./schemas";
import resolvers from "./resolvers";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log("Connection error: ", err));
dbConnection.once("open", () => console.log("Connected to DB!"));

// The GraphQL endpoint
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app, path: "/graphql" });

app.set("port", process.env.PORT || 3000);

export default app;
