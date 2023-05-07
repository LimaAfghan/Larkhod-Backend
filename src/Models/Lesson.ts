import { Schema, model } from "mongoose";

const lessonSchema = new Schema(
  {
    content: { type: Object, default: {} },
    book: { type: Schema.Types.ObjectId, ref: "Book" },
  },
  { timestamps: true }
);

export = model("Lesson", lessonSchema);
