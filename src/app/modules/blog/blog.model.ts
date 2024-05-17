import { Schema, model } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Title is required'],
    },
    image: {
      type: String,
      required: [true, 'Product image is required'],
    },
    blog: {
      type: String,
      required: [true, 'Product image is required'],
    },
    category: {
      type: String,
      required: [true, 'Product image is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const Blog = model<TBlog>('Blogs', blogSchema);
