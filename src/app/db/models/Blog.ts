import mongoose, { Schema, Document } from 'mongoose';

export interface Blog extends Document {
  title: string;
  desc: string;
  imageURL?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<Blog>(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    imageURL: { type: String },              
  },
  { timestamps: true }
);

export default mongoose.models.Blog ||
  mongoose.model<Blog>('Blog', BlogSchema);
