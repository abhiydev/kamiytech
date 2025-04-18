import { Schema, model, models, Types } from "mongoose";

const leadCommentsSchema = new Schema(
  {
    // Reference to the Lead collection
    leadId: {
      type: Types.ObjectId,
      ref: "Lead",
      required: true,
    },
    disposition: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    // If you just want the author's name, leave as String.
    // But to reference a User document you could switch this to ObjectId too.
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const LeadComments =
  models.LeadComments || model("LeadComments", leadCommentsSchema);

export { LeadComments };
