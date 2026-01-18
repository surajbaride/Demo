import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';
import { fontSize, isSmallScreen } from '../../utils/responsive';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    marginTop: spacing.xxl,
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    fontSize: fontSize(typography.fontSize.xl),
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.lg,
    marginHorizontal: isSmallScreen() ? spacing.md : spacing.lg,
  },
  categoryList: {
    paddingHorizontal: isSmallScreen() ? spacing.md : spacing.lg,
  },
  featuredList: {
    paddingHorizontal: isSmallScreen() ? spacing.md : spacing.lg,
  },
});

export default HomeStyles;

