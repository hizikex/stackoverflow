import { RequestHandler } from "express";
import { responseHandler } from "../../core/helpers/utilities";
import * as tagController from "../../core/controllers/tag";
import { ResponseMessage } from "../../core/constant/responses";
import { validateTagUpdateInput } from "../../core/validations/tag";

export const getTag: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const response = await tagController.processGetTag(req.params.tagName);

    res.json(responseHandler(response, ResponseMessage.GetTag));
  } catch (error) {
    next(error);
  }
};

export const updateTag: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    const validTagUpdateInput = validateTagUpdateInput(req.body);
    const response = await tagController.processUpdateTag(
      validTagUpdateInput,
      req.params.tagName
    );

    res.json(responseHandler(response, ResponseMessage.UpdateTag));
  } catch (error) {
    next(error);
  }
};
