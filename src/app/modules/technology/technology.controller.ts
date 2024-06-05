import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TechnologyServices } from './technology.service';

const createTechnology = catchAsync(async (req, res) => {
  const technology = req.body;
  const result = await TechnologyServices.createTechnologyIntoDb(technology);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Technology created successfully',
    data: result,
  });
});

// get all technologies
const getAllTechnologies = catchAsync(async (req: Request, res: Response) => {
  const result = await TechnologyServices.getAllTechnologiesFromDb(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Technologies retrieved successfully',
    data: result,
  });
});

// get single technology
const getSingleTechnology = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TechnologyServices.getSingleTechnologyFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Technology retrieved successfully',
    data: result,
  });
});

// update technology

const updateSingleTechnology = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await TechnologyServices.updateSingleTechnologyIntoDb(
      id,
      req.body,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Technology updated successfully',
      data: result,
    });
  },
);

const deleteSingleTechnology = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await TechnologyServices.deleteSingleTechnologyFromDb(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Technology deleted successfully',
      data: result,
    });
  },
);

export const TechnologyController = {
  createTechnology,
  getAllTechnologies,
  getSingleTechnology,
  updateSingleTechnology,
  deleteSingleTechnology,
};
