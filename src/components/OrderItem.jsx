import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography, shadows } from '../theme';
import strings from '../constants/strings';
import { fontSize, isSmallScreen } from '../utils/responsive';

/**
 * OrderItem Component
 * Displays order information in a list item
 * @param {Object} props - Component props
 * @param {Object} props.order - Order data object
 */
const OrderItem = ({ order }) => {
  // Determine status color
  const getStatusColor = (status) => {
    if (status === 'Delivered') {
      return colors.delivered;
    } else if (status === 'Pending') {
      return colors.pending;
    }
    return colors.textSecondary;
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.orderNumber}>{order.orderId}</Text>
          <Text style={styles.date}>{formatDate(order.createdAt)}</Text>
        </View>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: getStatusColor(order.orderStatus) },
          ]}
        >
          <Text style={styles.statusText}>{order.orderStatus}</Text>
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <Text style={styles.itemText}>
          {order.quantity}x {order.productName}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.total}>{strings.total}: ${order.totalPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: spacing.lg,
    padding: isSmallScreen() ? spacing.md : spacing.lg,
    marginVertical: spacing.sm,
    marginHorizontal: isSmallScreen() ? spacing.md : spacing.lg,
    ...shadows.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  orderNumber: {
    fontSize: fontSize(typography.fontSize.md),
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  date: {
    fontSize: fontSize(typography.fontSize.xs),
    color: colors.textSecondary,
  },
  statusBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: spacing.lg,
  },
  statusText: {
    color: colors.textWhite,
    fontSize: fontSize(typography.fontSize.xs),
    fontWeight: typography.fontWeight.semiBold,
  },
  itemsContainer: {
    marginBottom: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  itemText: {
    fontSize: fontSize(typography.fontSize.sm),
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  footer: {
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  total: {
    fontSize: fontSize(typography.fontSize.md),
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
});

export default OrderItem;

