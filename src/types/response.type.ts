type SuccessResponse = {
  success: true;
  body: any;
};

type ErrorResponse = {
  success: false;
  error: any;
};

type responseType = SuccessResponse | ErrorResponse;

export default responseType;
