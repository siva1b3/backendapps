/**
 * Enum representing standard HTTP status codes for success (2xx) and redirection (3xx).
 *
 * - Success codes (2xx) indicate that the client's request was successfully received, understood, and accepted.
 * - Redirection codes (3xx) indicate that further action needs to be taken by the user agent to fulfill the request.
 */
enum ResponseStatus {
  /** The request succeeded */
  OK = 200,

  /** A new resource was created */
  CREATED = 201,

  /** The request was accepted but processing is not complete */
  ACCEPTED = 202,

  /** No content to return (successful but empty response) */
  NO_CONTENT = 204,

  /** Partial content (e.g., for pagination) */
  PARTIAL_CONTENT = 206,

  /** The resource has been permanently moved */
  MOVED_PERMANENTLY = 301,

  /** The resource was found at a different URI */
  FOUND = 302,

  /** The resource has not been modified (caching) */
  NOT_MODIFIED = 304,

  /** Temporary redirect */
  TEMPORARY_REDIRECT = 307,

  /** Permanent redirect */
  PERMANENT_REDIRECT = 308,
}

export default ResponseStatus;
