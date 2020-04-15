import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: Schema.Types.String,
  author: Schema.Types.ObjectId,
});

export default model("Book", bookSchema);
