import QueryBuilder from '../../builder/QueryBuilder';
import { blogSearchAbleFields } from './blog.constant';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

// Create Blog Into DB

const createBlogIntoDb = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};
// Get all blogs

const getAllBlogsFromDb = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find(), query)
    .search(blogSearchAbleFields)
    .filter()
    .sort()
    .paginate();

  const result = await blogQuery.modelQuery;
  return result;
};

const getSingleBlogFromDb = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};
// Update Single Blog Into DB
const updateSingleBlogIntoDb = async (id: string, payload: TBlog) => {
  const result = await Blog.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
// Delete SIngle Blog From DB
const deleteSingleBlogFromDb = async (id: string) => {
  const result = await Blog.findByIdAndDelete({ _id: id }, { new: true });
  return result;
};
// Blog Services
export const BlogServices = {
  createBlogIntoDb,
  getAllBlogsFromDb,
  getSingleBlogFromDb,
  updateSingleBlogIntoDb,
  deleteSingleBlogFromDb,
};
