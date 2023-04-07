/**
 * This function is for logging to console in development environment.
 * Logs printed by this function won't show up in production.
 *
 *
 * ```js
 * const count = 5;
 * logger('count: %d', count);
 * // Prints: count: 5, to stdout
 * logger('count:', count);
 * // Prints: count: 5, to stdout
 * ```
 *
 */

export const logToConsole = (message: any, ...optionalParams: any[]) => {
  if (import.meta.env.PROD) return;
  // eslint-disable-next-line no-console
  console.log(message, ...optionalParams);
};
