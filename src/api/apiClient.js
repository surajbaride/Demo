/**
 * API Client
 * Centralized API configuration and helper functions
 */

const BASE_URL = 'http://localhost:3000'; // For json-server
// For in-app mock API, we'll use local data

/**
 * Simulate API delay
 * @param {number} ms - Milliseconds to delay
 */
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Mock API Response Handler
 * Simulates network request with delay
 * @param {any} data - Data to return
 * @param {boolean} shouldFail - Whether to simulate error
 * @param {number} delayMs - Delay in milliseconds
 */
export const mockApiCall = async (data, shouldFail = false, delayMs = 500) => {
  await delay(delayMs);

  if (shouldFail) {
    throw new Error('API request failed');
  }

  return data;
};

/**
 * Handle API errors
 * @param {Error} error - Error object
 * @returns {string} - User-friendly error message
 */
export const handleApiError = (error) => {
  if (error.message) {
    return error.message;
  }
  return 'An unexpected error occurred. Please try again.';
};

export default {
  BASE_URL,
  delay,
  mockApiCall,
  handleApiError,
};

