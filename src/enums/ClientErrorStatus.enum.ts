/**
 * Enumeration of HTTP client error status codes (4xx).
 * These codes indicate issues with the client's request, such as invalid syntax,
 * authentication problems, or attempts to access restricted resources.
 * Each status code is accompanied by a brief description of its meaning.
 */
enum ClientErrorStatus {
  /** Malformed request syntax or invalid parameters */
  BAD_REQUEST = 400,

  /** Authentication failed or missing */
  UNAUTHORIZED = 401,

  /** Authenticated but not authorized */
  FORBIDDEN = 403,

  /** Resource not found */
  NOT_FOUND = 404,

  /** HTTP method not allowed for this endpoint */
  METHOD_NOT_ALLOWED = 405,

  /** Request conflicts with existing data (e.g., duplicate entry) */
  CONFLICT = 409,

  /** Resource is no longer available */
  GONE = 410,

  /** Missing required request headers */
  PRECONDITION_FAILED = 412,

  /** Invalid request data (validation errors) */
  UNPROCESSABLE_ENTITY = 422,

  /** Too many requests (rate limiting) */
  TOO_MANY_REQUESTS = 429,
}

export default ClientErrorStatus;
