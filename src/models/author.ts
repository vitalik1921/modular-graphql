import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  name: Schema.Types.String,
});

export default model("Author", bookSchema);
