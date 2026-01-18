import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { colors, spacing, shadows } from '../theme';

/**
 * GlassCard Component
 * Reusable glassmorphism card component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {Object} props.style - Additional styles
 * @param {string} props.intensity - Blur intensity (light, medium, heavy)
 */
const GlassCard = ({ children, style, intensity = 20 }) => {
  return (
    <View style={[styles.container, style]}>
      <BlurView intensity={intensity} style={styles.blurView}>
        <View style={styles.content}>{children}</View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: spacing.lg,
    overflow: 'hidden',
    backgroundColor: colors.glass,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    ...shadows.glass,
  },
  blurView: {
    flex: 1,
    borderRadius: spacing.lg,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    backgroundColor: colors.glassLight,
    borderRadius: spacing.lg,
  },
});

export default GlassCard;

