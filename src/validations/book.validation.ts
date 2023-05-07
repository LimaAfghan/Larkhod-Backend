import Joi from "joi";
import { objectId } from "./custom.validation";

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    lessons: Joi.array().required(),
  }),
};

const getById = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().optional(),
      description: Joi.string().optional(),
      image: Joi.string().optional(),
      lessons: Joi.array().optional(),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

export default {
  create,
  getById,
  updateById,
  deleteById,
};
