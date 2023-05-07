import httpStatus from "http-status";
import Lesson from "../Models/Lesson";
import ApiError from "../utils/ApiError";

const create = async (reqBody) => {
  return await Lesson.create(reqBody);
};

const query = async () => {
  return await Lesson.find();
};

const getById = async (id) => {
  return await Lesson.findById(id);
};


const updateById = async (id, updateBody) => {
  const result = await Lesson.findByIdAndUpdate(id, updateBody);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "Not found");
  }
  return result;
};

const deleteById = async (id) => {
  const result = await getById(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "Not found");
  }
  await Lesson.findByIdAndRemove(id);
  return result;
};

export default {
  create,
  query,
  getById,
  updateById,
  deleteById,
};
