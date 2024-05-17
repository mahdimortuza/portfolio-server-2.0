import { Schema, model } from 'mongoose';
import { TTechnology } from './technology.interface';

const technologySchema = new Schema<TTechnology>(
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
  },
  {
    timestamps: true,
  },
);

export const Technology = model<TTechnology>('technologies', technologySchema);
