import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Title is required'],
    },
    subTitle: {
      type: String,
      required: [true, 'Sub title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    image: {
      type: String,
      required: [true, 'Product image is required'],
    },

    category: {
      type: String,
      required: [true, 'Product image is required'],
    },
    liveLink: {
      type: String,
      required: [true, 'Live link is required'],
    },
    githubFrontend: {
      type: String,
      required: [true, 'GitHub frontend link is required'],
    },
    githubBackend: {
      type: String,
      required: [true, 'GitHub frontend link is required'],
    },
    erDiagram: {
      type: String,
      required: [true, 'GitHub frontend link is required'],
    },
    dataRelationDiagram: {
      type: String,
      required: [true, 'GitHub frontend link is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const Project = model<TProject>('Projects', projectSchema);
