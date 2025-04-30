/**
 * This enum represents HTTP server error status codes (5xx) as well as custom application-specific error codes.
 *
 * Standard HTTP status codes:
 * - INTERNAL_SERVER_ERROR (500): A generic error indicating that the server encountered an unexpected condition.
 * - NOT_IMPLEMENTED (501): Indicates that the server does not support the functionality required to fulfill the request.
 * - SERVICE_UNAVAILABLE (503): Indicates that the server is currently unable to handle the request due to temporary overload or maintenance.
 * - GATEWAY_TIMEOUT (504): Indicates that the server, acting as a gateway or proxy, did not receive a timely response from an upstream server.
 *
 * Custom application-specific error codes:
 * - DATABASE_ERROR (510): Represents a failure in database operations, such as query execution or connection issues.
 * - EXTERNAL_API_ERROR (520): Represents a failure in communication with a third-party API or external service.
 * - RATE_LIMIT_EXCEEDED (529): Indicates that the client has exceeded the allowed number of requests within a given time frame.
 * - INSUFFICIENT_STORAGE (507): Represents a scenario where the server has insufficient storage to complete the request, such as during file uploads.
 */
enum ServerErrorStatus {
  /** Generic server-side error */
  INTERNAL_SERVER_ERROR = 500,

  /** Server does not support the requested functionality */
  NOT_IMPLEMENTED = 501,

  /** Server is down or overloaded */
  SERVICE_UNAVAILABLE = 503,

  /** Server timed out waiting for a response */
  GATEWAY_TIMEOUT = 504,

  /** Custom: Database operation failed */
  DATABASE_ERROR = 510,

  /** Custom: Third-party API failure */
  EXTERNAL_API_ERROR = 520,

  /** Custom: Rate limit exceeded */
  RATE_LIMIT_EXCEEDED = 529,

  /** Custom: Insufficient storage (e.g., file uploads) */
  INSUFFICIENT_STORAGE = 507,
}

export default ServerErrorStatus;
