import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base dimensions (iPhone 11 Pro - 375x812)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// Breakpoints
export const BREAKPOINTS = {
  small: 320,   // iPhone SE, small Android phones
  medium: 375,  // iPhone 11 Pro, standard phones
  large: 414,   // iPhone 11 Pro Max, large phones
  xlarge: 768,  // Tablets
};

/**
 * Get responsive width based on screen width
 * @param {number} size - Base size
 * @returns {number} - Responsive size
 */
export const wp = (size) => {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  return PixelRatio.roundToNearestPixel(size * scale);
};

/**
 * Get responsive height based on screen height
 * @param {number} size - Base size
 * @returns {number} - Responsive size
 */
export const hp = (size) => {
  const scale = SCREEN_HEIGHT / BASE_HEIGHT;
  return PixelRatio.roundToNearestPixel(size * scale);
};

/**
 * Get responsive font size
 * @param {number} size - Base font size
 * @returns {number} - Responsive font size
 */
export const fontSize = (size) => {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  const newSize = size * scale;
  
  // Limit font size scaling
  if (SCREEN_WIDTH < BREAKPOINTS.small) {
    return Math.max(newSize * 0.9, size * 0.8);
  }
  if (SCREEN_WIDTH > BREAKPOINTS.large) {
    return Math.min(newSize * 1.1, size * 1.2);
  }
  
  return PixelRatio.roundToNearestPixel(newSize);
};

/**
 * Check if screen is small
 * @returns {boolean}
 */
export const isSmallScreen = () => SCREEN_WIDTH < BREAKPOINTS.medium;

/**
 * Check if screen is medium
 * @returns {boolean}
 */
export const isMediumScreen = () => 
  SCREEN_WIDTH >= BREAKPOINTS.medium && SCREEN_WIDTH < BREAKPOINTS.large;

/**
 * Check if screen is large
 * @returns {boolean}
 */
export const isLargeScreen = () => SCREEN_WIDTH >= BREAKPOINTS.large;

/**
 * Get number of columns based on screen size
 * @param {number} defaultCols - Default number of columns
 * @returns {number} - Responsive number of columns
 */
export const getColumns = (defaultCols = 2) => {
  if (SCREEN_WIDTH < BREAKPOINTS.small) {
    return 1;
  }
  if (SCREEN_WIDTH >= BREAKPOINTS.large) {
    return defaultCols + 1;
  }
  return defaultCols;
};

/**
 * Get responsive padding/margin
 * @param {number} size - Base size
 * @returns {number} - Responsive size
 */
export const spacing = (size) => {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  return PixelRatio.roundToNearestPixel(size * scale);
};

export default {
  wp,
  hp,
  fontSize,
  spacing,
  isSmallScreen,
  isMediumScreen,
  isLargeScreen,
  getColumns,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  BREAKPOINTS,
};

