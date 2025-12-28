/**
 * Centralized error handling utility
 * Provides consistent error handling patterns across the application
 */

/**
 * Formats error messages for display to users
 * @param {Error|string} error - The error object or message
 * @param {string} defaultMessage - Default message if error cannot be parsed
 * @returns {string} Formatted error message
 */
export const formatErrorMessage = (error, defaultMessage = 'خطایی رخ داده است') => {
  if (typeof error === 'string') {
    return error;
  }
  
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  
  if (error?.message) {
    return error.message;
  }
  
  return defaultMessage;
};

/**
 * Handles API errors consistently
 * @param {Error} error - The error object
 * @param {Function} onError - Callback function to handle the error
 * @returns {Object} Error information object
 */
export const handleApiError = (error, onError = null) => {
  const errorMessage = formatErrorMessage(error);
  const errorInfo = {
    success: false,
    message: errorMessage,
    error: error,
  };
  
  if (onError && typeof onError === 'function') {
    onError(errorInfo);
  }
  
  return errorInfo;
};

/**
 * Creates a safe error boundary handler
 * @param {Error} error - The error object
 * @param {Object} errorInfo - Additional error information
 * @returns {Object} Error details for logging
 */
export const handleErrorBoundary = (error, errorInfo = {}) => {
  const errorDetails = {
    message: error.message,
    stack: error.stack,
    componentStack: errorInfo.componentStack,
    timestamp: new Date().toISOString(),
  };
  
  // In production, send to error tracking service
  if (import.meta.env.PROD) {
    // TODO: Integrate with error tracking service (e.g., Sentry)
    // errorTrackingService.captureException(error, errorDetails);
  }
  
  return errorDetails;
};

export default {
  formatErrorMessage,
  handleApiError,
  handleErrorBoundary,
};

