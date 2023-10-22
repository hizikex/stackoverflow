import joi from "joi";
import { TagRequestAndResponse } from "../interfaces/tag";
import { validate } from "../helpers/utilities";

const { object, string } = joi.types();

export const validateTagUpdateInput = (requestData: {
  [key: string]: any;
}): TagRequestAndResponse => {
  return validate(
    requestData,
    object.keys({
      name: string.trim().min(2).max(500).required(),
    })
  );
};
