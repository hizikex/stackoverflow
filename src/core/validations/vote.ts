import joi from 'joi';
import { validate } from '../helpers/utilities';
import { VoteRequest } from '../interfaces/vote';

const { object, string } = joi.types();

export const validateVote = (requestData: {
  [key: string]: any;
}): VoteRequest => {
  return validate(
    requestData,
    object.keys({
      vote_type: string.min(6).max(8).required(),
    }),
  );
};
