import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blog.service';
// createBlogIntoDb
const createBlog = catchAsync(async (req, res) => {
  const blog = req.body;
  const result = await BlogServices.createBlogIntoDb(blog);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

// getAllBlogsFromDb

const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.getAllBlogsFromDb(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs retrieved successfully',
    data: result,
  });
});

// getSingleBlogFromDb
const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogServices.getSingleBlogFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog retrieved successfully',
    data: result,
  });
});

// updateSingleBlogIntoDb
const updateSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogServices.updateSingleBlogIntoDb(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

// deleteSingleBlogFromDb

const deleteSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogServices.deleteSingleBlogFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  });
});

// BlogController
export const BlogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateSingleBlog,
  deleteSingleBlog,
};
