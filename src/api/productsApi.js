import { mockApiCall, handleApiError } from './apiClient';
import { products } from '../data/products';

/**
 * Products API
 * Handles all product-related API calls
 */

/**
 * Fetch all products
 * @returns {Promise<Array>} - Array of products
 */
export const fetchProducts = async () => {
  try {
    // Simulate API call with delay
    const data = await mockApiCall(products, false, 800);
    return {
      success: true,
      data,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: handleApiError(error),
    };
  }
};

/**
 * Fetch product by ID
 * @param {number} productId - Product ID
 * @returns {Promise<Object>} - Product object
 */
export const fetchProductById = async (productId) => {
  try {
    await mockApiCall(null, false, 500);
    
    const product = products.find((p) => p.id === productId);
    
    if (!product) {
      return {
        success: false,
        data: null,
        error: 'Product not found',
      };
    }

    return {
      success: true,
      data: product,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: handleApiError(error),
    };
  }
};

/**
 * Fetch products by category
 * @param {string} category - Category name
 * @returns {Promise<Array>} - Array of filtered products
 */
export const fetchProductsByCategory = async (category) => {
  try {
    await mockApiCall(null, false, 600);
    
    const filteredProducts = products.filter(
      (product) => product.category === category
    );

    return {
      success: true,
      data: filteredProducts,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: handleApiError(error),
    };
  }
};

export default {
  fetchProducts,
  fetchProductById,
  fetchProductsByCategory,
};

