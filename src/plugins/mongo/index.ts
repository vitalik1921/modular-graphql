import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log("Connection error: ", err));
dbConnection.once("open", () => console.log("Connected to DB!"));

export default mongoose;
