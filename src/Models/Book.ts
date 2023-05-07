import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    lessons: [{ type: Schema.Types.ObjectId, ref:"Lesson" }],
  },
  { timestamps: true }
);

export = model("Book", bookSchema);
