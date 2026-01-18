import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { BlurView } from 'expo-blur';
import { colors, spacing, typography, shadows } from '../theme';
import { wp, hp, fontSize, isSmallScreen } from '../utils/responsive';

/**
 * FeaturedProductCard Component
 * Displays featured product in a larger card format
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data object
 * @param {Function} props.onPress - Callback function when card is pressed
 */
const FeaturedProductCard = ({ product, onPress }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.9}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        <BlurView intensity={15} style={styles.infoContainer}>
          <Text style={styles.name} numberOfLines={2}>
            {product.name}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>⭐ {product.rating}</Text>
            </View>
          </View>
        </BlurView>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.glassLight,
    borderRadius: spacing.lg,
    marginRight: spacing.lg,
    width: isSmallScreen() ? wp(180) : wp(200),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.glassBorder,
    ...shadows.glass,
  },
  imageContainer: {
    width: '100%',
    height: hp(180),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: spacing.md,
    backgroundColor: colors.glass,
  },
  name: {
    fontSize: fontSize(typography.fontSize.md),
    fontWeight: typography.fontWeight.semiBold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: fontSize(typography.fontSize.lg),
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: fontSize(typography.fontSize.xs),
    color: colors.textSecondary,
  },
});

export default FeaturedProductCard;

