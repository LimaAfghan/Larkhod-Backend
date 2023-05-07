import express from "express";
import auth from "../../middlewares/auth";
import validate from "../../middlewares/validate";
import { lessonService } from "../../services";
import { lessonValidation } from "../../validations";

const router = express.Router();

router
  .route("/")
  .post(auth(), validate(lessonValidation.create), lessonService.create)
  .get(lessonService.query);

router
  .route("/:id")
  .get(auth(), validate(lessonValidation.getById), lessonService.getById)
  .put(validate(lessonValidation.updateById), lessonService.updateById)
  .delete(
    auth(),
    validate(lessonValidation.deleteById),
    lessonService.deleteById
  );

export default router;
