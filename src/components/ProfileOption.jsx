import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { colors, spacing, typography, shadows } from '../theme';
import { fontSize, isSmallScreen } from '../utils/responsive';

/**
 * ProfileOption Component
 * Displays a profile menu option
 * @param {Object} props - Component props
 * @param {string} props.icon - Icon/emoji for the option
 * @param {string} props.title - Title text
 * @param {Function} props.onPress - Callback function when pressed
 */
const ProfileOption = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <BlurView intensity={15} style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.icon}>{icon}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </BlurView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.glassLight,
    padding: isSmallScreen() ? spacing.md : spacing.lg,
    marginHorizontal: isSmallScreen() ? spacing.md : spacing.lg,
    marginVertical: spacing.xs,
    borderRadius: spacing.lg,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    ...shadows.light,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: isSmallScreen() ? 20 : 24,
    marginRight: spacing.lg,
  },
  title: {
    fontSize: fontSize(typography.fontSize.md),
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },
  arrow: {
    fontSize: isSmallScreen() ? 20 : 24,
    color: colors.textLight,
  },
});

export default ProfileOption;

