import Joi from "joi";
import { objectId } from "./custom.validation";

const create = {
  body: Joi.object().keys({
    content: Joi.object().required(),
    book: Joi.string().required().custom(objectId),
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
      content: Joi.object().optional(),
      book: Joi.string().optional().custom(objectId),
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
