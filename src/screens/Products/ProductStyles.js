import { StyleSheet } from 'react-native';
import { colors, spacing, typography, shadows } from '../../theme';
import { wp, hp, fontSize, isSmallScreen } from '../../utils/responsive';

const ProductStyles = StyleSheet.create({
  // Product List Screen Styles
  listContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    padding: spacing.sm,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xxl,
  },
  loadingText: {
    marginTop: spacing.md,
    fontSize: fontSize(typography.fontSize.md),
    color: colors.textSecondary,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xxl,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: fontSize(typography.fontSize.md),
    color: colors.textSecondary,
  },

  // Product Details Screen Styles
  detailsContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  detailsImage: {
    width: '100%',
    height: hp(350),
    resizeMode: 'cover',
  },
  detailsInfo: {
    padding: isSmallScreen() ? spacing.lg : spacing.xl,
    paddingBottom: hp(100), // Space for floating button
  },
  detailsName: {
    fontSize: fontSize(typography.fontSize.xxxl),
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  detailsPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  detailsPrice: {
    fontSize: fontSize(typography.fontSize.huge),
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
  detailsRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsRating: {
    fontSize: fontSize(typography.fontSize.lg),
    color: colors.textSecondary,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: spacing.lg,
    marginBottom: spacing.xxl,
    ...shadows.medium,
  },
  categoryText: {
    color: colors.textWhite,
    fontSize: fontSize(typography.fontSize.sm),
    fontWeight: typography.fontWeight.semiBold,
  },
  descriptionSection: {
    marginBottom: spacing.xxl,
    paddingBottom: spacing.xxl,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  descriptionTitle: {
    fontSize: fontSize(typography.fontSize.xl),
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  descriptionText: {
    fontSize: fontSize(typography.fontSize.md),
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.relaxed * fontSize(typography.fontSize.md),
  },
  detailsSection: {
    marginTop: spacing.sm,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  detailLabel: {
    fontSize: fontSize(typography.fontSize.md),
    color: colors.textSecondary,
    fontWeight: typography.fontWeight.medium,
  },
  detailValue: {
    fontSize: fontSize(typography.fontSize.md),
    color: colors.textPrimary,
    fontWeight: typography.fontWeight.semiBold,
  },
  errorText: {
    fontSize: fontSize(typography.fontSize.lg),
    color: colors.danger,
    textAlign: 'center',
    marginTop: hp(50),
  },
  orderButtonContainer: {
    position: 'absolute',
    bottom: spacing.xl,
    left: spacing.xl,
    right: spacing.xl,
    ...shadows.large,
  },
  orderButton: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderButtonText: {
    color: colors.textWhite,
    fontSize: fontSize(typography.fontSize.lg),
    fontWeight: typography.fontWeight.bold,
  },
});

export default ProductStyles;

