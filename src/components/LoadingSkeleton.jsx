import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { colors, spacing } from '../theme';

/**
 * LoadingSkeleton Component
 * Shows loading placeholder with shimmer effect
 * @param {Object} props - Component props
 * @param {number} props.width - Width of skeleton
 * @param {number} props.height - Height of skeleton
 * @param {string} props.style - Additional styles
 */
const LoadingSkeleton = ({ width = '100%', height = 20, style }) => {
  const shimmerAnimation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const opacity = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  return (
    <Animated.View
      style={[
        styles.skeleton,
        { width, height, opacity },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: colors.borderDark,
    borderRadius: spacing.sm,
  },
});

export default LoadingSkeleton;

