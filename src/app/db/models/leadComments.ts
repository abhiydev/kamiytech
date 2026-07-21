import { Schema, model, models, Types } from "mongoose";

export interface ILeadComment {
  _id?: string;
  leadId: Types.ObjectId | string;
  disposition: string;
  comment: string;
  author: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const leadCommentsSchema = new Schema<ILeadComment>(
  {
    leadId: {
      type: Schema.Types.ObjectId,
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
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const LeadComments =
  models.LeadComments || model<ILeadComment>("LeadComments", leadCommentsSchema);

export { LeadComments };
