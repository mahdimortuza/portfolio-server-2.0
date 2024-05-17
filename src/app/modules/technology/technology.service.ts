import QueryBuilder from '../../builder/QueryBuilder';
import { technologySearchAbleFields } from './technology.constant';
import { TTechnology } from './technology.interface';
import { Technology } from './technology.model';

const createTechnologyIntoDb = async (payload: TTechnology) => {
  const result = await Technology.create(payload);
  return result;
};

const getAllTechnologiesFromDb = async (query: Record<string, unknown>) => {
  const technologyQuery = new QueryBuilder(Technology.find(), query)
    .search(technologySearchAbleFields)
    .filter()
    .sort()
    .paginate();

  const result = await technologyQuery.modelQuery;
  return result;
};

const getSingleTechnologyFromDb = async (id: string) => {
  const result = await Technology.findById(id);
  return result;
};

const updateSingleTechnologyIntoDb = async (
  id: string,
  payload: TTechnology,
) => {
  const result = await Technology.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSingleTechnologyFromDb = async (id: string) => {
  const result = await Technology.findByIdAndDelete({ _id: id }, { new: true });
  return result;
};

export const TechnologyServices = {
  createTechnologyIntoDb,
  getAllTechnologiesFromDb,
  getSingleTechnologyFromDb,
  updateSingleTechnologyIntoDb,
  deleteSingleTechnologyFromDb,
};
