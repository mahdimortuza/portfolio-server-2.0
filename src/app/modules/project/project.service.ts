import QueryBuilder from '../../builder/QueryBuilder';
import { projectSearchAbleFields } from './project.constant';
import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDb = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProjectsFromDb = async (query: Record<string, unknown>) => {
  const projectQuery = new QueryBuilder(Project.find(), query)
    .search(projectSearchAbleFields)
    .filter()
    .sort()
    .paginate();

  const result = await projectQuery.modelQuery;
  return result;
};

const getSingleProjectFromDb = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

const updateSingleProjectIntoDb = async (id: string, payload: TProject) => {
  const result = await Project.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSingleProjectFromDb = async (id: string) => {
  const result = await Project.findByIdAndDelete({ _id: id }, { new: true });
  return result;
};

export const ProjectServices = {
  createProjectIntoDb,
  getAllProjectsFromDb,
  getSingleProjectFromDb,
  updateSingleProjectIntoDb,
  deleteSingleProjectFromDb,
};
