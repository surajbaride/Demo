import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { colors, spacing, typography, shadows } from '../theme';
import strings from '../constants/strings';
import { wp, hp, fontSize, isSmallScreen } from '../utils/responsive';

/**
 * ProfileHeader Component
 * Displays user profile header with avatar and name
 */
const ProfileHeader = () => {
  return (
    <BlurView intensity={20} style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{strings.userName}</Text>
      <Text style={styles.email}>{strings.userEmail}</Text>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: isSmallScreen() ? spacing.xxl : spacing.xxxl,
    backgroundColor: colors.glassLight,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    ...shadows.light,
  },
  avatar: {
    width: isSmallScreen() ? wp(90) : wp(100),
    height: isSmallScreen() ? wp(90) : wp(100),
    borderRadius: isSmallScreen() ? wp(45) : wp(50),
    marginBottom: spacing.lg,
    borderWidth: 3,
    borderColor: colors.primary,
    ...shadows.medium,
  },
  name: {
    fontSize: fontSize(typography.fontSize.xxl),
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  email: {
    fontSize: fontSize(typography.fontSize.md),
    color: colors.textSecondary,
  },
});

export default ProfileHeader;

