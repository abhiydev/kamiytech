import mongoose, { Schema, Document } from 'mongoose';

export interface IInquiry extends Document {
  name: string;
  contact: string;
  email?: string;
  requirements: string;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String },              // ← add this
    requirements: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Inquiry ||
  mongoose.model<IInquiry>('Inquiry', InquirySchema);
