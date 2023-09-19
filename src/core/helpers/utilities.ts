export const repsonseHandler = (payload: { [key: string]: any } | any[], message = 'success'): { status: boolean; message: string; data: any } => {
    return {
        status: true,
        message,
        data: payload || {}
    };
};

export const validate = <T>(request: { [key: string]: any }, schema: joi.ObjectSchema<any>): T => {
    const validation = schema.validate(request, { abortEarly: false });
    const { value, error } = validation;
  
    if (error) {
      const relevantError = new Error('Bad request occurred');
      throw new BadRequestError(Errors.BAD_REQUEST, relevantError, buildErrorObject(error.details));
    }
    return value;
  };
  