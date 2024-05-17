import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const project = req.body;
  const result = await ProjectServices.createProjectIntoDb(project);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project created successfully',
    data: result,
  });
});

const getAllProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.getAllProjectsFromDb(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects retrieved successfully',
    data: result,
  });
});

const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectServices.getSingleProjectFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project retrieved successfully',
    data: result,
  });
});

const updateSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectServices.updateSingleProjectIntoDb(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});

const deleteSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectServices.deleteSingleProjectFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  });
});

export const ProjectController = {
  createProject,
  getAllProject,
  getSingleProject,
  updateSingleProject,
  deleteSingleProject,
};
