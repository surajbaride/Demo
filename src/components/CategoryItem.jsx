import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../theme';
import { wp, hp, fontSize, isSmallScreen } from '../utils/responsive';

/**
 * CategoryItem Component
 * Displays a category in a horizontal list
 * @param {Object} props - Component props
 * @param {Object} props.category - Category data object
 * @param {Function} props.onPress - Callback function when category is pressed
 */
const CategoryItem = ({ category, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{category.icon}</Text>
      </View>
      <Text style={styles.name}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: spacing.lg,
    width: isSmallScreen() ? wp(70) : wp(80),
  },
  iconContainer: {
    width: isSmallScreen() ? wp(55) : wp(60),
    height: isSmallScreen() ? wp(55) : wp(60),
    borderRadius: spacing.xl,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  icon: {
    fontSize: isSmallScreen() ? 26 : 30,
  },
  name: {
    fontSize: fontSize(typography.fontSize.xs),
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
    textAlign: 'center',
  },
});

export default CategoryItem;

